import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TurnState {
  value: number;
  isMyTurn: boolean | null;
  readyForBattle: boolean;
}

const initialState = {
  value: Math.random() * 10,
  isMyTurn: null,
  readyForBattle: false
} as TurnState;

export const turnSlice = createSlice({
  name: 'turn',
  initialState,
  reducers: {
    changeTurn: state => {
      state.isMyTurn = !state.isMyTurn;
    },
    changeTurnByData: (state, action: PayloadAction<boolean>) => {
      state.isMyTurn = action.payload;
    },
    setReadyForBattle: state => {
      state.readyForBattle = true;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeTurn, changeTurnByData, setReadyForBattle } = turnSlice.actions;

export default turnSlice.reducer;
