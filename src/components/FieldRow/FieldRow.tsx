import { FC } from 'react';
import { alphabet } from '@/constants';
import { getColor } from '@/helpers';

import { FieldRowProps } from './types';

import { StyledCell, StyledRow, StyledCoords } from './styles';

const FieldRow: FC<FieldRowProps> = ({ value, rowData }) => {
  const renderRow = () =>
    rowData.map((fieldValue, i) => (
      <StyledCell
        key={`${value}_${alphabet[i]}`}
        color={getColor(fieldValue)}
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
