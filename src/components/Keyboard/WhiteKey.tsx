import { CuboidProps } from "../Cuboid/Cuboid.tsx";
import { WhiteKeyModel } from "./model.ts";
import Key from "./Key.tsx";

interface Props {
  keyIndex: number;
  cuboidProps?: CuboidProps;
}

const WhiteKey = ({ keyIndex, cuboidProps }: Props) => {
  return (
    <Key keyIndex={keyIndex} cuboidProps={cuboidProps} model={WhiteKeyModel} />
  );
};

export default WhiteKey;
