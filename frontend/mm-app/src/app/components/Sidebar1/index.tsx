import React from "react";
import { Img, Text, Heading } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";
import Link from "next/link";
import Chatbot from "../Chatbot";

interface Props {
  className?: string;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export default function Sidebar1({ selectedIndex, setSelectedIndex, ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);
  // TODO will be replaced with localstorage.getItem("user").username
  const username = "USERNAME";
  const img = "images/img_avatar_image.png"
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const menuItems = [
    { name: "Dashboard", icon: "images/img_vector_indigo_300.svg",link:'../dashboard' },
    { name: "Analyze Reviews", icon: "images/img_iconly_bold_chart_indigo_300.svg", link: "../analyze" },
    { name: "Generate Reports", icon: "images/img_iconly_bold_document_indigo_200.svg",link:"../report" },
    { name: "Settings", icon: "images/img_iconly_bold_setting.svg", link: "../settings"},
    { name: "Help", icon: "images/img_iconly_bold_info.svg" }
  ];

  return (
    <div className="fixed left-0 top-0 h-full font-semibold">
      <Sidebar
        {...props}
        width="240px !important"
        collapsedWidth="80px !important"
        collapsed={collapsed}
        className="min-h-screen h-full font-semibold overflow-hidden bg-gray-100_03"
      >
        <div className="flex flex-row justify-start items-start w-[47%] mt-5 ml-10 mr-[88px] gap-2.5">
          <div className="h-6 w-6 relative">
            <Heading size="xs" as="p" className="right-[17%] top-[13%] m-auto !text-white-A700 absolute">
              G
            </Heading>
            <div className="flex flex-col items-center justify-center h-full w-full left-0 bottom-0 right-0 top-0 m-auto border-indigo-400_01 border border-solid bg-indigo-100 absolute rounded-[50%]">
              <Img src={img} alt={username} className="w-4/5 object-cover rounded-[7px]" />
            </div>
          </div>
          <p className="mt-0.5 text-xs font-bold !text-indigo-400_01 tracking-[0.50px]">
            {username}
          </p>
        </div>
        <p className="mt-[50px] ml-10 mr-[166px] font-bold !text-gray-900_87 tracking-[1.00px] opacity-0.5">
          MENU
        </p>
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
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link || "#"}
              className="flex flex-row justify-start w-full gap-3 p-3"
              onClick={() => handleClick(index)}
            >
              <Img
                src={item.icon}
                alt={item.name.toLowerCase().replace(" ", "_")}
                className={`h-[18px] w-[18px] ml-[7px] ${
                  selectedIndex === index ? "text-indigo-300 text-xl font-bold" : "text-lg text-indigo-200"
                }`}
                style={{ filter: selectedIndex === index ? 'invert(56%) sepia(11%) saturate(2571%) hue-rotate(195deg) brightness(90%) contrast(92%)' : " invert(76%) sepia(37%) saturate(175%) hue-rotate(193deg) brightness(86%) contrast(84%)" }}
              />
              <p

                className={`tracking-[0.50px] ${
                  selectedIndex === index ? "font-semibold text-indigo-300 text-sm" : "text-xs  font-normal text-indigo-200"
                }`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </Menu>
        <Chatbot />
      </Sidebar>
    </div>
  );
}
