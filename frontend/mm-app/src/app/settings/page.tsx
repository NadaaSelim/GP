"use client"
import React, { useEffect, useState } from "react";
import { Img, Text, Button, Input, Heading, SelectBox,Sidebar1,Header,BrandComp } from "../components";
import Link from "next/link";
import { useRouter } from "next/router";
import Login from "../login/page";

interface Brand {
    name: string;
    alt_names: string[];
}
    

export default function SettingsPage() {
    const [selectedIndex, setSelectedIndex] = useState<number>(3);
    const [brandData, setBrandData] = useState<Brand[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBrandData = async () => {
            console.log(localStorage.getItem('token'));
            try {
                const response = await fetch('http://localhost:8000/user/userbrands', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setBrandData(data.brands);
                console.log(brandData)      
                console.log(data.brands)   
            } catch (error) {
                console.log('Error fetching brand data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBrandData();
    }, []);
    const handleDeleteBrand = (brandName: string) => {
        setBrandData(brandData.filter(brand => brand.name !== brandName));
    };

    useEffect(() => {
        console.log("Updated brandData:", brandData); 
    }, [brandData]);


    if (loading) {
        return <p>Loading brand data...</p>;
    }

    const handleClick = (brandName:string) => {
        window.location.href = (`/choosebrand?brandname=${(brandName)}`);
    };
    
    return (
        <> <title>Settings</title>
            <div className="flex flex-row min-h-screen justify-end items-start w-full gap-9 bg-white-A700">
                <Sidebar1  selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} className="w-[20%] h-screen bg-gray-100_03 sticky overflow-auto" />
                
                <div className="flex flex-col justify-center items-center w-[80%] gap-5 h-full mt-[15px] mr-[2%]  ">
                        <div className="flex flex-col items-start justify-start w-full border-indigo-400_01   border border-solid rounded-[10px] gap-[17px] p-3 ">
                        <img src="../../images/img_avatar_image.png" alt="Avatar" className="w-[100px] h-[100px] border-2 border-[#5A67BA] rounded-full object-cover" />
                        <h2 className="text-xl font-extrabold text-blue-950">Yara Hassan</h2>
                        <div className="flex row gap-3 ml-2">
                                    <Img src="../../images/img_email.svg" alt="email" className="h-[33px] w-[33px]" />
                                    <h2  className="text-lg font-bold text-blue-950">
                                        yara@mail.com
                                    </h2>
                                </div>

                        </div>

                    <div className="flex flex-row  justify-start items-start w-full ">
                    <div className="flex flex-col border-indigo-400_01 border border-solid rounded-[10px] p-5 h-[60%] ml-auto mr-auto w-[60%]">
                                    <h2  className=" text-xl font-bold mb-4">
                                        Brands
                                    </h2>
                                    <div className="flex flex-col items-start justify-start w-full  md:ml-0 ">
                                    {brandData.length > 0 ? (
                                    brandData.map((brand) => (
                                    <BrandComp brandName={brand.name} onDelete={handleDeleteBrand} onClick={handleClick}  />
                                ))
                            ) : (
                                <p>No brand data available</p>
                            )}
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

                    <Link href="../changepass1" className="flex flex-col border-indigo-400_01 border border-solid rounded-[10px] w-[90%] p-[5px] h-[10%] mb-[5px] items-center gap-2.5">
                                    <Img src="../../images/img_padlock_perspective_matte_s.png" alt="padlock" className="w-[17%] h-auto object-cover" />
                                    <p  className="font-semibold text-lg !text-[19.43px] ">
                                        Change Password
                                    </p>
                    </Link>
 
                                <Link href="../addbrand" className="flex flex-col border-indigo-400_01 border border-solid rounded-[10px] w-[90%] p-[5px] h-[10%] mb-[5px] items-center gap-2.5">
                                    <Img src="../../images/img_chart_perspective_matte_s.png" alt="chart" className="w-[73px] h-auto object-cover" />
                                    <p  className="font-semibold text-lg !text-[19.43px] ">
                                        Add Brand
                                    </p>
                                </Link>


</div>
</div>
                </div>
            </div>
        </>
    );
}
