import { FC, useEffect } from 'react';
import { useParams } from 'react-router';

import { PlayerField } from '@/components/PlayerField';
import { EnemyField } from '@/components/EnemyField';
import { JOIN_ROOM, READY_FOR_THE_BATTLE } from '@/constants';
import { useAppDispatch, useAppSelector, useSocketListeners } from '@/hooks';
import { socket } from '@/helpers';
import { changeTurnByData } from '@/store/turn';
import { changeEnemyStageClick } from '@/store/canClick';

import { StyledFieldContainer, StyledRoomContainer, StyledTitle } from './styles';

const Room: FC = () => {
  const { roomId } = useParams<{ roomId: string }>();

  const turn = useAppSelector(state => state.turnSlice.value);

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
    }
  ]);

  return (
    <StyledRoomContainer>
      <StyledTitle>{roomId}</StyledTitle>
      <StyledFieldContainer>
        <PlayerField />
        <EnemyField />
      </StyledFieldContainer>
    </StyledRoomContainer>
  );
};

export { Room };
