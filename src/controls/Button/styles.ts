import styled, { css } from 'styled-components';
import { StylesType } from '@/types';

interface IButton {
  color?: string
}

export const StyledButton = styled.button<StylesType>`
  position: relative;
  user-select: none;
  cursor: pointer;
  color: #eee;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  border: none;
  background: #0000;
  & span {
    position: relative;
    z-index: 1;
    display: block;
    padding: 15px;
    border-radius: 1000px;
    ${(p: IButton) => css`
      border: 1px solid darken(${p.color || '#d99d61'}, 5%);
      background-color: ${p.color || '#d99d61'};
    `}
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.1s, box-shadow 0.2s, background-color 0.2s;
  }
  &:after {
    content: '';
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
    border-radius: 1000px;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.2), inset 0 0 0px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.1s;
  }

  &:active {
    & span {
      ${(p: IButton) => css`
        background-color: ${p.color || '#d99d61'};
      `}
      transform: scale(0.97);
      box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
    }
    &:after {
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), inset -3px 3px 1em rgba(0, 0, 0, 0.2);
    }
  }
`;
