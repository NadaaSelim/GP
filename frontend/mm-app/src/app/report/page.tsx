"use client"

import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../assets/images";
import { Text, Img, Button, Heading,Header, SelectBox, Input, SentimentComp, DountChart } from "../components";
import ReportPageColumnThree from "../components/ReportPageColumnThree";

import Sidebar1 from "../components/Sidebar1";
import WordCount from "../components/WordCount";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ReportPage() {
  const [searchBarValue4, setSearchBarValue4] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Menna's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="min-h-screen w-full bg-white-A700 relative">
        <div className="flex flex-row md:flex-col justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto md:gap-5 absolute">
          <Sidebar1 className="w-[20%] h-screen  sticky " />
          
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
            
          Platforms: Talabat, Facebook, Twitter
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
                        <Button color="black_900_02" size="md"  className="w-[50px] ml-10 rounded-[13px] outline outline-offset-10 outline-black ">
              <Img src="../images/img_print_button.svg" />
            </Button>
                      
          </div>
            <div className="flex flex-row mt-[20px] w-full gap-5">
            <SentimentComp/>
            <DountChart/>
            </div>
            <div className="flex flex-row mt-[20px] w-full gap-5 relative">

              <SampleReviews/>​
              <WordCount data={[ { category: "word1", twitter: 50, facebook: 20 },
    { category: "word2", twitter: 10, facebook: 40 },]}/>
                  
        <Button
                        color="indigo_400_07"
                        size="xl"
                        shape="round"
                        className="mt-40 tracking-[2.08px] font-extrabold min-w-[239px] relative "
                      >
                        Next Page
                      </Button>              </div>

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

        <Review isFacebook={false} isPositive={false} reviewText={"bjjd"}></Review>
        <hr></hr>
        <Review isFacebook={true} isPositive={true} reviewText={"bjjd"}></Review>
        </div>
        </div>
    </>
  );
}


interface ReviewProps {
  isFacebook?: boolean;
  isPositive: boolean;
  reviewText: string;
}

