import React, { ForwardedRef, useEffect, useRef } from "react";
import Select, { Props } from "react-select";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[5px]",
} as const;
const variants = {
  fill: {
    white_A700_02: "bg-white-A700 text-black-900",
    white_A700: "bg-white-A700 text-black-900",
  },
  outline: {
    black_900: "border-black-900 border-[0.5px] border-solid text-black-900",
  },
} as const;
const sizes = {
  sm: "h-[37px] pl-4 pr-[35px] text-base",
  xs: "h-6 pr-[30px] text-sm",
  md: "h-11 pl-4 pr-[35px] text-base",
} as const;

type selectOptionType = { value: string; label: string };
type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    [x: string]: any;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: keyof (typeof variants)[keyof typeof variants];
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape = "round",
      size = "md",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const menuPortalTargetRef = useRef<HTMLElement | null>(null);
    
      useEffect(() => {
        if (typeof document !== 'undefined') {
          menuPortalTargetRef.current = document.body;
        }
            }, []);
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided:any, state:any) => ({
              ...provided,
              backgroundColor: state.isSelected && "#5a67ba",
              color: state.isSelected && "#ffffff",
              "&:hover": {
                backgroundColor: "#5a67ba",
                color: "#ffffff",
              },
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  },
);

export { SelectBox };
