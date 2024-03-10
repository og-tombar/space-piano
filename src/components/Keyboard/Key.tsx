import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store.ts";
import { press } from "../../state/keysSlice.ts";

import KeyboardPart from "./KeyboardPart.tsx";
import { CuboidProps } from "../Cuboid/Cuboid.tsx";
import { BlackKeyModel, WhiteKeyModel } from "./model.ts";

export type KeyModel = typeof WhiteKeyModel | typeof BlackKeyModel;

interface Props {
  keyIndex: number;
  cuboidProps?: CuboidProps;
  model: KeyModel;
}

const Key = ({ keyIndex, cuboidProps, model }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { keys } = useSelector((state: RootState) => state.keys);

  return (
    <mesh
      onPointerDown={(event) => {
        event.stopPropagation();
        dispatch(press(keyIndex));
      }}
    >
      <KeyboardPart
        cuboidProps={{ ...cuboidProps, color: keys[keyIndex].color }}
        model={model}
      />
    </mesh>
  );
};

export default Key;
