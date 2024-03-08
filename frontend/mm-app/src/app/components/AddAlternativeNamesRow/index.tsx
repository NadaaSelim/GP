import React from "react";
import { Heading, Button, Img, Input } from "./..";

interface Props {
  className?: string;
  brandname?: string;
  name?: string;
  namestotrack?: string;
  namestotrack1?: string;
  iconbuttonone?: string;
  prop?: string;
}

export default function AddAlternativeNamesRow({
  brandname,
  name,
  namestotrack = "Names to track in Arabic",
  namestotrack1 = "Names to track in English",
  iconbuttonone,
  prop,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-start w-full gap-[15px]">
        <div className="flex flex-col items-start justify-start w-[89%]">
          {!!brandname ? (
            <Heading size="lg" as="h1" className="ml-[3px] tracking-[2.00px]">
              {brandname}
            </Heading>
          ) : null}
          {!!name ? (
            <Input
              name="name"
              placeholder="McDonald’s"
              className="w-full mt-[5px] ml-[3px] tracking-[1.92px] font-medium"
            />
          ) : null}
          <Heading as="h2" className="mt-[31px] ml-1.5 tracking-[1.60px]">
            {namestotrack}
          </Heading>
          <Input
            name="name"
            placeholder="ماكدونالدز, ماك"
            className="w-full mt-5 ml-[3px] tracking-[1.92px] font-medium"
          />
          <Heading as="h3" className="mt-[46px] ml-1.5 tracking-[1.60px]">
            {namestotrack1}
          </Heading>
          <Input
            name="name"
            placeholder="Mac , Macca’s, Maccas"
            className="w-full mt-[17px] tracking-[1.92px] font-medium"
          />
        </div>
        <div className="h-[68px] w-[10%] mt-8 px-3 relative">
          {!!iconbuttonone ? (
            <Button size="md" className="w-10 left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img src="images/defaultNoData.png" />
            </Button>
          ) : null}
          {!!prop ? (
            <Heading
              size="2xl"
              as="h2"
              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 tracking-[3.60px] text-center absolute"
            >
              {prop}
            </Heading>
          ) : null}
        </div>
      </div>
    </div>
  );
}
