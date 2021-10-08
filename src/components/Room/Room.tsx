import { FC, useEffect } from 'react';
import { useParams } from 'react-router';

import { PlayerField } from '@/components/PlayerField';
import { EnemyField } from '@/components/EnemyField';
import { socket } from '@/helpers';
import { TEST_EVENT, JOIN_ROOM } from '@/constants';
import { useSocketListeners } from '@/hooks';

import { StyledFieldContainer, StyledRoomContainer, StyledTitle } from './styles';

const Room: FC = () => {
  const { roomId } = useParams<{ roomId: string }>();

  const callback = () => {
    console.log('got it');
  };

  useEffect(() => {
    socket.emit(JOIN_ROOM, roomId);
  }, []);

  useSocketListeners([
    {
      eventName: TEST_EVENT,
      callback
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
