import {
  getAccount,
  getAccounts,
} from "@/actions/banking-functionality/bank.actions";
import HeaderBox from "@/components/banking_dashboard/HeaderBox";
import RecentTransactions from "@/components/banking_dashboard/RecentTransactions";
import RightSidebar from "@/components/banking_dashboard/RightSidebar";
import TotalBalanceBox from "@/components/banking_dashboard/TotalBalanceBox";
import { SearchParamProps } from "@/index";
import { currentUser } from "@/lib/auth";
import React from "react";

const DashboardPage = async ({
  searchParams: { id, page },
}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await currentUser();

  if (!loggedIn) return;

  const accountsResponse = await getAccounts({ userId: loggedIn?.id });

  if (!accountsResponse) return;

  const accountsData = accountsResponse.data;
  const bankId = (id as string) || accountsData[0]?.bankId;

  const accountResponse = await getAccount(bankId);

  if (!accountResponse) return;

  const account = accountResponse.data;
  const transactions = accountResponse.transactions;

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accountsResponse.totalBanks}
            totalCurrentBalance={accountsResponse.totalCurrentBalance}
          />
        </header>

        <RecentTransactions
          accounts={accountsData}
          transactions={transactions}
          page={currentPage}
          userId={id as string}
        />
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default DashboardPage;
