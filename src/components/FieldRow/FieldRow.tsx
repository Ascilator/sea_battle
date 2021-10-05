import { FC } from 'react';
import { alphabet } from '@/constants';

import { FieldRowProps } from './types';

import { StyledCell, StyledRow, StyledCoords } from './styles';

const FieldRow: FC<FieldRowProps> = ({ value, rowData }) => {
  const renderRow = () => rowData.map((letter, i) => (
    <StyledCell
      key={letter}
      onClick={() => {
        console.log(alphabet[i], value);
      }}
    />
  ));

  return (
    <StyledRow>
      <StyledCoords>{value}</StyledCoords>
      {renderRow()}
      <StyledCoords>{value}</StyledCoords>
    </StyledRow>
  );
};

export { FieldRow };
