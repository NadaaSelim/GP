"use client"
import React from "react";
import { Button, Text, Input, Heading } from "../components";

export default function Changepassword1Page() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-indigo-200">
      <div className="flex flex-col items-center justify-start w-full max-w-[999px] p-[55px] bg-gray-100 rounded-lg shadow-lg">
        <Heading size="2xl" as="h1" className="tracking-[3.84px] text-center text-black-900">
          Enter Your New Password
        </Heading>
        <Text size="5xl" as="p" className="mt-4 text-[24.82px] text-gray-500">
          Your new Password must be different than your old password
        </Text>
        <Input
          shape="round"
          type="password"
          name="pass1"
          id="pass1"
          placeholder="Old Password"
          className="w-full mt-6 tracking-[1.92px] font-medium"
        />
        <Input
          shape="round"
          type="password"
          name="pass2"
          id="pass2"
          placeholder="New Password"
          className="w-full mt-6 tracking-[1.92px] font-medium"
        />
        
        <Button
          shape="round"
          className="mt-8 tracking-[2.56px] font-extrabold min-w-[294px]"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
