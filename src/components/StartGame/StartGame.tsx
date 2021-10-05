import { FC } from "react";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/controls";

import { StyledMainScreenWrapper } from "./styles";

const StartGame: FC = () => {
  const history = useHistory();

  const generateRoom = () => {
    history.push(uuidv4());
  };
  return (
    <StyledMainScreenWrapper>
      <Button text={"Start Game"} color={"#000080"} onClick={generateRoom} />
    </StyledMainScreenWrapper>
  );
};

export { StartGame };
