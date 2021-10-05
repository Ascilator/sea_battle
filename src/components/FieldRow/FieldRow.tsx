import React, { FC } from "react";
import { arr, alphabet } from "@/constants";

import { FieldRowProps } from "./types";

import { StyledCell, StyledRow, StyledCoords } from "./styles";

const FieldRow: FC<FieldRowProps> = ({ value, rowData }) => {
  const renderRow = () => {
    return rowData.map((letter, i) => {
      return (
        <StyledCell
          key={letter}
          onClick={() => {
            console.log(alphabet[i], value);
          }}
        ></StyledCell>
      );
    });
  };

  return (
    <StyledRow>
      <StyledCoords>{value}</StyledCoords>
      {renderRow()}
      <StyledCoords>{value}</StyledCoords>
    </StyledRow>
  );
};

export { FieldRow };
