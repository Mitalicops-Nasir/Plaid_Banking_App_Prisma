"use server";

import { CreateTransactionProps, getTransactionsByBankIdProps } from "@/index";
import { db } from "@/lib/db";
import { parseStringify } from "@/lib/utils";

export const createTransaction = async (
  transactions: CreateTransactionProps
) => {
  try {
    //console.log("Transaction data before creation:", transactions);

    const newTransaction = await db.transaction.create({
      data: {
        channel: "online",
        category: "transfer",
        amount: transactions.amount,
        email: transactions.email,
        name: transactions.name,
        receiverBankId: transactions.receiverBankId,
        receiverId: transactions.receiverId,
        senderBankId: transactions.senderBankId,
        senderId: transactions.senderId,
        date: new Date(),
      },
    });

    return parseStringify(newTransaction);
  } catch (error) {
    console.log(error);
  }
};

export const getTransactionsByBankId = async ({
  bankId,
}: getTransactionsByBankIdProps) => {
  try {
    const senderTransactions = await db.transaction.findMany({
      where: {
        OR: [{ senderBankId: bankId }, { receiverBankId: bankId }],
      },
    });

    const total = senderTransactions.length;

    return parseStringify({ total, transactions: senderTransactions });
  } catch (error) {
    console.log(error);
  }
};
