import { FC, useEffect, useState } from 'react';

import { FieldRow } from '@/components/FieldRow';

import { alphabet, DO_THE_SHOT, HIT, matrix, MISS, READY_FOR_THE_BATTLE } from '@/constants';

import { FieldState } from '@/types';

import { Button } from '@/controls';

import { changeMatrix, checkIsKilled, generateShipsPosition, socket } from '@/helpers';

import { useAppDispatch, useAppSelector, useSocketListeners } from '@/hooks';

import { changeMyStageClick } from '@/store/canClick';
import { changeTurnByData, setReadyForBattle } from '@/store/turn';

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
  const [coords, setCoords] = useState<Array<number>>([]);
  const [buttonShow, setButtonShow] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useSocketListeners([
    {
      eventName: DO_THE_SHOT,
      callback: ({ x, y }: ShotData) => {
        if (x === undefined || y === undefined) return;
        setGameState(prevState => changeMatrix(x, y, prevState));
        setCoords([+x, +y]);
      }
    }
  ]);

  useEffect(() => {
    let nextTurn = false;
    if (coords.length) {
      const [x, y] = [...coords];
      if (gameState[+y - 1][+x] === 6) {
        socket.emit(HIT, {
          x,
          y
        });
        nextTurn = false;
      }
      if (gameState[+y - 1][+x] === 7) {
        socket.emit(MISS, {
          x,
          y
        });
        nextTurn = true;
      }

      if (!nextTurn) checkIsKilled(y - 1, x, gameState);

      dispatch(changeTurnByData(nextTurn));
    }
  }, [coords]);

  const turn = useAppSelector(state => state.turnSlice.value);

  const acceptPosition = useAppSelector(state => state.canClick.myStage);

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
