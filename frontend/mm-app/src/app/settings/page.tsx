"use client"
import React from "react";
import { Img, Text, Button, Input, Heading, SelectBox,Sidebar1,Header,BrandComp } from "../components";

const brandData = {
        imageSrc: "images/img_target_dynamic_color.png",
        brandName: "McDonalds",
        date: "2 March 2021, 13:45 PM"
    };

export default function SettingsPage() {
    return (
        <>
            <div className="flex flex-row min-h-screen justify-end items-start w-full gap-9 bg-white-A700">
                {/* Sidebar */}
                <Sidebar1 className="w-[20%] h-screen bg-gray-100_03 sticky overflow-auto" />
                
                {/* Main Content */}
                <div className="flex flex-col justify-center items-center w-[80%] gap-5 h-full mt-[15px] mr-[2%]  ">
                        {/* Content Div */}
                        <div className="flex flex-col items-start justify-start w-full border-indigo-400_01 border border-solid rounded-[10px] gap-[17px] p-3 ">
                        <img src="../../images/img_avatar_image.png" alt="Avatar" className="w-[100px] h-[100px] border-2 border-[#5A67BA] rounded-full object-cover" />
                        <h2 className="text-xl font-extrabold text-blue-950">Yara Hassan</h2>
                        <div className="flex row gap-3 ml-2">
                                    <Img src="../../images/img_email.svg" alt="email" className="h-[33px] w-[33px]" />
                                    <h2  className="text-lg font-bold text-blue-950">
                                        yara@mail.com
                                    </h2>
                                </div>

                        </div>
                        {/* <div className="flex flex-col items-start justify-start h-[60%] w-full border-2 rounded-5 gap-[17px]">
                            <div
className="relative flex flex-row justify-between items-center w-full gap-10 bg-[url('/mm-app/public/images/bg-settings.png')]"
//style={{ backgroundImage: `url(mm-app/public/images/bg-settings.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute bottom-[-40px] left-[25px] w-[100px] h-[100px] bg-[#C1BBEB] rounded-full overflow-hidden border-2 border-[#5A67BA]">
                <img src="../../images/img_avatar_image.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            
        </div>

                            <div className="flex flex-row justify-between w-full  gap-10 mt-7 p-7">
                            <div className="flex  gap-2.5">
                                    <Button color="indigo_100" size="lg" shape="circle" className="w-[50px]">
                                        <Img src="../../images/img_call.svg" />
                                    </Button>
                                    <Heading size="xl" as="h2" className="!text-[22.66px]">
                                        +20103456789
                                    </Heading>
                                </div>

                                <div className="flex  gap-2.5">
                                    <Img src="../../images/img_email.svg" alt="email" className="h-[33px] w-[33px]" />
                                    <Heading size="xl" as="h2" className="!text-[25.24px]">
                                        yara@mail.com
                                    </Heading>
                                </div>
                                <div className="flex  border border-solid">
                                    <Img src="../../images/img_location.svg" alt="location" className="h-[31px] w-[31px]" />
                                    <Heading size="xl" as="h2" className="!text-[23.39px]">
                                        Cairo, Egypt
                                    </Heading>
                                </div>

                            </div>
                        </div> */}
                    <div className="flex flex-row  justify-start items-start w-full ">
                    <div className="flex flex-col border-indigo-400_01 border border-solid rounded-[10px] p-5 h-[60%] ml-auto mr-auto w-[60%]">
                                    <h2  className=" text-xl font-bold mb-4">
                                        Brands
                                    </h2>
                                    <div className="flex flex-col items-start justify-start w-full  md:ml-0 ">
    {/* To be transformed into component */}
    <BrandComp brandData={brandData} />
    <BrandComp brandData={brandData} />

        {/* <div className="flex flex-row md:flex-col justify-between items-center w-[98%] md:w-full md:gap-10">
            <div className="flex flex-row sm:flex-col justify-center items-end w-[82%] md:w-full sm:gap-5">
                <Img
                    src="images/img_target_dynamic_color.png"
                    alt="targetdynamic"
                    className="w-[8%] md:h-auto sm:w-full mb-[7px] object-cover"
                />
                <div className="flex flex-row justify-start w-[35%] sm:w-full mt-[5px] ml-3.5 sm:ml-0 sm:mt-0">
                    <Heading size="md" as="h5" className="text-[28.58px] font-semibold">
                        McDonalds
                    </Heading>
                </div>
                <Text size="lg" as="p" className="ml-[47px] md:ml-5 !text-gray-500 text-[24.82px] font-normal">
                    2 March 2021, 13:45 PM
                </Text>
            </div>
            <Button color="yellow_100" size="md" className="w-[39px] px-[7px] rounded-[50%]">
                <Img src="images/img_component_4.png" />
            </Button>
        </div> */}
    </div>
    <div className="flex flex-row justify-between items-start w-full m-[2%] mt-[5%] p-[2%] ">
        <Text size="xs" as="p" className="flex mt-[7px] !text-indigo-900 text-[11.08px] font-normal">
            <span className="text-gray-500">Showing</span>
            <span className="text-indigo-900">1</span>
            <span className="text-indigo-900">of</span>
            <span className="text-indigo-900">2</span>
            <span className="text-gray-500">data</span>
        </Text>
        <div className="flex flex-row justify-between items-center w-[16%] border-white-A700 border border-solid">
            <Img src="../../images/img_dropdownone.svg" alt="dropdownone" className="h-[25px] w-[25px]" />
            <div className="flex flex-col items-center justify-start h-[39px] w-[39px]">
                <Text
                    size="lg"
                    as="p"
                    className="flex justify-center items-center h-[39px] w-[39px] rounded-full text-white-A700 text-[14.24px] font-normal bg-indigo-500 text-shadow-ts text-center rounded"
                >
                    1
                </Text>
            </div>
            <Img src="../../images/img_dropdown_gray_500.svg" alt="dropdownthree" className="h-[25px] w-[25px]" />
        </div>
    </div>

                    </div>
                    <div className="flex flex-col justify-end items-end w-[40%] bg-white-A700 rounded-[23px] ">

                    <div className="flex flex-col border-indigo-400_01 border border-solid rounded-[10px] w-[90%] p-[5px] h-[10%] mb-[5px] items-center gap-2.5">
                                    <Img src="../../images/img_padlock_perspective_matte_s.png" alt="padlock" className="w-[17%] h-auto object-cover" />
                                    <Heading size="lg" as="p" className="!text-[19.43px]">
                                        Change Password
                                    </Heading>
                    </div>
                    <div className="flex flex-col border-indigo-400_01 border border-solid rounded-[10px] w-[90%] p-[5px] h-[10%] mb-[5px] items-center gap-2.5">
                                    <Img src="../../images/img_list_perspective_matte_s.png" alt="image" className="w-[68px] h-auto object-cover" />
                                    <Heading size="lg" as="p" className="!text-[19.43px]">
                                        Add Alternative Names
                                    </Heading>
                                </div>
                                <div className="flex flex-col border-indigo-400_01 border border-solid rounded-[10px] w-[90%] p-[5px] h-[10%] mb-[5px] items-center gap-2.5">
                                    <Img src="../../images/img_chart_perspective_matte_s.png" alt="chart" className="w-[73px] h-auto object-cover" />
                                    <Heading size="lg" as="p" className="!text-[19.43px]">
                                        Add Brand
                                    </Heading>
                                </div>


</div>
</div>
                </div>
            </div>
        </>
    );
}
