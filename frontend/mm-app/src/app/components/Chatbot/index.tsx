import React from "react";
import { Img, Text, Heading } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";
import Link from "next/link";

  
export default function Chatbot(){

    return(
        <div className=" fixed h-20 w-20 mt-[555px]  ml-[53px] mr-[106px] p-[9px] bg-indigo-400_01 rounded-[50%]">
          <Img
            src="images/img_character_19.png"
            alt="characterninete"
            className="w-[97%] mt-[11px] mb-[17px] object-cover"
          />
        </div>
      ) 

}