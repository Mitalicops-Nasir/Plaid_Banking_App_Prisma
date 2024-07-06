import { getAccounts } from "@/actions/banking-functionality/bank.actions";
import BankCard from "@/components/banking_dashboard/BankCard";
import HeaderBox from "@/components/banking_dashboard/HeaderBox";
import { Account } from "@/index";
import { currentUser } from "@/lib/auth";
import React from "react";

const MyBanks = async () => {
  const loggedIn = await currentUser();
  const accounts = await getAccounts({
    userId: loggedIn?.id,
  });

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts.data.map((a: Account) => (
                <BankCard
                  key={accounts.id}
                  account={a}
                  userName={loggedIn?.firstName}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
