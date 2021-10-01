import { FC } from "react";
import { ButtonProps } from "@/types";

import { StyledButton } from "./styles";

const Button: FC<ButtonProps> = ({ text, color }) => {
  return (
    <StyledButton>
      <span>{text}</span>
    </StyledButton>
  );
};

export { Button };
