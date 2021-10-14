import { FC, useState } from 'react';
import { FieldRow } from '@/components/FieldRow';
import { alphabet, DO_THE_SHOT, matrix, READY_FOR_THE_BATTLE } from '@/constants';
import { FieldState } from '@/types';
import { Button } from '@/controls';
import { changeMatrix, generateShipsPosition, socket } from '@/helpers';
import { useAppDispatch, useAppSelector, useSocketListeners } from '@/hooks';
import { changeMyStageClick } from '@/store/canClick';
import { setReadyForBattle } from '@/store/turn';

import {
  StyledField,
  StyledCoords,
  StyledCell,
  StyledFieldCont,
  StyledBtnContainer
} from './styles';
import { ShotData } from '../FieldRow/types';

const PlayerField: FC = () => {
  const [gameState, setGameState] = useState<FieldState>(matrix);
  const [buttonShow, setButtonShow] = useState<boolean>(false);

  useSocketListeners([
    {
      eventName: DO_THE_SHOT,
      callback: ({ x, y }: ShotData) => {
        setGameState(prevState => changeMatrix(x, y, prevState));
      }
    }
  ]);

  const turn = useAppSelector(state => state.turnSlice.value);

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
            onClick={() => {
              setButtonShow(true);
              setGameState(generateShipsPosition());
            }}
          />
          {buttonShow && (
            <Button
              text="Accept position"
              color="#228B22"
              onClick={() => {
                dispatch(changeMyStageClick());
                dispatch(setReadyForBattle());
                socket.emit(READY_FOR_THE_BATTLE, turn);
              }}
            />
          )}
        </StyledBtnContainer>
      )}
    </StyledFieldCont>
  );
};

export { PlayerField };
