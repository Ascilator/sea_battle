import { FC, useEffect } from 'react';
import { useParams } from 'react-router';

import { PlayerField } from '@/components/PlayerField';
import { EnemyField } from '@/components/EnemyField';
import { JOIN_ROOM, READY_FOR_THE_BATTLE } from '@/constants';
import { useAppDispatch, useSocketListeners } from '@/hooks';
import { socket } from '@/helpers';
import { changeEnemyStageClick } from '@/store/canClick';

import { StyledFieldContainer, StyledRoomContainer, StyledTitle } from './styles';

const Room: FC = () => {
  const { roomId } = useParams<{ roomId: string }>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.emit(JOIN_ROOM, roomId);
  }, []);

  useSocketListeners([
    {
      eventName: READY_FOR_THE_BATTLE,
      callback: () => dispatch(changeEnemyStageClick())
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
