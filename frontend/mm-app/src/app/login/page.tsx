"use client"
import React from "react";
import { Img, Text, Button, Input, Heading, SelectBox } from "../components";
import Link from "next/link";
import { useRouter } from "next/navigation"; 


const Login: React.FC = () => {
  const router = useRouter();
  localStorage.clear();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    console.log(email, password);
    try{
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      console.log("Good to go")

      const token = await response.json();
      localStorage.setItem('token', token.access_token);
      console.log(token);
      //redirect to  next page
      router.push('/dashboard');
    } else {
      const errorResponse = await response.json(); 
      alert(errorResponse.detail); 
      console.log(errorResponse.detail);  
      return;  
    }

    const getUser = await fetch('http://localhost:8000/user/userinfo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      
    });

    if (getUser.ok) {
      const userresp = await getUser.json();
      localStorage.setItem('user', JSON.stringify(userresp));
      console.log(userresp);
      //redirect to  next page
      console.log("Good to go")
      router.push('/dashboard');
    } else {
      console.error('Couldnt retrieve user ');
    }
  }catch(error){ console.error(error);}
  };

  return (
    <>
      <title>Login</title>
      <meta name="description" content="Web site created using create-react-app" />
      <div className="flex flex-row justify-center items-center min-h-screen w-full bg-gray-100_03">

        <div className="h-[982px] w-full pl-[18px] bg-indigo-400_01 shadow-xs relative">
          <div className="flex flex-col justify-center items-start w-1/2">
          <Img src="../images/img_doodle_2_1.png"alt="doodle2oneone"className="w-[156px] md:h-auto object-cover"/>
          <Img
src="../images/img_doodle_4_1.png"
alt="doodle4oneone"
className="w-[156px] md:h-auto mt-[-3px] object-cover"
/>
<Img
src="../images/img_doodle_3_1.png"
alt="doodle3oneone"
className="w-[156px] md:h-auto mt-[-3px] object-cover"

></Img>

            <Img
src="../images/img_doodle_5_1.png"
alt="doodleSoneone"
              className="w-[210px] object-cover"
            />
            <Img
              src="../images/img_saly_22.png"
              alt="salytwentytwo"
              className="mb-4 w-[300px] object-cover"
            />
          </div>

          <div className="flex flex-row justify-center items-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">

            <div className="flex flex-col items-end justify-start w-[100%] ml-[87px] p-[30px] bg-white-A700 rounded-[25px]">
              <div className="flex flex-col items-start justify-start w-[73%] mb-[107px] mr-[86px] gap-[123px]">
              <div className="flex flex-row justify-start items-center ml-[500px] gap-1.5">
                  <Text size="md" as="p" className="font-medium !text-black-900 tracking-[1.12px]">
                    English (UK)
                  </Text>
                  <Img src="../../images/img_arrow_drop_down.svg" alt="arrowdropdown" className="h-6 w-6" />
                </div>                <div className="flex flex-col items-center justify-start w-[83%] gap-[50px]">
                  <h1  className="font-bold text-4xl !text-black-900  tracking-[1.92px]">
                    Log in
                  </h1>
                  <div className="flex flex-row justify-between w-full">
                    <Button
                      color="gray_100_02"
                      size="3xl"
                      variant="outline"
                      leftIcon={<Img src="../../images/img_8c030bd6bd7ee87ad41485e3c7598dd4_1.png" alt="8c030bd6bd7ee87ad41485e3c7598dd4 1" className="w-[23px] h-[27px]" />}
                      className="gap-[9px] tracking-[1.04px] font-medium min-w-[221px]"
                    >
                      Sign in with Google
                    </Button>
                    <Button
                      color="gray_100_02"
                      size="3xl"
                      variant="outline"
                      leftIcon={<Img src="../../images/img_pngegg_69_1.png" alt="pngegg (69) 1" className="w-6 h-6" />}
                      className="gap-[9px] ml-1 tracking-[1.04px] font-medium min-w-[241px]"
                    >
                      Sign in with Facebook
                    </Button>
                  </div>
                  <Text size="lg" as="p" className="!text-blue_gray-100 tracking-[1.44px]">
                    - OR -
                  </Text>
                  <form id="submitForm" onSubmit={handleSubmit} className="h-full w-full flex flex-col justify-center items-center gap-10" >
                  <Input
                    color="gray_100_02"
                    size="sm"
                    variant="underline"
                    shape="square"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    id="email"
                    className="w-full tracking-[1.12px] font-medium"
                  />
                  <Input
                    color="gray_100_02"
                    size="sm"
                    variant="underline"
                    shape="square"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full tracking-[1.12px] font-medium"
                  />
                  <Button size="2xl" type="submit" className="w-full tracking-[1.92px] font-extrabold">
                    Log in
                  </Button>
                  </form>
                  <Text size="lg" as="p" className="!text-gray-400_01 tracking-[1.44px] !font-medium">
                    <Link href="../signup"><span className="text-gray-400_01 text-lg font-normal underline">Don't have an account? </span>
                    <span className="text-blue_gray_800 text-lg font-normal underline">Sign up</span></Link>
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
          </Text>
        </div>
      </div>
      
    </>
  );
}

export default Login;
