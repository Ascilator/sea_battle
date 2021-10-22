import { FC, useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useHistory, useParams } from 'react-router';

import { PlayerField } from '@/components/PlayerField';
import { EnemyField } from '@/components/EnemyField';
import { Fire } from '@/components/Fire';
import { Wait } from '@/components/Wait';

import { JOINED_ROOM, JOIN_ROOM, NOT_POSSIBLE_TO_CONNECT, READY_FOR_THE_BATTLE } from '@/constants';

import { useAppDispatch, useAppSelector, useSocketListeners } from '@/hooks';

import { socket } from '@/helpers';

import { changeTurnByData } from '@/store/turn';
import { changeEnemyStageClick } from '@/store/canClick';

import {
  StyledFieldContainer,
  StyledRoomContainer,
  StyledTitle,
  StyledTurnContainer
} from './styles';

const Room: FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();

  const turn = useAppSelector(state => state.turnSlice.value);
  const isMyTurn = useAppSelector(state => state.turnSlice.isMyTurn);
  const readyForBattle = useAppSelector(state => state.turnSlice.readyForBattle);

  const [, setPoss] = useState<number>(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.emit(JOIN_ROOM, roomId);
  }, []);

  useSocketListeners([
    {
      eventName: READY_FOR_THE_BATTLE,
      callback: (data: number) => {
        dispatch(changeTurnByData(data < turn));
        dispatch(changeEnemyStageClick());
      }
    },
    {
      eventName: JOINED_ROOM,
      callback: () => {
        // if (poss === 1) {
        //   setPoss(2);
        // } else {
        //   socket.emit(NOT_POSSIBLE_TO_CONNECT);
        // }
        setPoss(prevState => {
          if (prevState === 1) {
            return 2;
          }
          socket.emit(NOT_POSSIBLE_TO_CONNECT);
          return prevState;
        });
      }
    },
    {
      eventName: NOT_POSSIBLE_TO_CONNECT,
      callback: () => {
        setPoss(prevState => {
          if (prevState === 1) {
            history.replace('/');
          }
          return prevState;
        });
      }
    }
  ]);

  return (
    <StyledRoomContainer>
      <StyledTitle>{roomId}</StyledTitle>
      <StyledFieldContainer>
        <PlayerField />
        <EnemyField />
      </StyledFieldContainer>
      {readyForBattle && isMyTurn !== null && (
        <StyledTurnContainer>{isMyTurn ? <Fire /> : <Wait />}</StyledTurnContainer>
      )}
    </StyledRoomContainer>
  );
};

export { Room };
