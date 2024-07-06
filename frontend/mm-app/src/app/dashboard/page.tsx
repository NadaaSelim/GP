"use client"

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../assets/images";
import { Text, Img, Button, Heading,Header, SelectBox, Input, SentimentComp, DountChart } from "../components";
import ReportPageColumnThree from "../components/ReportPageColumnThree";

import Sidebar1 from "../components/Sidebar1";
import WordCount from "../components/WordCount";
import LineChart from "../components/LineChart";
import CircleChart from "../components/CircleChart";
import {isAuth} from '../auth';

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
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="min-h-screen w-full bg-white-A700 relative">
        <div className="flex flex-row md:flex-col justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto md:gap-5 absolute">
          <Sidebar1 selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} className="w-[20%] h-screen  sticky " />
          
          <div className="flex flex-col justify-center items-center w-full mt-3 ml-[17%] pb-2 ">

          <Header />
                  
          <div className="h-px mt-14 w-full  md:ml-0 ml-[-40px] bg-blue_gray-100_02"></div>

          <div className="flex flex-col justify-start items-start w-full h-full bg-white-A700">
          <div className="flex flex-row justify-start items-start w-full h-full bg-white-A700">

          <div className="flex flex-col justify-start items-start w-full h-full bg-white-A700 gap-3">

          <h1
          
              className="mt-3 md:ml-0 !text-blue_gray-900_01 tracking-[0.50px] text-[40px] font-medium"
            >
              Dashboard
            </h1>
            <div className="flex flex-row items-start justify-start gap-10 text-lg">
          </div>

            <div className="flex flex-row mt-[5px] w-full gap-5">
            <SentimentComp/>
            <DountChart/>
            </div>
            <div className="flex flex-row mt-[20px] w-full gap-5 relative">
            <CircleChart  />
            <LineChart/>
            
              {/* <WordCount data={[ { category: "word1", twitter: 50, facebook: 20 },
    { category: "word2", twitter: 10, facebook: 40 },]}/>
                   */}
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


