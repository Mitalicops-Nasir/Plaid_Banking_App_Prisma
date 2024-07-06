import { getAccounts } from "@/actions/banking-functionality/bank.actions";
import HeaderBox from "@/components/banking_dashboard/HeaderBox";
import PaymentTransferForm from "@/components/banking_dashboard/PaymentTransferForm";
import { currentUser } from "@/lib/auth";
import React from "react";

const Transfer = async () => {
  const loggedIn = await currentUser();
  const accounts = await getAccounts({
    userId: loggedIn?.id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
};

export default Transfer;
