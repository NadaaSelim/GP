import React from "react";
import { Img } from "./..";

interface Props {
  className?: string;
}

export default function ReportPageColumnThree({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[124px] w-[124px] border-blue-100 border-[12px] border-solid rounded-[50%]">
        <div className="flex flex-col items-center justify-start w-1/2">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[62px] w-[62px] rounded-tr-[50%] rounded-tl-[50%] z-[1] border-indigo-400_02 border-[12px] border-solid" />
            <Img src="images/img_ellipse_14.svg" alt="image_two" className="h-[124px] mt-[-62px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
