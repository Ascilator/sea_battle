import { createSlice } from '@reduxjs/toolkit';

interface CanClickState {
  value: boolean;
  myStage: boolean;
  enemyStage: boolean;
}

const initialState = { value: false, myStage: false, enemyStage: false } as CanClickState;

export const canClickSlice = createSlice({
  name: 'canClick',
  initialState,
  reducers: {
    changeCanClick: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    changeMyStageClick: state => {
      state.myStage = true;
    },
    changeEnemyStageClick: state => {
      state.enemyStage = true;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeCanClick, changeMyStageClick, changeEnemyStageClick } = canClickSlice.actions;

export default canClickSlice.reducer;
