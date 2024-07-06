"use client"
import React, { useState } from "react";
import { Button, Heading, Img, Input } from "../components";
import {isAuth} from "../auth"
import { useRouter } from "next/navigation"; 

const patterns:RegExp[] = [
    /[\u0600-\u06FF,\s]+/, //matches ar chars commas spaces
    /[a-zA-Z,\s]+/         // match eng chars and commas/spaces

]
interface Brand{
    name:string,alt_names:string[]
}
function BrandForm() {

    return (
        <div className="brandForms font-medium w-full ml-[20px]">
            <h2 className="ml-[3px] md tracking-[1.92px] font-bold">Brand Offical Name</h2>
            <Input
                name="name"
                placeholder="McDonald's"
                className="w-full mt-[5px] ml-[3px] tracking-[1.92px] font-medium"
                required
            />
            <h2 className="mt-[31px] ml-1.5 md tracking-[1.92px] font-bold">Alternative Names to track in Arabic</h2>
            <Input
                name="alt_name"
                placeholder="ماك,ماكدونالدز"
                className="w-full mt-5 ml-[3px] tracking-[1.92px] font-medium"
                pattern="[\u0600-\u06FF,\s]*"

            />
            <h2 className="mt-[46px] ml-1.5 md tracking-[1.92px] font-bold">Alternative Names to track in English</h2>
            <input
                name="alt_name"
                placeholder="Mac , Macca's, Maccas"
                className="w-full mt-[17px] tracking-[1.92px] font-medium"
                pattern="[a-zA-Z,\s]*"
                //oninvalid='setCustomValidity("Please enter only English alphabet characters, commas, and spaces")'
            />

        </div>
    );
}

export default function AddBrand() {
    if(!isAuth()){
        window.location.href = "../login"; return;
      }
    
    const [formCount, setFormCount] = useState(1);

    const handleAddBrand = () => {
        setFormCount((prevCount) => prevCount + 1);
    };

    const handleRemoveBrand = () => {
        if (formCount > 1) setFormCount((prevCount) => prevCount - 1);
    };

    // const handleSubmit = async (e: React.FormEvent) => {

    //     e.preventDefault();
    //     const brandForms = document.getElementsByClassName("brandForms");

    //     const token = localStorage.getItem('token');
    //     const userString = localStorage.getItem('user')

    //     for (let i = 0; i < brandForms.length; i++) {
    //         const brandForm = brandForms[i] as HTMLElement;
    //         const inputs = brandForm.getElementsByTagName("input");
    //         const altNames:any[] = [];

    //         const name = inputs[0].value.toLowerCase();
            
    //         for(let j=1;j<=2;j++){
    //             let alt = inputs[j].value.trim();
    //             let splitAltNames = alt.split(',');
                
    //             splitAltNames.forEach(name => {
    //                 name = name.trim().toLowerCase();
    //                 if(patterns[j-1].test(name))
    //                     altNames.push({ altname:  name});
    //             });
    //         }
    
            

    //         let brand = ({ name, alt_names: altNames });
    //         console.log(brand);
    //         try {
    //             const response = await fetch("http://localhost:8000/brand/add", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     'Authorization': `Bearer ${token}`,
    //                 },
    //                 body: JSON.stringify(brand),
    //             });
    
    //             if (response.ok) {
    //                 if(userString != null){
    //                     const user = JSON.parse(userString)
    //                     const brands:string[] =user.brands;
            
    //                 }
    //                 alert("Brands added successfully!");

    //             } else {
    //                 console.error("Failed to add brands."); 
    //             }
    //         } catch (error) {
    //             console.error("An error occurred:", error);
    //         }
    
    //     }
    //     const getUser = await fetch('http://localhost:8000/user/userinfo', {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         },
            
    //       });
      
    //       if (getUser.ok) {
    //         const userresp =  getUser.json();
    //         localStorage.setItem('user', JSON.stringify(userresp));
    //         console.log(userresp);
    //         router.push('/dashboard');

    //       }
    //     console.log(token);
    // };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const brandForms = document.getElementsByClassName("brandForms");
    
        const token = localStorage.getItem('token');
        const userString = localStorage.getItem('user')
    
        for (let i = 0; i < brandForms.length; i++) {
            const brandForm = brandForms[i] as HTMLElement;
            const inputs = brandForm.getElementsByTagName("input");
            const altNames: any[] = [];
    
            const name = inputs[0].value.toLowerCase();
    
            for (let j = 1; j <= 2; j++) {
                let alt = inputs[j].value.trim();
                let splitAltNames = alt.split(',');
    
                splitAltNames.forEach(name => {
                    name = name.trim().toLowerCase();
                    if (patterns[j - 1].test(name))
                        altNames.push({ altname: name });
                });
            }
    
            let brand = { name, alt_names: altNames };
            console.log(brand);
            try {
                const response = await fetch("http://localhost:8000/brand/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify(brand),
                });
    
                if (response.ok) {
                    if (userString != null) {
                        const user = JSON.parse(userString);
                        const brands: Brand[] = user.brands || [];
                        brands.push(brand); 
    
                        // Update user session with new brands
                        const updatedUser = { ...user, brands };
                        localStorage.setItem('user', JSON.stringify(updatedUser));
                    }
                    alert("Brands added successfully!");
    
                } else {
                    alert("Failed to add brands.");
                    return;
                }
            } catch (error) {
                console.error("An error occurred:", error);return;
            }
        }
        router.push("../dashboard")
    };
    
    const router = useRouter();


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
                        <div className="text-center h-[168px] w-[10%] mt-8 px-3 relative flex flex-col justify-between">
                            <Button
                                size="md"
                                shape="square"
                                className="w-[40px] rounded-lg left-0 bottom-0 right-0 top-0 m-auto mb-5 absolute"
                                onClick={handleRemoveBrand}
                            >
                                <h5
                                    className="justify-center items-center font-extrabold text-2xl w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 tracking-[3.60px] text-center"
                                    >
                                    -
                                </h5>
                            </Button>
                            <Button
                                size="md"
                                shape="square"
                                className="w-[40px] rounded-lg left-0 bottom-0 right-0 top-0 m-auto mt-5"
                                onClick={handleAddBrand}
                            >
                                <h5
                                    className="justify-center items-center font-extrabold text-2xl w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 tracking-[3.60px] text-center"
                                >
                                    +
                                </h5>
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
