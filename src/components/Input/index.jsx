import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};

const variants = {
  fill: {
    gray_50_01: "bg-[#f8f8f8] shadow-[4px_4px_#00000026]",
  },
};

const sizes = {
  xs: "h-[2.25rem] px-[0.75rem]",
};

const Input = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      type = "text",
      label,
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "fill",
      size = "xs",
      color = "gray_50_01",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center self-stretch cursor-text border-[#4d57e1] border border-solid ${variants[variant]?.[color]} ${shapes[shape]} ${sizes[size]}`}
      >
        {label && <span className="mr-2">{label}</span>}
        {prefix && <span className="mr-2">{prefix}</span>}
        <input
          ref={ref}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          className="flex-1 bg-transparent outline-none"
          {...restProps}
        />
        {suffix && <span className="ml-2">{suffix}</span>}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onChange: PropTypes.func,
  shape: PropTypes.oneOf(Object.keys(shapes)),
  variant: PropTypes.oneOf(Object.keys(variants)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(variants.fill)),
};

export { Input };
