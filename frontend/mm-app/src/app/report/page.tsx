"use client"
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../assets/images";
import { Text, Img, Button, Heading,Header, SelectBox, Input, SentimentComp, DountChart } from "../components";
import ReportPageColumnThree from "../components/ReportPageColumnThree";
import {isAuth} from "../auth"

import Sidebar1 from "../components/Sidebar1";
import WordCount from "../components/WordCount";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ReportPage() {
  if(!isAuth()){
    window.location.href = "../login"; return;
  }

  const [searchBarValue4, setSearchBarValue4] = React.useState("");
  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  function printDiv(): void {
    try{
      const printContents = document.getElementById("charts")?.innerHTML;
      if (!printContents) return;
  
      const printWindow = window.open('', '', 'height=600,width=800');
      if (!printWindow) return;
  
      printWindow.document.write('<html><head><title>Print Charts</title>');
      printWindow.document.write('</head><body >');
      printWindow.document.write(printContents);
      printWindow.document.write('</body></html>');
      
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
  
    }catch(error){console.error(error)}
  }

  return (
    <>
      <Helmet>
        <title>Report</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="min-h-screen w-full bg-white-A700 relative">
        <div className="flex flex-row md:flex-col justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto md:gap-5 absolute">
          <Sidebar1 selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} className="w-[20%] h-screen  sticky " />
          
          <div className="flex flex-col justify-center items-center w-full mt-3 ml-[17%] pb-2 ">

          <Header className="flex flex-row justify-between items-center w-[77%] sm:w-full right-[5%] top-[2%] m-auto absolute z-10"/>
                  
          <div className="h-px mt-14 w-full  md:ml-0 ml-[-40px] bg-blue_gray-100_02"></div>

          <div className="flex flex-col justify-start items-start w-full h-full bg-white-A700">
          <div className="flex flex-row justify-start items-start w-full h-full bg-white-A700">

          <div className="flex flex-col justify-start items-start w-full h-full bg-white-A700 gap-3">

          <h1
          
              className="mt-3 md:ml-0 !text-blue_gray-900_01 tracking-[0.50px] text-[40px] font-medium"
            >
              Report Generation
            </h1>
            <div className="flex flex-row items-start justify-start gap-10 text-lg">
            <p className="mt-5 md:ml-0 !text-black-900 tracking-[0.50px]  font-medium">
            
            Dates: 1/1/2023 - 31/12/2023
          </p>
          <p className="mt-5 md:ml-5 !text-black-900 tracking-[0.50px]  font-medium">
            
          Platforms: Facebook, Twitter
          </p>
          </div>
          <div className="flex flex-row justify-start items-start mt-5 text-lg w-[80%] ">
                <p className="!text-black-900 mt-1  mr-[25px] ">Save as</p>
                <SelectBox
                color="white_A700_02"
                size="sm"
                indicator={<Img src="images/img_polygon.svg" alt="Polygon" />}
                name="pdf"
                placeholder="PDF"
                options={dropDownOptions}
                className="w-[15%] ml-5 border-2 border-solid border-black-999  rounded-[10px]"
              />
                        <Button color="black_900_02" size="md" onClick={printDiv}
                         className="w-[50px] ml-10 rounded-[13px] outline outline-offset-10 outline-black ">
              <Img src="../images/img_print_button.svg" />
            </Button>
                      
          </div>
            <div id="charts" className="flex flex-row mt-[20px] w-full gap-5">
            <SentimentComp/>
            <DountChart/>
            </div>
            <div className="flex flex-row mt-[20px] w-full gap-5 relative">

              <SampleReviews/>​
              <WordCount data={[ { category: "word1", twitter: 50, talabat: 20,elmenus:20 },
    { category: "word2", twitter: 10, talabat: 40,elmenus:35 },]}/>
                  
 </div>

          </div>
          
          </div>          
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

function SampleReviews(){
  return (
    <>
        <div className="w-[30%] bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">Sample Reviews</h5>
        <h6 className="text-base mt-2 mb-4 font-normal text-gray-500 dark:text-gray-400 pb-1">What is the public saying about your brand</h6>
        <div className="flex flex-col gap-2">

        <Review platform={"Twitter"} isPositive={false} reviewText={"bjjd"}></Review>
        <hr></hr>
        <Review platform={"Talabat"} isPositive={true} reviewText={"bjjd"}></Review>
        </div>
        </div>
    </>
  );
}


interface ReviewProps {
  platform: string;
  isPositive: boolean;
  reviewText: string;
}

const Review: React.FC<ReviewProps> = ({ platform, isPositive, reviewText }) => {
  return (
    <div className="flex items-start max-w-md  mx-4 ">
      <div className="justify-start ">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
          
          {platform=="Twitter" && (  
            <svg className="h-9 w-9 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M18.77 5.53a6.28 6.28 0 01-1.8.49 3.18 3.18 0 001.39-1.76 6.5 6.5 0 01-2.02.77A3.16 3.16 0 0012.65 4c-1.74 0-3.16 1.41-3.16 3.16 0 .25.03.5.08.74A8.98 8.98 0 013.29 5.3a3.15 3.15 0 00-.42 1.59c0 1.09.56 2.05 1.41 2.61a3.15 3.15 0 01-1.43-.39v.04c0 1.52 1.08 2.78 2.51 3.06-.27.07-.56.11-.85.11-.21 0-.42-.02-.62-.06.42 1.31 1.63 2.27 3.07 2.3a6.3 6.3 0 01-4.68 1.31c-.3 0-.6-.02-.89-.07a8.91 8.91 0 004.81 1.41c5.79 0 8.96-4.8 8.96-8.95 0-.14 0-.28-.01-.41a6.4 6.4 0 001.57-1.62c-.58.26-1.2.43-1.83.5z" />
            </svg>
          )}

          {platform=="Talabat" && (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
            <g fill="#fcc419" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" 
            font-family="none" font-weight="none" font-size="none" text-anchor="none" 
            >
              <g transform="scale(5.12,5.12)"><path d="M14,3.99023c-5.511,0 -10,4.489 -10,10v22c0,5.511 4.489,10 10,10h22c5.511,0 10,-4.489 10,-10v-22c0,-5.511 -4.489,-10 -10,-10zM14,5.99023h22c4.431,0 8,3.569 8,8v22c0,4.431 -3.569,8 -8,8h-22c-4.431,0 -8,-3.569 -8,-8v-22c0,-4.43 3.569,-8 8,-8zM25,12c-3.875,0 -4,4 -4,4v4h-5v1c0,1.657 1.343,3 3,3h2v8c0,4 3,6 6.75,6c2.75,0 3.25,-2 3.25,-2v-3c-4,1 -4,-3 -4,-3v-6h5v-1c0,-1.657 -1.343,-3 -3,-3h-2v-8z"></path></g></g>
            </svg>
          )}

          {platform=="Elmenus" && (
           <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e71313"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 3.99995C12.8839 2.91716 14.9355 2.15669 17.07 1.74995C17.551 1.63467 18.0523 1.63283 18.5341 1.74458C19.016 1.85632 19.4652 2.07852 19.8464 2.39375C20.2276 2.70897 20.5303 3.10856 20.7305 3.56086C20.9307 4.01316 21.0229 4.50585 21 4.99995V13.9999C20.9699 15.117 20.5666 16.1917 19.8542 17.0527C19.1419 17.9136 18.1617 18.5112 17.07 18.7499C14.9355 19.1567 12.8839 19.9172 11 20.9999" stroke="#e71313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.9995 3.99995C9.1156 2.91716 7.06409 2.15669 4.92957 1.74995C4.44856 1.63467 3.94731 1.63283 3.46546 1.74458C2.98362 1.85632 2.53439 2.07852 2.15321 2.39375C1.77203 2.70897 1.46933 3.10856 1.26911 3.56086C1.0689 4.01316 0.976598 4.50585 0.999521 4.99995V13.9999C1.0296 15.117 1.433 16.1917 2.14533 17.0527C2.85767 17.9136 3.83793 18.5112 4.92957 18.7499C7.06409 19.1567 9.1156 19.9172 10.9995 20.9999" stroke="#e71313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 21V4" stroke="#e71313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          )}
        </div>
      </div>
        <p className=" p-2 ml-3 text-gray-600">{reviewText}</p>
      <div className=" justify-end ml-auto p-2  ">
        {isPositive ? (
          <p className="text-green-500">Positive ↑</p>
        ) : (
          <p className="text-red-500">Negative ↓</p>
        )}
      </div>
    </div>
  );
};