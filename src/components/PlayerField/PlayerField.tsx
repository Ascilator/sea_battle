import { FC, useState } from 'react';
import { FieldRow } from '@/components/FieldRow';
import { alphabet, matrix, READY_FOR_THE_BATTLE } from '@/constants';
import { FieldState } from '@/types';
import { Button } from '@/controls';
import { generateShipsPosition, socket } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { changeMyStageClick } from '@/store/canClick';

import {
  StyledField,
  StyledCoords,
  StyledCell,
  StyledFieldCont,
  StyledBtnContainer
} from './styles';

const PlayerField: FC = () => {
  const [gameState, setGameState] = useState<FieldState>(matrix);

  const acceptPosition = useAppSelector(state => state.canClick.myStage);
  const dispatch = useAppDispatch();

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
      {!acceptPosition && (
        <StyledBtnContainer>
          <Button
            text="Change position"
            color="#FFCC00"
            onClick={() => setGameState(generateShipsPosition())}
          />
          <Button
            text="Accept position"
            color="#228B22"
            onClick={() => {
              dispatch(changeMyStageClick());
              socket.emit(READY_FOR_THE_BATTLE);
            }}
          />
        </StyledBtnContainer>
      )}
    </StyledFieldCont>
  );
};

export { PlayerField };
