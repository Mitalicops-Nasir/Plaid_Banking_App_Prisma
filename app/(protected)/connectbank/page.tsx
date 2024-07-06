"use client";


import PlaidLink from "@/components/banking_dashboard/PlaidLink";
import { useCurrentUser } from "@/hooks/use-current-user";
import React from "react";

const ConnectBankPage = () => {
  const user = useCurrentUser();

  return (
    <>
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
        </div>
      )}
    </>
  );
};

export default ConnectBankPage;
