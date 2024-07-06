"use client";

import * as z from "zod";

import { CardWrapper } from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useState, useTransition } from "react";
import { RegisterSchema } from "@/schemas";
import { register } from "@/actions/register";
import CustomInput from "./CustomInput";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const formSchema = RegisterSchema;

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address1: "",
      city: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <>
        <CardWrapper
          headerLabel="Create an Account"
          backButtonLabel="Already have an account?"
          backButtonHref="/auth/login"
          showSocial
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="Enter Your First Name"
                />
                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter Your Last Name"
                />
              </div>
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter Your Email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter Your Password"
              />
              <CustomInput
                control={form.control}
                name="address1"
                label="Address"
                placeholder="Type Your Address"
              />
              <CustomInput
                control={form.control}
                name="city"
                label="City"
                placeholder="Type Your City"
              />
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="state"
                  label="State"
                  placeholder="Example: NY"
                />
                <CustomInput
                  control={form.control}
                  name="postalCode"
                  label="Postal Code"
                  placeholder="Example: 11101"
                />
              </div>

              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                />
                <CustomInput
                  control={form.control}
                  name="ssn"
                  label="SSN"
                  placeholder="Enter Your SSN"
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit" className="w-full" disabled={isPending}>
                Create
              </Button>
            </form>
          </Form>
        </CardWrapper>
    </>
  );
};
