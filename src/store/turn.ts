import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TurnState {
  value: number;
  isMyTurn: boolean | null;
}

const initialState = { value: Math.random() * 10, isMyTurn: null } as TurnState;

export const turnSlice = createSlice({
  name: 'turn',
  initialState,
  reducers: {
    changeTurn: state => {
      state.isMyTurn = !state.isMyTurn;
    },
    changeTurnByData: (state, action: PayloadAction<boolean>) => {
      state.isMyTurn = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeTurn, changeTurnByData } = turnSlice.actions;

export default turnSlice.reducer;
