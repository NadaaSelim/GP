"use client"
import React, { useEffect, useState } from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Input } from "./..";
import Link from "next/link";

interface Props {
  className?: string;
}
interface Brand{
  name:string,logo:string;
}
const brands = [
  { name: "Mcdonalds", logo: "images/img_group_147.png" },
  { name: "Hardees", logo: "images/img_group_147.png" }
];

export default function Header({ ...props }: Props) {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");
  // const user = {
  //   "id":"1234", "username":"USERNAME","email":"email@com"
  // }
  
  function handleLogout(): void {
    localStorage.removeItem('token');

  }

  return (
<div className="flex flex-row justify-between items-center w-[77%] sm:w-full right-[5%] top-[2%] m-auto absolute z-10">
      <Input
        
        color="gray_100_01"
        size="xs"
        variant="fill"
        name="search"
        placeholder="Search"
       value={searchBarValue3}
        

        onChange={(e: string) => setSearchBarValue3(e)}
        suffix={
          // searchBarValue3?.length > 0 ? (
          //   <CloseSVG onClick={() => setSearchBarValue3("")} height={12} width={12} />
          // ) :
           (
            <Img src="images/img_icon.svg" alt="Icon" className="cursor-pointer" />
          )
        }
        className="w-[45%] text-blue_gray-900_75 bg-gray-50 tracking-[0.50px] rounded-[5px]"
      />
      <BrandSelectBox/>
            {/* <div className="flex justify-center items-center">
        <Button color="yellow_100" size="sm" shape="circle" className="w-8">
          <Img src="images/img_group_147.png" />
        </Button>
        <p  className="ml-3 font-semibold text-s !text-blue_gray-900_01 tracking-[0.50px]">
          McDonald&#39;s
        </p>
        <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-5 w-5 ml-[34px] opacity-0.5" />

        </div> */}
      
       <Link href="/login" passHref>
        <Button
          size="md"
          shape="round"
          className="bg-indigo-400_01 font-semibold text-slate-50 border-solid border-2 w-20 h-10 border-slate-950"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Link>

      </div>
    
  );
}

const BrandSelectBox = () => {
  const [selectedBrand, setSelectedBrand] = useState(() => {
    // Retrieve the selected brand from localStorage, or default to the first brand
    const savedBrand = localStorage.getItem('selectedBrand');
    return savedBrand ? JSON.parse(savedBrand) : brands[0];
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Save the selected brand to localStorage whenever it changes
    localStorage.setItem('selectedBrand', JSON.stringify(selectedBrand));
  }, [selectedBrand]);

  const handleBrandSelect = (brand:Brand) => {
    setSelectedBrand(brand);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <button className="w-8 h-8 sm bg-yellow-100 rounded-full flex items-center justify-center">
          <img src={selectedBrand.logo} alt={selectedBrand.name} className="w-[60%] h-[60%] object-contain" />
        </button>
        <p className="ml-3 font-semibold text-s text-blue-gray-900 tracking-[0.50px]">
          {selectedBrand.name}
        </p>
        <img
          src="images/img_arrow_down.svg"
          alt="arrowdown_one"
          className={`h-5 w-5 ml-4 opacity-50 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
        />
      </div>
      {dropdownOpen && (
        <div className="absolute mt-2 border-2 border-solid rounded w-full bg-slate-50 shadow-lg z-10">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleBrandSelect(brand)}
            >
              <button className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <img src={brand.logo} alt={brand.name} className="w-[40%] h-[40%] object-contain" />
              </button>
              <p className="ml-3  text-sm text-blue-gray-900 tracking-[0.50px]">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export {Header};