import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};

const variants = {
  tarOutlineIndigoA400: "border-[#4d57e1] border border-solid bg-[#f8f8f8] shadow-[0_4px_4px_0_#00000026]",
};

const sizes = {
  xs: "h-[4.38rem] p-[0.75rem]",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name,
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarOutlineIndigoA400",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(Object.keys(shapes)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  variant: PropTypes.oneOf(Object.keys(variants)),
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  className: "",
  placeholder: "",
  shape: undefined,
  size: "xs",
  variant: "tarOutlineIndigoA400",
  onChange: undefined,
};

export default TextArea;
