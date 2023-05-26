import { MouseEventHandler, ReactNode } from "react";

type props = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
};

export const Button: React.FC<props> = (props) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
