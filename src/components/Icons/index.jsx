import { memo, useCallback } from "react";
import { ReactSVG } from "react-svg";

const Icon = memo(({ name, size = 24, color = "white", onClick }) => {
  const setStyles = useCallback(
    (svg) => {
      const paths = svg.querySelectorAll("path");
      paths.forEach((path) => {
        path.style.fill = color;
      });
      svg.setAttribute("style", "width: 100%; height: 100%;");
    },
    [color]
  );

  const wrapperPadding = size / 2 / 2;

  const wrapperStyles = {
    width: `${size}px`,
    height: `${size}px`,
    padding: wrapperPadding,
    cursor: `${onClick ? "pointer" : "unset"}`,
  };

  return (
    <div className="icon-wrapper" style={wrapperStyles}>
      <ReactSVG
        width={size / 2}
        height={size / 2}
        onClick={onClick}
        className="icon-svg"
        beforeInjection={(svg) => {
          svg.classList.add(`${name}-icon`);
        }}
        afterInjection={(svg) => setStyles(svg)}
        src={`./assets/images/icons/${name}.svg`}
      />
    </div>
  );
});

export default Icon;
