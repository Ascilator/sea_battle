import styled from 'styled-components';

export const StyledField = styled.div`
  width: 40vw;
  height: 40vw;
  user-select: none;
`;

export const StyledCell = styled.div`
  flex: 0 1 calc(100% / 12);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StyledCoords = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: calc(100% / 12);
`;

export const StyledFieldCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;
