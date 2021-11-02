import { FC, useState } from 'react';
import { alphabet, HIT, KILL_THE_SHIP, matrix, MISS } from '@/constants';
import { FieldState } from '@/types';
import { FieldRow } from '@/components/FieldRow';
import { useAppDispatch, useSocketListeners } from '@/hooks';
import { changeMatrix, killShip } from '@/helpers';
import { changeTurnByData } from '@/store/turn';
import { deepClone } from '@/helpers/lodash';

import { StyledCoords, StyledCell, StyledFieldCont, StyledField } from './styles';
import { DefShotData } from '../FieldRow/types';

const EnemyField: FC = () => {
  const [gameState, setGameState] = useState<FieldState>(matrix);
  const dispatch = useAppDispatch();

  useSocketListeners([
    {
      eventName: MISS,
      callback: ({ x, y }: { x: number; y: number }) => {
        setGameState(prevState => changeMatrix(x, y - 1, prevState, 7));
      }
    },
    {
      eventName: HIT,
      callback: ({ x, y }: { x: number; y: number }) => {
        setGameState(prevState => changeMatrix(x, y - 1, prevState, 6));
        dispatch(changeTurnByData(true));
      }
    },
    {
      eventName: KILL_THE_SHIP,
      callback: ({ x, y }: DefShotData) => {
        setGameState(prevState => {
          killShip(prevState, x, y);
          return deepClone(prevState);
        });
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
