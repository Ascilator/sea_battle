import styled from 'styled-components';
import { StylesType } from '@/types';

interface ICell {
  color?: string;
}

export const StyledCell = styled.div<StylesType>`
  flex: 0 1 calc(100% / 12);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #000;
  background: ${(p: ICell) => p.color};
`;

export const StyledRow = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: calc(100% / 12);
`;

export const StyledCoords = styled.div`
  flex: 0 1 calc(100% / 12);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #000;
`;
