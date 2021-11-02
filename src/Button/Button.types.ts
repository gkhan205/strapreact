import React, { ReactNode } from "react";

export interface ButtonProps {
  text: string;
  icon?: ReactNode;
  iconPlacement?: string;
  size?: string;
  type?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
