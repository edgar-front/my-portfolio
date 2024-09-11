import React from "react";
import "./styles.css";

const Text = ({
  size = "1.6rem",
  weight = 400,
  componentTag = "div",
  color = "white",
  children,
}) => {
  return (
    <div
      as={componentTag}
      className="text-component"
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
