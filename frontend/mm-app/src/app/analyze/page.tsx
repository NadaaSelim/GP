"use client"
import React from "react";
import { Img, Text, Button, Input, Heading, SelectBox,Sidebar1,Header } from "../components";
import Link from "next/link";


const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" }
  ];
  
export default function AnalyzereviewsPage(){
    return(
        <>
    <div className="flex flex-row justify-center w-full bg-white-A700">
    <div className="h-[982px] w-full relative">
    <div className="flex flex-row md:flex-col justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto md:gap-5 absolute">
    <Sidebar1 className="w-[242px] min-h-screen top-0 bg-gray-100_03 !sticky overflow-hidden "/>
    <div className="h-px w-full mt-16 ml-[240px] md:ml-0 md:mt-0 bg-blue_gray-100_02"/>
    </div>
    <Header className="flex flex-row justify-between items-center w-[77%] sm:w-full right-[5%] top-[2%] m-auto absolute z-10"/>
    <div className="flex flex-col items-start justify-start w-[66%] h-max mr-[216px] right-[14%] bottom-0 top-0 my-auto md:mr-5 absolute z-0">
    <div className="flex flex-row sm:flex-col justify-between items-center w-[49%] md:w-full mt-[158px] ml-[212px] md:ml-5 sm:gap-10">

    <Heading size="lg"as="h1"className="!text-blue_gray-900_01 tracking-[0.50px]">
    Review Analysis
    </Heading>
    </div>
    <div className="flex flex-row sm:flex-col justify-between items-center w-[49%] md:w-full mt-[100px] ml-[212px] md:ml-5 sm:gap-10">

    <Text size="lg"as="p"className="mb-px tracking-[0.50px]">
    Brand
    </Text>
    <SelectBox
    shape="round"
    indicator={<Img src="../images/img_polygon.svg" alt="Polygon"/>}
    name="selectabrand"
    placeholder="Select a Brand"
    options={dropDownOptions}
    className="w-[59%] font-inter border-black-900 border-[0.5px] border-solid ml-[10px]"
    />
    </div>
    <div className="flex flex-row sm:flex-col justify-between items-center w-[49%] md:w-full mt-[100px] ml-[212px] md:ml-5 sm:gap-10">
    <Text size="lg"as="p"className="tracking-[0.50px] text-right">
    Competitors
    </Text>
    <SelectBox
    shape="round"
    indicator={<Img src="../images/img_polygon.svg"alt="Polygon"/>}
    name="select"
    placeholder="Select Competitors"
    options={dropDownOptions}
    className="w-[59%] font-inter border-black-900 border-[0.5px] border-solid ml-[10px]"
    />
    </div>
    {/* <div className="flex flex-col items-start justify-start w-[84%] md:w-full mt-[51px] ml-[163px] md:ml-5"> */}
    <div className="flex flex-row sm:flex-col justify-between items-center w-[49%] md:w-full mt-[100px] ml-[212px] md:ml-5 sm:gap-10">

    <Text size="lg"as="p"className="mb-0.5 tracking-[0.50px] text-right">
Platforms
</Text>
<SelectBox
shape="round"
indicator={<Img src="../images/img_polygon.svg"alt="Polygon"/>}
name="selectabrand"
placeholder="Select Platforms"
options={dropDownOptions}
className="w-[59%] sm:w-full gap-px font-inter border-black-900 border-[0.5px] border-solid"
/>
</div>
<div className="flex flex-row sm:flex-col justify-between items-center w-[49%] md:w-full mt-[100px] ml-[212px] md:ml-5 sm:gap-10">
<Text size="lg"as="p"className="tracking-[0.50px] text-right">
Start date
</Text>
<Input
color="white A700"
size="md"
variant="fill"
name="date"
placeholder="11/12/2023"
className="w-[60%] sm:w-full font-inter border-black-900 border border-solid rounded-[5px]"
/>
</div>
<div className="flex flex-row sm:flex-col justify-between items-center w-[49%] md:w-full mt-[100px] ml-[212px] md:ml-5 sm:gap-10">
<Text size="lg"as="p"className="tracking-[0.50px]text-right">
End date
</Text>
<Input
color="white A700"
size="md"
variant="fill"
name="groupninetysix"
placeholder="12/2/2024"
className="w-[62%] sm:w-full font-inter border-black-900 border border-solid rounded-md"
/>
</div>
<Button
shape="round"
className="mt-[106px] ml-[539px] md:ml-5 sm:px-5 tracking-[2.40px] font-extrabold min-w-[294px] sm:min-w-full"
>
Analyze
</Button>
{/* </div> */}
</div>
</div>
</div>
</>
);
}