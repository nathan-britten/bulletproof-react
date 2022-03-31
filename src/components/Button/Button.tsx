import React from "react";
import { Button as MuiButton } from "@mui/material";

export interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "text" | "outlined" | "contained";
}

function Button(props: ButtonProps) {
  const { text, onClick, variant } = props;

  return (
    <MuiButton variant={variant} onClick={onClick}>
      {text}
    </MuiButton>
  );
}

export default Button;
