"use client"
import { Helmet } from "react-helmet";
 import React from "react";
 import Link from "next/link";

import { Img, Text, Button, Input, Heading, SelectBox } from "../components";
const dropDownOptions = [
{ label: "Option1", value: "option1" },

{ label: "Option2", value: "option2" },

{ label: "Option3", value: "option3" },
]

export default function SigninpagePage() {
return (<>
<div className="flex flex-row justify-center w-full bg-white-A700">
<div className="h-[982px] w-full pl-[19px] bg-indigo-200 shadow-xs relative">
<div className="flex flex-row nd: flex-col justify-center items-center w-max h-full left-8 bottom-8 right-8 top-8 m-auto md:gap-5 absolute"> 
<div className="flex flex-row justify-center w-[47%] md:w-full z-[1]">
<Img

src="images/img_saly_22.png"
alt="salytwentytwo"
className="w-full md:h-auto sm:w-full object-cover"/>
</div>
<div className="flex flex-col items-end justify-start w-[63%] md:w-full ml-[-123px] p-[38px] md:ml-8 sm:p-5 bg-white-A700 rounded-[25px">
<div className="flex flex-col items-start justify-start w-[73%] md:w-full mb-[107px] mr-[86px] gap-[114px] md:mr-5">
{/* <SelectBox
size="xs"
variant="dropdown1"
shape="square"
indicator={<Img src="images/ing_arrow_drop_down.svg" alt="arrow_drop_down" />} name="englishuk"
placeholder="English (UK)"
options={dropDownOptions}
className="w-[20%] ml-[500px] gap-px md:ml-5 text-black-988 tracking-[1.12px]"
/> */}
{/* <div className="flex flex-row justify-start items-center ml-[500px] gap-1.5">
                  <Text size="md" as="p" className="!text-black-900 tracking-[1.12px]">
                    English (UK)
                  </Text>
                  <Img src="../../images/img_arrow_drop_down.svg" alt="arrowdropdown" className="h-6 w-6" />
                </div> */}

<div className="flex flex-col items-start justify-start w-[87%] md:w-full">
<Heading size="lg" as="h1" className="!text-black-900 tracking-[3.20px]"> Log in
</Heading>
<div className="flex flex-row sm:flex-col justify-between w-full mt-7 sm:gap-10"> 
<Button
color="gray_100_02"
size="3xl"
variant="outline"
shape="round"
leftIcon={

<Img

src="images/img_8c030bd6bd7ee87ad41485e3c7598dd4_1.png"
alt="8c030bd6bd7ee87ad41485e3c7598dd4 1"
className="w-[26px] h-[27px]"/>
}
className="gap-[17px] sm:pr-5 tracking [1.20px] font-light min-w-[256px]">
Sign in with Google
</Button>

<Button
color="gray_100_82"
size="3xl"
variant="outline"
shape="round"
leftIcon={

<Img src="images/img_pngegg_69_1.png" alt="pngegg (69) 1" className="w-[27px] h-[24px]" />
}
className="gap-2.5 tracking-[1.20px] font-light min-w-[251px]">
Sign in with Facebook
</Button>
</div>
<Text size="md" as="p" className="mt-[63px] ml-56 md:ml-5 !text-blue_gray-100 tracking [1.44px}"> -OR-
</Text>







<Input

color="gray_100_02"
size="sm"
variant="underline"
shape="square"
type="email"
name="email"
placeholder="E-mail"
className="w-[95%] sm:w-full mt-[62px] tracking [1.12px] font-medium"/>
<Input
color="gray_100_02"
size="sm"
variant="underline"
shape="square"

type="password"
name="password"
placeholder="Password"
className="w-[95%] sm:w-full mt-[46px] tracking [1.12px] font-medium"/>
<Button
size="2xl"
shape="round"
className="mt-[68px] sm:px-5 tracking-[1.92px] font-extrabold min-w-[513px] sm: min-w-full">
Log in
</Button>

<Text size="md" as="p" className="mt-[105px] !text-gray-400_01 tracking-[1.44px] font-medium"> 
<Link href="../signup"><span className="text-gray-400_01">You don't have an account</span>
<span className="text-gray-400_01">?</span>
<span className="text-blue_gray_800">Sign up</span></Link>
</Text>
</div> </div>
</div> </div>
<div className="flex flex-row justify-start w-[27%] left-[8%] top-[10%] m-auto absolute"> <div className="flex flex-row justify-between items-center w-full"></div>




<div className="flex flex-col items-center justify-start">

<Img src="images/img_doodle_2_1.png" alt="doodleoncone” "className="w-[156px] md:h-auto object-cover" />
<Img src="images/img_doodle_2_1.png" alt="doodleoncone” "className="w-[156px] md:h-auto object-cover" />

</div>

<div className="h-[303px] w-[42%] relative">
<div className="flex flex-col items-center justify-start h-[156px] w-[156px] left-0 top-0 m-auto absolute">
    <Img src="images/img_doodle_2_1.png" alt="doodleoncone” "className="w-[156px] md:h-auto object-cover" />

</div>

<div className="flex flex-col items-center justify-start h-[156px] w-[156px] left-0 top-0 m-auto absolute">
    <Img src="images/img_doodle_2_1.png" alt="doodleoncone” "className="w-[156px] md:h-auto object-cover" />

</div>

</div>
</div>
</div>
</div>
</>
);
}