import React from "react";

const sizes = {
  "5xl": "text-[32px] font-medium leading-[39px]",
  xs: "text-[11px] font-normal leading-[17px]",
  lg: "text-sm font-normal leading-[21px]",
  "6xl": "text-[33px] font-normal leading-[51px]",
  "7xl": "text-9xl font-normal leading-[185px]",
  s: "text-xs font-normal leading-[18px]",
  "2xl": "text-lg font-medium leading-[27px]",
  "3xl": "text-xl font-medium leading-[30px]",
  "4xl": "text-2xl font-normal leading-9",
  xl: "text-base font-medium leading-6",
  md: "text-[13px] font-normal leading-5",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-500_87 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
