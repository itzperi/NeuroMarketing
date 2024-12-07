import React from "react";

const sizes = {
  textlg: "text-[1.25rem] font-normal lg:text-[1.06rem]",
};

const Text = ({ children, className = "", as, size = "textlg", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component className={`text-[#111111] font-['Inter'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
