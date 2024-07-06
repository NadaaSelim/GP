"use client";
import React, { useState, useEffect } from "react";
import { Button, Text, Input, Heading } from "../components";
import { isAuth } from "../auth";

const Changepassword1Page: React.FC = () => {
  
  if (!isAuth()) {
    window.location.href = "../login";
  }

  const handleSubmit = async () => {
    let inputEmail =  (document.getElementById('email') as HTMLInputElement);
    
    let user = (localStorage.getItem('user'));
    const oldpass = (document.getElementById('oldpass') as HTMLInputElement).value;
    const newpass = (document.getElementById('newpass') as HTMLInputElement).value;
   
    if (inputEmail==null ||user==null || inputEmail.value != JSON.parse(user).email) {
      alert("Incorrect Email"); return;
    }
    let email = inputEmail.value
    console.log(user)
   
    if(oldpass==newpass){
      alert("New Password should not be the same as Old Password");
      return;
    }
  
 
    try {
      const response = await fetch("http://127.0.0.1:8000/user/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          email,
          old_password: oldpass,
          new_password: newpass,
        }),
      });
      const responseData = await response.json();

      if(response.ok && responseData){
      alert("Password changed successfully");
      window.location.href="../dashboard";}
    } catch (error) {
      alert("Wrong Password")
    }
  };

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
          id="email"
          placeholder="yara@mail.com"
          className="w-full mt-6 tracking-[1.92px] font-medium"
          //value={email}
    //      onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
        />
        <Input
          shape="round"
          type="password"
          name="oldPassword"
          id="oldpass"
          placeholder="Old Password"
          className="w-full mt-6 tracking-[1.92px] font-medium"
          //value={oldPassword}
      //    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setOldPassword(e.target.value)}
        />
        <Input
          shape="round"
          type="password"
          name="newPassword"
          id="newpass"
          placeholder="New Password"
          className="w-full mt-6 tracking-[1.92px] font-medium"
          //value={newPassword}
     //     onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNewPassword(e.target.value)}
        />
        <Button
          shape="round"
          className="mt-8 tracking-[2.56px] font-extrabold min-w-[294px]"
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Changepassword1Page;
