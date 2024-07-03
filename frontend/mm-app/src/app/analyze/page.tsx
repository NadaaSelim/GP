"use client"
import React, { useState } from "react";
import { Img, Text, Button, Input, Heading, SelectBox,Sidebar1,Header } from "../components";
import Link from "next/link";


const brands = [
    { label: "Mcdonalds", value: "mcdonalds" },
    { label: "Hardees", value: "hardees" },
    { label: "Option3", value: "option3" }
  ];
  
const platforms = [
    { label: "Facebook", value: "facebook" },
    { label: "Twitter", value: "twitter" }
]

export default function AnalyzereviewsPage(){
    const [selectedIndex, setSelectedIndex] = useState<number>(1);

    return(
    
    <div className="min-h-screen w-full bg-white-A700 relative">
    <div className="flex flex-row md:flex-col justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto md:gap-5 absolute">

    <Sidebar1 selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} className="w-[242px] min-h-screen top-0 bg-gray-100_03 !sticky overflow-hidden "/>
    <div className="flex flex-col justify-center items-center w-full mt-3 ml-[17%] pb-2 ">
    
    <Header />
    <div className="h-px mt-14 w-full  md:ml-0 ml-[-40px] bg-blue_gray-100_02"></div>

    <div className="flex flex-col justify-between items-start w-full h-full bg-white-A700">
    <div className="flex flex-col justify-between items-start w-full h-full bg-white-A700 gap-10">

    <h1 className="mt-3 md:ml-0 !text-blue_gray-900_01 tracking-[0.50px] text-[40px] font-medium">
    Analyze Reviews
    </h1>
    </div>
    
    <div className="flex flex-row md:ml-0 sm:flex-col justify-start items-center w-[90%] mt-10 gap-20 ">

    <p className="w-[10%] pl-3 text-lg font-semibold tracking-[0.50px]">
    Brand
    </p>
    <SelectBox
    shape="round"
    indicator={<Img src="../images/img_polygon.svg" className="hover:border-blue-500"  alt="Polygon"/>}
    name="selectabrand"
    placeholder="Select a Brand"
    options={brands}
    className="w-[59%] font-inter text-lg font-light  border-black-900 border-[0.5px] border-solid ml-[10px]  hover:border-blue-500"
    required
    />
    </div>
    {/* <div className="flex flex-row md:ml-0 sm:flex-col justify-start items-center w-[90%] mt-10 gap-20 ">

    <p className="pl-3 w-[10%] text-lg font-semibold tracking-[0.50px]">
    Competitors
    </p>
    <SelectBox 
    isMulti={true}

    shape="round"
    indicator={<Img src="../images/img_polygon.svg"alt="Polygon"/>}
    name="select"
    placeholder="Select Competitors"
    options={Competitors}
    className="w-[59%] font-inter text-lg font-light  border-black-900 border-[0.5px] border-solid ml-[10px] hover:border-blue-500"
    required
    />
    </div> */}
    {/* <div className="flex flex-col items-start justify-start w-[84%] md:w-full mt-[51px] ml-[163px] md:ml-5"> */}
    <div className="flex flex-row md:ml-0 sm:flex-col justify-start items-center w-[90%] mt-10 gap-20 ">

    <p className="w-[10%] pl-3 text-lg font-semibold tracking-[0.50px]">
Platforms
</p>
<SelectBox 
isMulti={true}
shape="round"
indicator={<Img src="../images/img_polygon.svg"alt="Polygon"/>}
name="selectabrand"
placeholder="Select Platforms"
options={platforms}
className="w-[59%] font-inter text-lg font-light  border-black-900 border-[0.5px] border-solid ml-[10px] hover:border-blue-500"
required
/>
</div>
{/* <div className="flex flex-row sm:flex-col justify-between items-center w-[49%] md:w-full mt-[100px] ml-[212px] md:ml-5 sm:gap-10">
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
</div> */}
{/* <div className="flex flex-row sm:flex-col justify-between items-center w-[49%] md:w-full mt-[100px] ml-[212px] md:ml-5 sm:gap-10">
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
</div> */}
<Button
shape="round"
className="mt-20 m-auto sm:px-5 tracking-[2.40px] font-extrabold w-[25%]"
>
Analyze
</Button>
</div>
</div>
</div>
</div>

);
}