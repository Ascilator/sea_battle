import { FC, useState } from 'react';
import { alphabet, HIT, matrix, MISS } from '@/constants';
import { FieldState } from '@/types';
import { FieldRow } from '@/components/FieldRow';
import { useSocketListeners } from '@/hooks';
import { changeMatrix } from '@/helpers';

import { StyledCoords, StyledCell, StyledFieldCont, StyledField } from './styles';
import { ShotData } from '../FieldRow/types';

const EnemyField: FC = () => {
  const [gameState, setGameState] = useState<FieldState>(matrix);

  useSocketListeners([
    {
      eventName: MISS,
      callback: ({ x, y }: ShotData) => {
        setGameState(prevState => changeMatrix(x, y, prevState, 7));
      }
    },
    {
      eventName: HIT,
      callback: ({ x, y }: ShotData) => {
        setGameState(prevState => changeMatrix(x, y, prevState, 6));
      }
    }
  ]);

  const renderRows = () =>
    gameState.map((row, index) => <FieldRow key={index} value={index + 1} rowData={row} enemy />);

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
