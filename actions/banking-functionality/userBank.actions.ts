"use server";

import { revalidatePath } from "next/cache";
import {
  CountryCode,
  ProcessorTokenCreateRequest,
  ProcessorTokenCreateRequestProcessorEnum,
  Products,
} from "plaid";

import { encryptId, parseStringify } from "@/lib/utils";

import { addFundingSource } from "./dwolla.actions";
import { plaidClient } from "../plaid";
import { db } from "@/lib/db";
import { ExtendedUser } from "@/next-auth";
import {
  createBankAccountProps,
  exchangePublicTokenProps,
  getBankByAccountIdProps,
  getBankProps,
  getBanksProps,
  getUserProps,
} from "@/index";

export const createLinkToken = async (user: ExtendedUser) => {
  try {
    const tokeParams = {
      user: {
        client_user_id: user.id, // Assuming Prisma uses `id` instead of `$id`
      },
      client_name: `${user.firstName} ${user.lastName}`,
      products: ["auth"] as Products[],
      language: "en",
      country_codes: ["US"] as CountryCode[],
    };

    const response = await plaidClient.linkTokenCreate(tokeParams);

    return parseStringify({ linkToken: response.data.link_token });
  } catch (error) {
    console.error(
      "An error occurred while creating a new Horizon user:",
      error
    );
  }
};

export const exchangePublicToken = async ({
  publicToken,
  user,
}: exchangePublicTokenProps) => {
  try {
    // Exchange public token for access token and item ID
    const response = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });

    const accessToken = response.data.access_token;
    const itemId = response.data.item_id;

    // Get account information from Plaid using the access token
    const accountsResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    });

    const accountData = accountsResponse.data.accounts[0];

    // Create a processor token for Dwolla using the access token and account ID
    const request: ProcessorTokenCreateRequest = {
      access_token: accessToken,
      account_id: accountData.account_id,
      processor: "dwolla" as ProcessorTokenCreateRequestProcessorEnum,
    };

    const processorTokenResponse = await plaidClient.processorTokenCreate(
      request
    );
    const processorToken = processorTokenResponse.data.processor_token;

    // Create a funding source URL for the account using the Dwolla customer ID, processor token, and bank name
    const fundingSourceUrl = await addFundingSource({
      dwollaCustomerId: user.dwollaCustomerId,
      processorToken,
      bankName: accountData.name,
    });

    if (!fundingSourceUrl) {
      throw new Error("Failed to generate funding source URL.");
    }

    // Create a bank account using Prisma
    await createBankAccount({
      userId: user.id,
      bankId: itemId,
      accountId: accountData.account_id,
      accessToken,
      fundingSourceUrl,
      shareableId: encryptId(accountData.account_id),
    });

    revalidatePath("/");

    return parseStringify({
      publicTokenExchange: "complete",
    });
  } catch (error) {
    console.error("An error occurred while exchanging token:", error);
    throw new Error("Failed to exchange public token.");
  }
};

export const createBankAccount = async ({
  accessToken,
  userId,
  accountId,
  bankId,
  fundingSourceUrl,
  shareableId,
}: createBankAccountProps) => {
  try {
    const bankAccount = await db.banks.create({
      data: {
        accessToken,
        userId,
        accountId,
        bankId,
        fundingSourceUrl,
        shareableId,
      },
    });

    return parseStringify(bankAccount);
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export const getBanks = async ({ userId }: getBanksProps) => {
  try {
    const banks = await db.banks.findMany({
      where: { userId },
    });

    return parseStringify(banks);
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export const getId = async ({ userId }: getUserProps) => {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    return user ? parseStringify(user) : null;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export const getBank = async ({ accountId }: getBankProps) => {
  try {
    const bank = await db.banks.findUnique({
      where: { accountId: accountId },
    });

    return bank ? parseStringify(bank) : null;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export const getBankByAccountId = async ({
  accountId,
}: getBankByAccountIdProps) => {
  try {
    const bank = await db.banks.findUnique({
      where: { accountId },
    });

    return bank ? parseStringify(bank) : null;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};
