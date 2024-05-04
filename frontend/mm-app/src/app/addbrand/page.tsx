"use client"
import React, { useState } from "react";
import { Button, Heading, Img, Input } from "../components";

 function Brandform(){
    return (
        <>
        <div className="brandForms w-[90%] ml-[20px]">
        <Heading size="md" as="h2" className="ml-[3px] tracking-[2.00px]">
        Brand Name </Heading>
        <Input
        name= "name"
        placeholder="McDonald's"
        className="w-full mt-[5px] ml-[3px] tracking-[1.92px] font-medium"
        />
        <Heading as="h3" className="mt-[31px] ml-1.5 tracking-[1.60px]">
        Names to track in Arabic </Heading>
        <Input
            name= "name"
            placeholder="ماك,ماكدونالدز"
            className="w-full mt-5 m1-[3px] tracking-[1.92px] font-medium"
        />

        <Heading as="h4" className="mt-[46px] ml-1.5 tracking-[1.60px]"> Names to track in English </Heading>

        <Input
        name="name"
        placeholder="Mac , Macca's, Maccas"
        className="w-full mt-[17px] tracking-[1.92px] font-medium"/>
        </div></>
    );
}
export default function addbrand(){
    const [formCount, setFormCount] = useState(1);

    const handleAddBrand = () => {
        setFormCount(prevCount => prevCount + 1);
    };

    const handleRemoveBrand = () => {
        if(formCount > 1)
            setFormCount(prevCount => prevCount - 1);
    };
  
return (
    <>
        <div className="flex flex-row h-screen  justify-end w-full pl-[55px] pr-[55px] border-black-900 border border-solid bg-indigo-200">
        <div className="flex flex-col itens-center justify-start w-full p-[19px] mx-auto border-black-900 border border-solid bg-gray-100_04 max-w-[999px]">
        <Heading size="xl" as="h1" className="!text-black-900 font-bold tracking-[3.84px] text-center">
        Add Brands </Heading>
        <div className="flex flex-row justify-center w- [72%] mt-[70px]">
        <div className="flex flex-row justify-start items-start w-full gap- [15px]">
        <div className="flex flex-col ites-start justify-start w-[89%]">

        {[...Array(formCount)].map((_, i) => (
                                <div key={i}>
                                    <Brandform />
                                    {i !== formCount - 1 && <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />}
                                </div>
        ))}

        {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/> */}

        </div>
        <div className="h-[168px] w-[10%] mt-8 px-3 relative flex flex-col justify-between">
        <Button size="md" shape="square" className="w-[40px] rounded-lg left-0 bottom-0 right-0 top-0 m-auto mb-5 absolute">
        {/* <Img src="../../images/defaultNoData-png" /> */}
        <Heading size="lg" as="h5" className="justify-center font-extrabold text-4xl w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 tracking-[3.60px] text-center absolute" onClick={handleRemoveBrand}>
            -</Heading>

        </Button> 
        
        <Button size="md" shape="square" className="w-[40px] rounded-lg left-0 bottom-0 right-0 top-0 m-auto mt-5 ">
        {/* <Img src="../../images/defaultNoData-png" /> */}
        <Heading size="lg" as="h5" className="justify-center font-extrabold text-3xl w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 tracking-[3.60px] text-center " onClick={handleAddBrand}>
            +</Heading>

        </Button> 

        </div>
        </div>
        
        </div>
        <Button className="mt-[106px] mb-[5px] tracking-[2.40px] font-extrabold min-w-[294px]">Start</Button>
        </div>
        </div>
</>
);
}