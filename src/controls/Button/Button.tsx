import { FC } from 'react';
import { ButtonProps } from '@/types';

import { StyledButton } from './styles';

const Button: FC<ButtonProps> = ({ text, color, onClick }) => (
  <StyledButton color={color} onClick={onClick}>
    <span>{text}</span>
  </StyledButton>
);

export { Button };
