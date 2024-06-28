"use client"
import React, { useState } from "react";
import { Button, Heading, Img, Input } from "../components";

function BrandForm() {
    return (
        <div className="brandForms font-medium w-full ml-[20px]">
            <h2 className="ml-[3px] md tracking-[1.92px] font-bold">Brand Offical Name</h2>
            <Input
                name="name"
                placeholder="McDonald's"
                className="w-full mt-[5px] ml-[3px] tracking-[1.92px] font-medium"
            />
            <h2 className="mt-[31px] ml-1.5 md tracking-[1.92px] font-bold">Names to track in Arabic</h2>
            <Input
                name="alt_name"
                placeholder="ماك,ماكدونالدز"
                className="w-full mt-5 ml-[3px] tracking-[1.92px] font-medium"
            />
            <h2 className="mt-[46px] ml-1.5 md tracking-[1.92px] font-bold">Names to track in English</h2>
            <Input
                name="alt_name"
                placeholder="Mac , Macca's, Maccas"
                className="w-full mt-[17px] tracking-[1.92px] font-medium"
            />
        </div>
    );
}

export default function AddBrand() {
    const [formCount, setFormCount] = useState(1);

    const handleAddBrand = () => {
        setFormCount((prevCount) => prevCount + 1);
    };

    const handleRemoveBrand = () => {
        if (formCount > 1) setFormCount((prevCount) => prevCount - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const brandForms = document.getElementsByClassName("brandForms");

        const brands = [];
        for (let i = 0; i < brandForms.length; i++) {
            const brandForm = brandForms[i] as HTMLElement;
            const inputs = brandForm.getElementsByTagName("input");
            const altNames:any[] = [];

            const name = inputs[0].value.toLowerCase();
            
            for(let j=1;j<=2;j++){
                let alt = inputs[j].value.trim();
                let splitAltNames = alt.split(',');
                
                splitAltNames.forEach(name => {
                    altNames.push({ altname: name.trim().toLowerCase() });
                });
            }
    
            

            brands.push({ name, alt_names: altNames });
        }
        const token = localStorage.getItem('token');
        console.log(token);
        try {
            const response = await fetch("http://localhost:8000/brand/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(brands[0]),
            });

            if (response.ok) {
                console.log("Brands added successfully!");
            } else {
                console.error("Failed to add brands.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div className="flex flex-row min-h-screen justify-end w-full pl-[55px] pr-[55px] border-black-900 border border-solid bg-indigo-200">
            <form
                className="flex flex-col items-center justify-start w-full p-[19px] mx-auto border-black-900 border border-solid bg-gray-100_04 max-w-[999px]"
                onSubmit={handleSubmit}
            >
                <h1 className="!text-black-900 w-full text-3xl font-extrabold tracking-[1.84px] text-center">
                    Add Brands
                </h1>
                <div className="flex flex-row justify-center w-full mt-[70px]">
                    <div className="flex flex-row justify-start items-start w-full gap-[10px]">
                        <div className="flex flex-col items-start justify-start w-full">
                            {[...Array(formCount)].map((_, i) => (
                                <div key={i} className="w-[80%]">
                                    <BrandForm />
                                    {i !== formCount - 1 && <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />}
                                </div>
                            ))}
                        </div>
                        <div className="h-[168px] w-[10%] mt-8 px-3 relative flex flex-col justify-between">
                            <Button
                                size="md"
                                shape="square"
                                className="w-[40px] rounded-lg left-0 bottom-0 right-0 top-0 m-auto mb-5 absolute"
                                onClick={handleRemoveBrand}
                            >
                                <Heading
                                    size="lg"
                                    as="h5"
                                    className="justify-center font-extrabold text-4xl w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 tracking-[3.60px] text-center absolute"
                                >
                                    -
                                </Heading>
                            </Button>
                            <Button
                                size="md"
                                shape="square"
                                className="w-[40px] rounded-lg left-0 bottom-0 right-0 top-0 m-auto mt-5"
                                onClick={handleAddBrand}
                            >
                                <Heading
                                    size="lg"
                                    as="h5"
                                    className="justify-center font-extrabold text-3xl w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 tracking-[3.60px] text-center"
                                >
                                    +
                                </Heading>
                            </Button>
                        </div>
                    </div>
                </div>
                <Button type="submit" className="mt-[106px] mb-[5px] tracking-[2.40px] font-bold min-w-[270px]">
                    Add
                </Button>
            </form>
        </div>
    );
}
