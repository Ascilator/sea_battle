import { configureStore } from '@reduxjs/toolkit';

import canClickReducer from './canClick';
import turnSliceReducer from './turn';
import possibleToConnectReducer from './possibleToConnect';

export const store = configureStore({
  reducer: {
    canClick: canClickReducer,
    turnSlice: turnSliceReducer,
    possibleToConnect: possibleToConnectReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
