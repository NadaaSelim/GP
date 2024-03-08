import React from "react";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    gray_100_07: "bg-gray-100_01",
    white_A700: "bg-white-A700 text-black-900",
    gray_100_01: "bg-gray-100_01",
  },
  underline: {
    gray_100_02: "text-gray-400_01 border-b border-gray-100_02 border-solid",
  },
  outline: {
    black_900: "border-black-900 border border-solid text-black-900",
  },
} as const;
const sizes = {
  xl: "h-[52px] pl-[3px] pr-[35px]",
  md: "h-[41px] px-[33px] text-lg",
  xs: "h-8 px-[15px] text-xs",
  sm: "h-[35px] pl-[3px] pr-[35px] text-sm",
  lg: "h-[52px] pl-[23px] pr-[35px] text-2xl",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "outline",
      size = "lg",
      color = "black_900",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

export { Input };
