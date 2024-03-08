import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[5px]",
} as const;
const variants = {
  fill: {
    yellow_100_02: "bg-yellow-100",
    indigo_400_07: "bg-indigo-400_01 text-white-A700",
    indigo_100: "bg-indigo-100",
    yellow_100: "bg-yellow-100",
    gray_50: "bg-gray-50 shadow-xs text-indigo-400_02",
    indigo_400_01: "bg-indigo-400_01 text-white-A700",
  },
  outline: {
    black_900_02: "border-black-900 border border-solid shadow-sm",
    gray_100_02: "border-gray-100_02 border border-solid text-black-900",
  },
} as const;
const sizes = {
  xl: "h-[52px] px-[34px] text-[26px]",
  lg: "h-[50px] px-[7px]",
  "2xl": "h-[57px] px-[35px] text-2xl",
  "3xl": "h-[57px] pl-[11px] pr-[29px] text-[13px]",
  xs: "h-8 px-4 text-xs",
  sm: "h-8 px-1.5",
  md: "h-10",
  "4xl": "h-[57px] px-[35px] text-3xl",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "4xl",
  color = "indigo_400_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
