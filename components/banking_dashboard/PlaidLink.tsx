"use client";

import React, { useCallback, useEffect, useState } from "react";

import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from "next/navigation";
import {
  createLinkToken,
  exchangePublicToken,
} from "@/actions/banking-functionality/userBank.actions";
import { PlaidLinkProps } from "@/index";
import { Button } from "../ui/button";
import { RiBankCardFill } from "react-icons/ri";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState("");

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);

      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });

      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === "primary" ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
      ) : variant === "ghost" ? (
        <Button
          onClick={() => open()}
          className="plaidlink-ghost"
          variant="ghost"
        >
          <RiBankCardFill width={24} height={24} />
          <p className="hidden text-[16px] font-semibold text-black-2 xl-block">
            Connect Bank
          </p>
        </Button>
      ) : (
        <Button onClick={() => open()} className="plaidlink-default">
          <RiBankCardFill className="text-black-1 dark:text-[#a3bdcc] text-[25px]"/>
          <p className="text-[16px] font-semibold text-black-2 dark:text-[#a3bdcc]">Connect Bank</p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
