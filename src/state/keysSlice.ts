import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KeyboardModel } from "../components/Keyboard/model.ts";
import colors from "../utils/colors.ts";

const defaultColor = (keyIndex: number) => {
  return [0, 2, 4, 5, 7, 9, 11].includes(keyIndex % 12)
    ? colors.white
    : colors.black;
};

interface KeysSlice {
  keys: { color: string }[];
}

const initialState: KeysSlice = {
  keys: Array.from({ length: KeyboardModel.keysAmount }, (_, keyIndex) => {
    return { color: defaultColor(keyIndex) };
  }),
};

const keysSlice = createSlice({
  name: "keys",
  initialState,
  reducers: {
    press: (state, action: PayloadAction<number>) => {
      state.keys[action.payload].color = colors.deepSkyBlue;
    },
    release: (state) => {
      for (let i = 0; i < state.keys.length; i++) {
        state.keys[i].color = defaultColor(i);
      }
    },
  },
});

export const { press, release } = keysSlice.actions;
export default keysSlice.reducer;
