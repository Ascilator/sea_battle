import { FC } from 'react';

import { alphabet, DO_THE_SHOT } from '@/constants';
import { getColor, socket } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { changeTurnByData } from '@/store/turn';

import { FieldRowProps, ShotCoords } from './types';

import { StyledCell, StyledRow, StyledCoords } from './styles';

const FieldRow: FC<FieldRowProps> = ({ value, rowData, enemy = false }) => {
  const { myStage, enemyStage } = useAppSelector(state => state.canClick);
  const isMyTurn = useAppSelector(state => state.turnSlice.isMyTurn);

  const dispatch = useAppDispatch();

  const doTheShot = (x: ShotCoords, y: ShotCoords) => {
    socket.emit(DO_THE_SHOT, {
      x,
      y
    });
    dispatch(changeTurnByData(false));
  };

  const renderRow = () =>
    rowData.map((fieldValue, i) => (
      <StyledCell
        key={`${value}_${alphabet[i]}`}
        color={getColor(fieldValue)}
        onClick={() => {
          if (myStage && enemyStage && isMyTurn && enemy) {
            doTheShot(i, value);
          }
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
