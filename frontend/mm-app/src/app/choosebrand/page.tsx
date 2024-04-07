"use client"
import React, { useEffect, useState } from "react";
import { Img, Text, Heading } from "../components";



interface BrandProps {
  brandName: string;
  images: { src: string; alt: string }[];
  date: string;
}

function Brand({ brandName, images, date }: BrandProps) {
  return (
    <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
      <div className="flex flex-row justify-start items-start w-[45%] md:w-full gap-[17px]">
        {images.map((image, index) => (
          <Img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-[18%] md:h-auto sm:w-full object-cover"
          />
        ))}
        <div className="flex flex-row justify-start w-[78%] mt-[5px]">
          <Heading size="2xl" as="h2" className="!text-black-900 !text-[35.63px]">
            {brandName}
          </Heading>
        </div>
      </div>
      <Text size="7xl" as="p" className="!text-gray-500 !text-[30.93px] !font-normal">
        {date}
      </Text>
      <div className="h-[50px] w-[6%] md:w-full relative">
        <div className="justify-center h-[50px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-yellow-100 absolute rounded-[50%]">
          <img
            className="h-[29px] w-[30px] sm:w-full top-[19%] right-0 left-0 m-auto object-cover absolute"
            src="images/img_componentit.pag"
            alt="imagesevenone"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default function ChooseerandPage() {
  const images = [
    { src: "images/img_target_dynamic_color.png", alt: "targetdynamic" },
    // Add more image objects here if needed
  ];
  const [brandCount, setBrandCount] = useState(0);
  //const brands=[ query to backend to retrieve brands] brandcount=brands.length

  // Function to increment the brand count
  // const incrementBrandCount = () => {
  //   setBrandCount((prevCount) => prevCount + 1);
  // };


  return (
    <div className="outer-container flex flex-row justify-end w-full min-h-screen pl-[55px] pr-[249px] md:px-5 border-black-900 border border-solid bg-indigo-200">
      <div className="flex flex-col items-start justify-start w-full h-full gap-[1O1px] p-[35px] mx-auto md:px-5 sm:p-5 border-black-900 border border-solid bg-gray-100_04 max-w-[999px]">
        <Heading
          size="2xl"
          as="h1"
          className="mt-[37px] ml-[339px] md:m1-5 !text-black-900 tracking-[3.84px] text-center"
        >
          Brands
        </Heading>
        <div className="inner-container flex flex-col items-center justify-start w-[95%] md:w-full mb-[5px] ml-[47px] gap-[562px] md:m1-5">
          <Brand brandName="McDonald's" images={images} date="2 March 2021, 13:45 PM"  />
          <div className="flex flex-row justify-between items-start w-[98%] md:w-full">
            <Text size="md" as="p" className="flex mt-2.5 !text-indigo-900 !text-[13.16px]">
              <span className="text-gray-500">Showing </span>
              <span className="text-indigo-800">{brandCount % 6}</span>
              <span className="text-indigo-900"></span>
              <span className="text-gray-500">from</span>
              <span className="text-indigo-900">{brandCount} </span>
              <span className="text-gray-500">data</span>
            </Text>
            <div className="flex flex-row justify-between items-center x[16%] md:h-auto border-white-A700 border border-solid">
              <Img src="images/img_dropdown.svg" alt="dropdommoneone" className=" h-[30px] w-[30px]" />
              <div className="flex flex-col items-center justify-start h-[47px] w-[47px]">
                <Text
                  size="2xl"
                  as="p"
                  className="flex justify-center items-center h-[47px] w-[47px] !text-white-A700 !text-[16.92px] !font-normal bg-indigo-500 text-shadow-ts1 text-center rounded-[23px]"
                >
                  1
                </Text>
              </div>
              <Img src="ges/ImiLdropdown_gray_500.svg" alt="dropdoanThree" className="h-[30px] w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
