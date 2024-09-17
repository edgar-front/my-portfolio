import { memo } from "react";
import "./styles.css";
import Icon from "../Icon";

export const BurgerButton = memo(
  ({ isOpen = false, onClick, className = "" }) => {
    return (
      <button
        class={`menu-btn ${className} ${isOpen ? "mobile-burger-close" : ""}`}
        onClick={onClick}
      >
        {isOpen ? (
          <Icon
            size={24}
            color="white"
            name={"close"}
            alt={"close-button"}
            className="close-icon"
          />
        ) : (
          <div class="material-symbols-outlined">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </button>
    );
  }
);
