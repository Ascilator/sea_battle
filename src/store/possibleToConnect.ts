import { createSlice } from '@reduxjs/toolkit';

interface PossibleToConnectState {
  value: number;
}

const initialState = {
  value: 1
} as PossibleToConnectState;

export const possibleToConnectSlice = createSlice({
  name: 'possibleToConnect',
  initialState,
  reducers: {
    changeConnect: state => {
      state.value = 2;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeConnect } = possibleToConnectSlice.actions;

export default possibleToConnectSlice.reducer;
