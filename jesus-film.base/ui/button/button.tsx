import React from "react";

export type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  return <button>{text}</button>;
};
