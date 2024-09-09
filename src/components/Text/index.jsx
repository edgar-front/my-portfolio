import React from "react";
import "./styles.css";

const Text = ({
  size = "1.6rem",
  weight = 400,
  componentTag = "div",
  color = "white",
  margin = "24px",
  children,
}) => {
  return (
    <div
      as={componentTag}
      className="text-component"
      style={{
        fontSize: size,
        fontWeight: weight,
        margin: margin,
        color: color,
      }}
    >
      {children}
    </div>
  );
};

export default Text;
