import { CuboidProps } from "../Cuboid/Cuboid.tsx";
import { BlackKeyModel } from "./model.ts";
import Key from "./Key.tsx";

interface Props {
  keyIndex: number;
  cuboidProps?: CuboidProps;
}

const BlackKey = ({ keyIndex, cuboidProps }: Props) => {
  return (
    <Key keyIndex={keyIndex} cuboidProps={cuboidProps} model={BlackKeyModel} />
  );
};

export default BlackKey;
