"use client"
import React from "react";
import { Img, Text, Button, Input, Heading, SelectBox,Sidebar1,Header } from "../components";

export default function SettingsPage() {
    return (
        <>
            <div className="flex flex-row min-h-screen justify-end items-start w-full gap-9 bg-white-A700">
                {/* Sidebar */}
                <Sidebar1 className="w-[20%] h-screen bg-gray-100_03 sticky overflow-auto" />
                
                {/* Main Content */}
                <div className="flex flex-col justify-center items-center w-[80%] gap-5 mt-[15px] mr-[2%]  ">
                    <div className="flex flex-col justify-center items-center w-full pb-[58px] border-indigo-400_01 border border-solid bg-white-A700 rounded-[23px]">
                        {/* Content Div */}
                        <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                            <Heading size="2xl" as="h1" className="!text-[37.43px]">
                                Yara Hassan
                            </Heading>
                            <div className="flex flex-row justify-between items-center w-full gap-10">
                                <div className="flex items-center gap-2.5 border border-solid">
                                    <Img src="../../images/img_location.svg" alt="location" className="h-[31px] w-[31px]" />
                                    <Heading size="xl" as="h2" className="!text-[23.39px]">
                                        Cairo, Egypt
                                    </Heading>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Button color="indigo_100" size="lg" shape="circle" className="w-[50px]">
                                        <Img src="../../images/img_call.svg" />
                                    </Button>
                                    <Heading size="lg" as="h3" className="!text-[22.66px]">
                                        +20103456789
                                    </Heading>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-5 mt-7">
                                <div className="flex flex-col items-center gap-2.5">
                                    <Img src="../../images/img_email.svg" alt="email" className="h-[33px] w-[33px]" />
                                    <Heading size="2xl" as="h4" className="!text-[25.24px]">
                                        yara@mail.com
                                    </Heading>
                                </div>
                                <div className="flex flex-col items-center gap-2.5">
                                    <Img src="../../images/img_list_perspective_matte_s.png" alt="image" className="w-[68px] h-auto object-cover" />
                                    <Heading size="lg" as="p" className="!text-[19.43px]">
                                        Add Alternative Names
                                    </Heading>
                                </div>
                                <div className="flex flex-col items-center gap-2.5">
                                    <Img src="../../images/img_chart_perspective_matte_s.png" alt="chart" className="w-[73px] h-auto object-cover" />
                                    <Heading size="lg" as="p" className="!text-[19.43px]">
                                        Add Brand
                                    </Heading>
                                </div>
                                <div className="flex flex-col items-center gap-2.5">
                                    <Img src="../../images/img_padlock_perspective_matte_s.png" alt="padlock" className="w-[17%] h-auto object-cover" />
                                    <Heading size="lg" as="p" className="!text-[19.43px]">
                                        Change Password
                                    </Heading>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
