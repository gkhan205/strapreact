import React from "react";
import classnames from "classnames";

import { ButtonProps } from "./Button.types";
import "./Button.styles.scss";

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  iconPlacement = "left",
  size = "medium",
  type = "primary",
  onClick,
}) => {
  return (
    <button
      className={classnames("button", {
        "btn-medium": size === "medium",
        "btn-small": size === "small",
        "btn-big": size === "large",
        "btn-primary": type === "primary",
        "btn-success": type === "success",
        "btn-info": type === "info",
        "btn-warning": type === "warning",
        "btn-danger": type === "danger",
        "btn-pink": type === "pink",
        "btn-purple": type === "purple",
        "btn-cyan": type === "cyan",
        "btn-aquamarine": type === "aquamarine",
        "btn-grey": type === "grey",
        "btn-black": type === "black",
      })}
      onClick={onClick}
    >
      {iconPlacement === "left" && <span className="icon">{icon}</span>}
      {text}
      {iconPlacement === "right" && <span className="icon">{icon}</span>}
    </button>
  );
};

export default Button;
