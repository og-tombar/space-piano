import { configureStore } from "@reduxjs/toolkit";
import rotationReducer from "./rotationSlice.ts";
import keysReducer from "./keysSlice.ts";

const store = configureStore({
  reducer: {
    keys: keysReducer,
    rotation: rotationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