const Review: React.FC<ReviewProps> = ({ isFacebook, isPositive, reviewText }) => {
  return (
    <div className="flex items-start max-w-md  mx-4 ">
      {/* Left Section: Icon (Facebook or Twitter) inside a circle */}
      <div className="justify-start ">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
          {isFacebook && (
            // <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            //   <path fillRule="evenodd" d="M16 2a2 2 0 012 2v12a2 2 0 01-2 2H10v-6h2v-2h-2V8.33c0-1.66 1.19-3.18 2.86-3.18.8 0 1.53.06 1.74.09v2.1h-1.2c-.94 0-1.13.45-1.13 1.11V10h2l-.4 2H13v6h3a2 2 0 002-2V4a2 2 0 00-2-2h-3V0h3a2 2 0 012 2z" clipRule="evenodd" />
            // </svg>
            // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
            // <path fill="#659ec9" d="M84.9,48.1H70.7v-9.3c0-3.5,2.3-4.3,4-4.3c1.6,0,10.1,0,10.1,0V19.1L70.8,19C55.5,19,52,30.5,52,37.9v10.3h-8.9V64H52c0,20.4,0,45,0,45h18.7c0,0,0-24.8,0-45h12.6L84.9,48.1z"></path><path fill="#fff" d="M70.8,29l13.8,0.1v-10L70.8,19C55.5,19,52,30.5,52,37.9v10C52,40.5,55.5,29,70.8,29z"></path><path fill="#444b54" d="M70.7,112H52c-1.7,0-3-1.3-3-3V67h-5.9c-1.7,0-3-1.3-3-3s1.3-3,3-3H52c1.7,0,3,1.3,3,3v42h12.7V64c0-1.7,1.3-3,3-3h9.9l1-9.9H70.7c-1.7,0-3-1.3-3-3v-9.3c0-5.1,3.5-7.3,7-7.3h7.1V22l-10.9,0C66.1,22,55,23.5,55,37.9v10.3c0,1.7-1.3,3-3,3h-8.9c-1.7,0-3-1.3-3-3s1.3-3,3-3H49v-7.3C49,27.8,54.7,16,70.8,16l13.9,0.1c1.7,0,3,1.3,3,3v15.4c0,1.7-1.3,3-3,3H74.6c-0.6,0-1,0-1,1.3v6.3h11.2c0.8,0,1.7,0.4,2.2,1c0.6,0.6,0.8,1.5,0.8,2.3l-1.6,15.9c-0.2,1.5-1.4,2.7-3,2.7h-9.6v42C73.7,110.7,72.3,112,70.7,112z"></path><path fill="#444b54" d="M84.7 112H42c-1.7 0-3-1.3-3-3s1.3-3 3-3h42.7c1.7 0 3 1.3 3 3S86.3 112 84.7 112zM100.7 112c-.8 0-1.6-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1 0-.2 0-.4.1-.6 0-.2.1-.4.2-.6.1-.2.2-.3.3-.5.1-.2.2-.3.4-.5 1.1-1.1 3.1-1.1 4.2 0 .6.6.9 1.3.9 2.1s-.3 1.6-.9 2.1C102.2 111.7 101.5 112 100.7 112z"></path>
            // </svg>
            <svg className="h-9 w-9 text-blue-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
<path d="M43.5,96c-3.584,0-6.5-2.916-6.5-6.5V62h-4.5c-3.584,0-6.5-2.916-6.5-6.5v-14c0-3.584,2.916-6.5,6.5-6.5H36v-2.143 C36,19.427,47.047,8.5,60.625,8.5c3.595,0,7.673,0.216,11.532,0.608C75.489,9.448,78,12.229,78,15.575V27.5 c0,3.584-2.916,6.5-6.5,6.5h-6.857C64.294,34,64,34.294,64,34.643V35h7.537c1.864,0,3.641,0.802,4.874,2.2 c1.234,1.398,1.808,3.262,1.575,5.11l-1.755,13.998C75.826,59.553,73.054,62,69.782,62H64v27.5c0,3.584-2.916,6.5-6.5,6.5H43.5z" opacity=".35"></path><path fill="#f2f2f2" d="M41.5,94c-3.584,0-6.5-2.916-6.5-6.5V60h-4.5c-3.584,0-6.5-2.916-6.5-6.5v-14 c0-3.584,2.916-6.5,6.5-6.5H34v-2.143C34,17.427,45.047,6.5,58.625,6.5c3.595,0,7.673,0.216,11.532,0.608 C73.489,7.448,76,10.229,76,13.575V25.5c0,3.584-2.916,6.5-6.5,6.5h-6.857C62.294,32,62,32.294,62,32.643V33h7.537 c1.864,0,3.641,0.802,4.874,2.2c1.234,1.398,1.808,3.262,1.575,5.11l-1.755,13.998C73.826,57.553,71.054,60,67.782,60H62v27.5 c0,3.584-2.916,6.5-6.5,6.5H41.5z"></path><path fill="#70bfff" d="M62.643,25.5H69.5V13.575c-3.46-0.352-7.393-0.582-10.875-0.575C48.615,13,40.5,20.995,40.5,30.857 V39.5h-10v14h11v34h14v-34h12.282l1.755-14H55.5v-6.857C55.5,28.698,58.698,25.5,62.643,25.5z"></path><path fill="#40396e" d="M55.5,89h-14c-0.828,0-1.5-0.672-1.5-1.5V55h-9.5c-0.828,0-1.5-0.672-1.5-1.5v-14 c0-0.828,0.672-1.5,1.5-1.5H39v-7.143C39,20.184,47.804,11.5,58.625,11.5c3.354-0.002,7.263,0.2,11.026,0.583 C70.417,12.161,71,12.806,71,13.575V25.5c0,0.828-0.672,1.5-1.5,1.5h-6.857C59.531,27,57,29.531,57,32.643V38h12.537 c0.431,0,0.84,0.185,1.125,0.508c0.284,0.322,0.417,0.752,0.363,1.179l-1.755,14C69.177,54.437,68.538,55,67.782,55H57v32.5 C57,88.328,56.328,89,55.5,89z M43,86h11V53.5c0-0.828,0.672-1.5,1.5-1.5h10.959l1.378-11H55.5c-0.828,0-1.5-0.672-1.5-1.5v-6.857 C54,27.877,57.877,24,62.643,24H68v-9.062c-3.182-0.284-6.405-0.438-9.222-0.438c-0.051,0-0.101,0-0.15,0 C49.458,14.5,42,21.838,42,30.857V39.5c0,0.828-0.672,1.5-1.5,1.5H32v11h9.5c0.828,0,1.5,0.672,1.5,1.5V86z"></path>
</svg>
          )}
          {!isFacebook && (
            
            <svg className="h-9 w-9 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M18.77 5.53a6.28 6.28 0 01-1.8.49 3.18 3.18 0 001.39-1.76 6.5 6.5 0 01-2.02.77A3.16 3.16 0 0012.65 4c-1.74 0-3.16 1.41-3.16 3.16 0 .25.03.5.08.74A8.98 8.98 0 013.29 5.3a3.15 3.15 0 00-.42 1.59c0 1.09.56 2.05 1.41 2.61a3.15 3.15 0 01-1.43-.39v.04c0 1.52 1.08 2.78 2.51 3.06-.27.07-.56.11-.85.11-.21 0-.42-.02-.62-.06.42 1.31 1.63 2.27 3.07 2.3a6.3 6.3 0 01-4.68 1.31c-.3 0-.6-.02-.89-.07a8.91 8.91 0 004.81 1.41c5.79 0 8.96-4.8 8.96-8.95 0-.14 0-.28-.01-.41a6.4 6.4 0 001.57-1.62c-.58.26-1.2.43-1.83.5z" />
            </svg>
          )}
        </div>
      </div>
      {/* Middle Section: Review Text */}
        <p className=" p-2 ml-3 text-gray-600">{reviewText}</p>
      {/* Right Section: Sentiment Indicator (Positive or Negative) */}
      <div className=" justify-end ml-auto p-2  ">
        {/* Conditional Rendering for Positive or Negative Sentiment */}
        {isPositive ? (
          <p className="text-green-500">Positive ↑</p>
        ) : (
          <p className="text-red-500">Negative ↓</p>
        )}
      </div>
    </div>
  );
};