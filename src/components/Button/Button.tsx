import React from "react";
import { Button as MuiButton } from "@mui/material";

export interface Props {
  label: string;
}

function Button(props: Props) {
  const hello = "hello";
  const { label } = props;
  const hello1 = '1'
  return <MuiButton>{label}</MuiButton>;
}

export default Button;
