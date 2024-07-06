"use server";

import {
  ACHClass,
  CountryCode,
  TransferAuthorizationCreateRequest,
  TransferCreateRequest,
  TransferNetwork,
  TransferType,
} from "plaid";
import { plaidClient } from "../plaid";
import { parseStringify } from "@/lib/utils";
import { db } from "@/lib/db";
import { getAccountsProps, getInstitutionProps, getTransactionsProps } from "@/index";
import { Banks, Transaction } from "@prisma/client";

// Get multiple bank accounts
export const getAccounts = async ({ userId }: getAccountsProps) => {
  try {
    // get banks from db
    const banks = await db.banks.findMany({ where: { userId } });

    const accounts = await Promise.all(
      banks?.map(async (bank: Banks) => {
        // get each account info from plaid
        const accountsResponse = await plaidClient.accountsGet({
          access_token: bank.accessToken,
        });
        const accountData = accountsResponse.data.accounts[0];

        // get institution info from plaid
        const institution = await getInstitution({
          institutionId: accountsResponse.data.item.institution_id!,
        });

        const account = {
          id: accountData.account_id,
          availableBalance: accountData.balances.available!,
          currentBalance: accountData.balances.current!,
          institutionId: institution.institution_id,
          name: accountData.name,
          officialName: accountData.official_name,
          mask: accountData.mask!,
          type: accountData.type as string,
          subtype: accountData.subtype! as string,
          bankId: bank.accountId,
          sharableId: bank.shareableId,
        };

        return account;
      })
    );

    const totalBanks = accounts.length;
    const totalCurrentBalance = accounts.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);

    return parseStringify({ data: accounts, totalBanks, totalCurrentBalance });
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
  }
};

// Get one bank account
export const getAccount = async (bankId: string) => {
  try {
    // get bank from db
    const bank = await db.banks.findUnique({ where: { accountId: bankId } });

    if (!bank) {
      throw new Error("Bank not found");
    }

    // get account info from plaid
    const accountsResponse = await plaidClient.accountsGet({
      access_token: bank.accessToken,
    });
    const accountData = accountsResponse.data.accounts[0];

    // get transfer transactions from db
    const transferTransactionsData = await db.transaction.findMany({
      where: {
        OR: [
          { senderBankId: bank.accountId },
          { receiverBankId: bank.accountId },
        ],
      },
    });

    const transferTransactions = transferTransactionsData.map(
      (transferData: Transaction) => ({
        id: transferData.id,
        name: transferData.name!,
        amount: transferData.amount!,
        paymentChannel: transferData.channel,
        date: transferData.date,
        category: transferData.category,
        type: transferData.senderBankId === bank.accountId ? "debit" : "credit",
      })
    );

    // get institution info from plaid
    const institution = await getInstitution({
      institutionId: accountsResponse.data.item.institution_id!,
    });

    const transactions = await getTransactions({
      accessToken: bank.accessToken,
    });

    const account = {
      id: accountData.account_id,
      availableBalance: accountData.balances.available!,
      currentBalance: accountData.balances.current!,
      institutionId: institution.institution_id,
      name: accountData.name,
      officialName: accountData.official_name,
      mask: accountData.mask!,
      type: accountData.type as string,
      subtype: accountData.subtype! as string,
      bankId: bank.accountId,
    };

    // sort transactions by date such that the most recent transaction is first
    const allTransactions = [...transactions, ...transferTransactions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return parseStringify({
      data: account,
      transactions: allTransactions,
    });
  } catch (error) {
    console.error("An error occurred while getting the account:", error);
  }
};

// Get bank info
export const getInstitution = async ({
  institutionId,
}: getInstitutionProps) => {
  try {
    const institutionResponse = await plaidClient.institutionsGetById({
      institution_id: institutionId,
      country_codes: ["US"] as CountryCode[],
    });

    const institution = institutionResponse.data.institution;

    return parseStringify(institution);
  } catch (error) {
    console.error("An error occurred while getting the institution:", error);
  }
};

// Get transactions
export const getTransactions = async ({
  accessToken,
}: getTransactionsProps) => {
  let hasMore = true;
  let transactions: any = [];

  try {
    // Iterate through each page of new transaction updates for item
    while (hasMore) {
      const response = await plaidClient.transactionsSync({
        access_token: accessToken,
      });

      const data = response.data;

      transactions = response.data.added.map((transaction) => ({
        id: transaction.transaction_id,
        name: transaction.name,
        paymentChannel: transaction.payment_channel,
        type: transaction.payment_channel,
        accountId: transaction.account_id,
        amount: transaction.amount,
        pending: transaction.pending,
        category: transaction.category ? transaction.category[0] : "",
        date: transaction.date,
        image: transaction.logo_url,
      }));

      hasMore = data.has_more;
    }

    return parseStringify(transactions);
  } catch (error) {
    console.error("An error occurred while getting the transactions:", error);
  }
};

// Create Transfer
export const createTransfer = async (transferData: {
  accessToken: string;
  accountId: string;
  fundingAccountId: string;
  amount: string;
  legalName: string;
}) => {
  const transferAuthRequest: TransferAuthorizationCreateRequest = {
    access_token: transferData.accessToken,
    account_id: transferData.accountId,
    funding_account_id: transferData.fundingAccountId,
    type: "credit" as TransferType,
    network: "ach" as TransferNetwork,
    amount: transferData.amount,
    ach_class: "ppd" as ACHClass,
    user: {
      legal_name: transferData.legalName,
    },
  };
  try {
    const transferAuthResponse = await plaidClient.transferAuthorizationCreate(
      transferAuthRequest
    );
    const authorizationId = transferAuthResponse.data.authorization.id;

    const transferCreateRequest: TransferCreateRequest = {
      access_token: transferData.accessToken,
      account_id: transferData.accountId,
      description: "payment",
      authorization_id: authorizationId,
    };

    const responseCreateResponse = await plaidClient.transferCreate(
      transferCreateRequest
    );

    const transfer = responseCreateResponse.data.transfer;
    return parseStringify(transfer);
  } catch (error) {
    console.error(
      "An error occurred while creating transfer authorization:",
      error
    );
  }
};
