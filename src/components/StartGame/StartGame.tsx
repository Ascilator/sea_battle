import { FC } from "react";
import { Button } from "@/controls";

import { StyledMainScreenWrapper } from "./styles";

const StartGame: FC = () => {
  return (
    <StyledMainScreenWrapper>
      <Button text={"Start Game"} color={"#0f93ff"} />
    </StyledMainScreenWrapper>
  );
};

export { StartGame };
