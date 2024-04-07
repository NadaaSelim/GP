"use client"
import React from "react";
import { Button, Text, Input, Heading } from "../components";
import Link from "next/link";

export default function Changepassword1Page() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-indigo-200">
      <div className="flex flex-col items-center justify-start w-full max-w-[999px] p-[55px] bg-gray-100 rounded-lg shadow-lg">
        <Heading size="2xl" as="h1" className="tracking-[3.84px] text-center text-black-900">
          Reset Your Password
        </Heading>
        <Text size="5xl" as="p" className="mt-4 text-[24.82px] text-gray-500">
          Enter the email address you used to register with
        </Text>
        <Input
          shape="round"
          type="email"
          name="email"
          placeholder="yara@mail.com"
          className="w-full mt-6 tracking-[1.92px] font-medium"
        />
        <Text size="2xl" as="p" className="mt-7 text-[24.82px] text-gray-900">
          Forgot your email?
        </Text>
        <Link href="./changepass2" ><Button
          shape="round"
          className="mt-8 tracking-[2.56px] font-extrabold min-w-[294px]"
        >
          Continue
        </Button></Link>
      </div>
    </div>
  );
}
