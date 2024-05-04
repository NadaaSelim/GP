"use client"
import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Input } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");

  return (
    <header {...props}>
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
        className="w-[55%] gap-[35px] text-blue_gray-900_75 bg-gray-50 tracking-[0.50px] rounded-[5px]"
      />
      <div className="flex flex-row justify-center items-center">
        <Button color="yellow_100" size="sm" shape="circle" className="w-8">
          <Img src="images/img_group_147.png" />
        </Button>
        <Text size="s" as="p" className="ml-3 !text-blue_gray-900_01 tracking-[0.50px]">
          McDonald&#39;s
        </Text>
        <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-5 w-5 ml-[34px] opacity-0.5" />
      </div>
    </header>
  );
}
export {Header};