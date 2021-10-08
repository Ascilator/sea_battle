import { FC, useState } from 'react';
import { alphabet, matrix } from '@/constants';
import { FieldState } from '@/types';
import { FieldRow } from '@/components/FieldRow';
import { StyledCoords, StyledCell, StyledFieldCont, StyledField } from './styles';

const EnemyField: FC = () => {
  const [gameState] = useState<FieldState>(matrix);

  const renderRows = () =>
    gameState.map((row, index) => <FieldRow key={index} value={index + 1} rowData={row} />);

  const renderCoords = () => (
    <StyledCoords>
      <StyledCell />
      {alphabet.map(el => (
        <StyledCell key={el}>{el}</StyledCell>
      ))}
      <StyledCell />
    </StyledCoords>
  );

  return (
    <StyledFieldCont>
      <StyledField>
        {renderCoords()}
        {renderRows()}
        {renderCoords()}
      </StyledField>
    </StyledFieldCont>
  );
};

export { EnemyField };
