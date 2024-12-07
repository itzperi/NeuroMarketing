import React from "react";

const sizes = {
  textxs: "text-[0.56rem] font-medium",
  texts: "text-[0.88rem] font-medium",
  textmd: "text-[1.06rem] font-medium lg:text-[0.88rem]",
  textxl: "text-[1.38rem] font-medium lg:text-[1.13rem]",
  text2xl: "text-[1.50rem] font-medium lg:text-[1.25rem] md:text-[1.38rem]",
  text3xl: "text-[3.75rem] font-medium lg:text-[3.19rem] md:text-[3.25rem] sm:text-[2.88rem]",
  headingxs: "text-[0.75rem] font-bold",
  headings: "text-[0.81rem] font-bold",
  headingmd: "text-[1.25rem] font-semibold lg:text-[1.06rem]",
  headinglg: "text-[1.88rem] font-bold lg:text-[1.56rem] md:text-[1.75rem] sm:text-[1.63rem]",
  headingxl: "text-[2.50rem] font-bold lg:text-[2.13rem] md:text-[2.38rem] sm:text-[2.25rem]",
};

const Heading = ({
  children,
  className = "",
  size = "headings",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-[#111111] font-['Poppins'] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
