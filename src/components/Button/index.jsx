import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-lg",
};

const variants = {
  fill: {
    white_A700: "bg-[#ffffff]",
    indigo_A400: "bg-[#4d57e1] text-[#ffffff]",
  },
};

const sizes = {
  sm: "h-[3.00rem] px-[0.63rem] text-[1.25rem]",
  xs: "h-[2.25rem] px-[1.75rem] text-[1.25rem]",
  md: "h-[4.00rem] px-[2.13rem] text-[1.25rem]",
  lg: "h-[4.25rem] px-[1.13rem]",
};

const Button = ({
  children,
  className,
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size,
  color = "indigo_A400",
  ...restProps
}) => {
  return (
    <button
      className={`flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap $(shape && shapes [shape]) $(size && sizes [size]) $(variant && variants [variant]?.[color]}}
        ${className} 
        ${shape && shapes[shape]} 
        ${size && sizes[size]} 
        ${variant && variants[variant][color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["sm", "xs", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "indigo_A400"]),
};

export { Button };
