import { memo, useCallback } from "react";
import { ReactSVG } from "react-svg";

const Icon = memo(
  ({ name, size = 24, color = "white", onClick, className = "" }) => {
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
      <div className={className} style={wrapperStyles}>
        <ReactSVG
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
  }
);

export default Icon;
