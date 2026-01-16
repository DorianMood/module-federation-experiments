import type { MouseEventHandler } from "react";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>SHARED BUTTON</button>;
};
