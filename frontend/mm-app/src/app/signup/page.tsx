"use client";

import React, { ChangeEvent, useState } from "react";
import { Text, Button, Input, Img, Heading } from "../components";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

const SignupForm = () => {
  // const [email, setEmail] = useState<string>('');
  // const [username, setUsername] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    console.log(email, username, password);
    try{
    const response = await fetch('http://localhost:8000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    });

    if (response.ok) {
      const user = await response.json();
      localStorage.setItem('session', user);
      console.log(user.id,user.username);
      //redirect to  next page
      console.log("Good to go")
      //router.push('/addbrand');
    } else {
      console.error('Signup failed');
    }
  }catch(error){ console.error(error);}
  };

  return (
    <>
      <title>Sign Up</title>
      <meta name="description" content="Web site created using create-react-app" />
      <div className="flex flex-row justify-center items-center min-h-screen w-full bg-gray-100_03">
        <div className="h-[982px] w-full pl-[18px] bg-indigo-400_01 shadow-xs relative">
          <div className="flex flex-col justify-center items-start w-1/2">
            <Img
              src="../images/img_fb2octdenoiserbeauty_002.png"
              alt="fb2octdenoiserb"
              className=" w-[205px] object-cover"
            />
            <Img
              src="../../images/img_tw2octdenoiserbeauty_002.png"
              alt="tw2octdenoiserb"
              className=" w-[185px] object-cover"
            />
            <Img
              src="../../images/img_reddit2octdenoiserbeauty_002.png"
              alt="reddit2octdenoi"
              className="w-[210px] object-cover"
            />
            <Img
              src="../../images/img_saly_26.png"
              alt="salytwentysix"
              className="mb-4 w-[300px] object-cover"
            />
          </div>

          <div className="flex flex-row justify-center items-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
            <div className="flex flex-col items-end justify-start w-[100%] ml-[87px] p-[30px] bg-white-A700 rounded-[25px]">
              <div className="flex flex-col items-start justify-start w-[73%] mb-[107px] mr-[86px] gap-[123px]">
                <div className="flex flex-row justify-start items-center ml-[500px] gap-1.5">
                  <Text size="md" as="p" className="!text-black-900 tracking-[1.12px]">
                    English (UK)
                  </Text>
                  <Img src="../../images/img_arrow_drop_down.svg" alt="arrowdropdown" className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-center justify-start w-[83%] gap-[50px]">
                  <a href="#">
                    <Heading size="md" as="h1" className="!text-black-900 tracking-[1.92px] font-medium">
                      <span className="text-black-900 text-3xl">Create&nbsp;</span>
                      <span className="text-black-900"></span>
                      <span className="text-black-900 text-3xl">Account</span>
                    </Heading>
                  </a>
                  <div className="flex flex-row justify-between w-full">
                    <Button
                      color="gray_100_02"
                      size="3xl"
                      variant="outline"
                      leftIcon={
                        <Img
                          src="../../images/img_8c030bd6bd7ee87ad41485e3c7598dd4_1.png"
                          alt="8c030bd6bd7ee87ad41485e3c7598dd4 1"
                          className="w-[23px] h-[27px]"
                        />
                      }
                      className="gap-[9px] tracking-[1.04px] font-medium min-w-[221px]"
                    >
                      Signup with Google
                    </Button>
                    <Button
                      color="gray_100_02"
                      size="3xl"
                      variant="outline"
                      leftIcon={<Img src="../../images/img_pngegg_69_1.png" alt="pngegg (69) 1" className="w-6 h-6" />}
                      className="gap-[9px] ml-1 tracking-[1.04px] font-medium min-w-[241px]"
                    >
                      Signup with Facebook
                    </Button>
                  </div>
                  <Text size="lg" as="p" className="!text-blue_gray-100 tracking-[1.44px]">
                    - OR -
                  </Text>
                  <form id="submitForm" className="h-full w-full flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>
                    <Input
                      color="gray_100_02"
                      size="sm"
                      variant="underline"
                      shape="square"
                      type="text"
                      id="username"
                      name="fullName"
                      placeholder="Full Name"
                      className="w-full tracking-[1.12px] font-medium"
                      //onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}

                      required
                    />
                    <Input
                      color="gray_100_02"
                      size="sm"
                      variant="underline"
                      shape="square"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full tracking-[1.12px] font-medium"
                      // onChange={(changeEvent: ChangeEvent<HTMLInputElement>) => {
                      //   setEmail(changeEvent.target.value)}}
                      required
                    />
                    <Input
                      color="gray_100_02"
                      size="sm"
                      id="password"
                      variant="underline"
                      shape="square"
                      type="password"
                      name="password"
                      placeholder="Password"
                      suffix={<Img src="../../images/img_lock.svg" alt="lock" />}
                      className="w-full gap-[35px] tracking-[1.12px] font-medium"
                      // onChange={(changeEvent: ChangeEvent<HTMLInputElement>) => {
                      //   setPassword(changeEvent.target.value)}}
                      required
                    />
                    <Button size="2xl" type="submit" className="w-full tracking-[1.92px] font-extrabold">
                      Create Account
                    </Button>
                  </form>
                  <Text size="lg" as="p" className="!text-black tracking-[1.44px] !font-medium">
                    <Link href="../login"><span className="text-gray-400_01">Already have an account? </span>
                      <span className="!text-blue_gray_800">Log In</span></Link>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            size="6xl"
            as="p"
            className="w-[24%] left-[3%] top-[16%] m-auto !text-white-A700 tracking-[2.88px] absolute font-medium"
          >
            <span className="text-white-A700 tracking-[1.88px] font-extrabold">
              Getting <br />
              Started With <br />
            </span>
            <span className="text-white-A700 tracking-[3.96px] font-medium">Market Minds</span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
