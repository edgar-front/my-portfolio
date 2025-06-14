import React from "react";
import "./styles.css";

const Text = ({
  className = " ",
  size = "var(--size-medium)",
  weight = 400,
  componentTag = "div",
  color = "white",

  children,
}) => {
  return (
    <div
      className={`text-component ${className}`}
      as={componentTag}
      style={{
        fontSize: size,
        fontWeight: weight,
        color: color,
      }}
    >
      {children}
    </div>
  );
};

export default Text;
