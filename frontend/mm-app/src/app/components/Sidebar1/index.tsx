import React from "react";
import { Img, Text, Heading } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";
import Link from "next/link";
import Chatbot from "../Chatbot";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="fixed left-0 top-0 h-full">

    <Sidebar
      {...props}
      width="240px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className="min-h-screen h-full overflow-hidden bg-gray-100_03" 

    >
      <div className="flex flex-row justify-start items-start w-[47%] mt-5 ml-10 mr-[88px]  gap-2.5">
        <div className="h-6 w-6 relative">
          <Heading size="xs" as="p" className="right-[17%] top-[13%] m-auto !text-white-A700 absolute">
            G
          </Heading>
          <div className="flex flex-col items-center justify-center h-full w-full left-0 bottom-0 right-0 top-0 m-auto border-indigo-400_01 border border-solid bg-indigo-100 absolute rounded-[50%]">
            <Img src="images/img_avatar_image.png" alt="avatarimage_one" className="w-4/5 object-cover rounded-[7px]" />
          </div>
        </div>
        <Heading size="xs" as="p" className="mt-0.5 !text-indigo-400_01 tracking-[0.50px]">
          Yara hassan
        </Heading>
      </div>
      <Text as="p" className="mt-[58px] ml-10 mr-[166px] !text-gray-900_87 tracking-[1.00px] opacity-0.5">
        MENU
      </Text>
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            borderRadius: "5px",
            margin: " ",
            [`&:hover, &.ps-active`]: {
              color: "#5969cf",
              fontWeight: "500 !important",
              backgroundColor: "#707fdd !important",
            },
          },
        }}
        className="flex flex-col items-center justify-start w-full mt-[9px] gap-[0.96px] px-5"
      >
        <div className="flex flex-row justify-start w-full gap-3 p-3 rounded-[5px]">
          <Img src="images/img_vector_indigo_300.svg" alt="vector_one" className="h-[18px] w-[18px] ml-[7px]" />
          <Text size="s" as="p" className="!text-blue_gray-900 tracking-[0.50px]">
            Dashboard
          </Text>
        </div>
        <Link href="../analyze" className="flex flex-row justify-start w-full gap-3 p-3">
          <Img
            src="images/img_iconly_bold_chart_indigo_300.svg"
            alt="iconlybold_one"
            className="h-[18px] w-[18px] ml-[7px]"
          />
          <Text size="s" as="p" className="!text-blue_gray-900 tracking-[0.50px]">
            Analyze Reviews
          </Text>
        </Link>
        <div className="flex flex-row justify-start w-full gap-3 p-3">
          <Img
            src="images/img_iconly_bold_document_indigo_200.svg"
            alt="iconlybold"
            className="h-[18px] w-[18px] ml-[7px]"
          />
          <Text size="s" as="p" className="!text-blue_gray-900 tracking-[0.50px]">
            Generate Reports
          </Text>
        </div>
        <Link  href ="../settings" className="flex flex-row justify-start w-full gap-3 p-3">
            <Img src="images/img_iconly_bold_setting.svg" alt="iconlybold_five" className="h-[18px] w-[18px] ml-[7px]" />
            <Text size="s" as="p" className="!text-blue_gray-900 tracking-[0.50px]">
              Settings
            </Text>
        </Link>
        
        <div className="flex flex-row justify-start w-full gap-3 p-3">
          <Img src="images/img_iconly_bold_info.svg" alt="iconlybold" className="h-[18px] w-[18px] ml-[7px]" />
          <Text size="s" as="p" className="!text-blue_gray-900 tracking-[0.50px]">
            Help
          </Text>
        </div>
      </Menu>
      <Chatbot/>
    </Sidebar>
    </div>
  );
}
