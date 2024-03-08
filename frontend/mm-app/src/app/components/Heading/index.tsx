import React from "react";

const sizes = {
  "2xl": "text-[45px] font-semibold leading-[68px]",
  xl: "text-4xl font-semibold leading-[44px]",
  s: "text-xs font-bold leading-[18px]",
  md: "text-xl font-semibold leading-[30px]",
  xs: "text-[11px] font-bold leading-[17px]",
  lg: "text-[25px] font-semibold leading-[38px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_96 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
