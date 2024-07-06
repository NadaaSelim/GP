"use client"
import React from "react";
import { Button, Text, Input, Heading } from "../components";
import {isAuth} from "../auth"
import { useRouter } from "next/router";


async function changePassword(email: string, oldPassword: string, newPassword: string, router: ReturnType<typeof useRouter>) {
  try {
    const response = await fetch("http://127.0.0.1:8000/user/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        email,
        old_password: oldPassword,
        new_password: newPassword,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to change password");
    }

    const result = await response.json();
    alert("Password changed successfully");
    router.push("../dashboard");
  } catch (error) {
  }
}



function changePass(router: ReturnType<typeof useRouter>) {
  const oldpass = (document.getElementById('oldpass') as HTMLInputElement).value;
  const newpass = (document.getElementById('newpass') as HTMLInputElement).value;
  const user = localStorage.getItem('user');
  if (!user) {
    alert("user not found");
    return;
  }

  const parsedUser = JSON.parse(user);
  if(parsedUser.password != oldpass ){
    alert("Wrong Password"); return;
  }
  if(oldpass==newpass){
    alert("New Password should not be the same as Old Password");
    return;
  }


}

export default function Changepassword2Page() {
  const router = useRouter();

  if(!isAuth()){
    window.location.href = "../login"; return;
  }

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
          id="oldpass"
          placeholder="Old Password"
          className="w-full mt-6 tracking-[1.92px] font-medium"
        />
        <Input
          shape="round"
          type="password"
          name="pass2"
          id="newpass"
          placeholder="New Password"
          className="w-full mt-6 tracking-[1.92px] font-medium"
        />
        
        <Button
          shape="round"
          className="mt-8 tracking-[2.56px] font-extrabold min-w-[294px]"
          onClick={() =>changePass(router)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
