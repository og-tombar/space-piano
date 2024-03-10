import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RotationState {
  xRotation: number;
  yRotation: number;
}

const initialState: RotationState = {
  xRotation: 0,
  yRotation: 0,
};

const rotationSlice = createSlice({
  name: "rotation",
  initialState,
  reducers: {
    rotateX: (state, action: PayloadAction<number>) => {
      state.xRotation = (state.xRotation + action.payload) % 360;
    },
    rotateY: (state, action: PayloadAction<number>) => {
      state.yRotation = (state.yRotation + action.payload) % 360;
    },
  },
});

export const { rotateX, rotateY } = rotationSlice.actions;
export default rotationSlice.reducer;
