import Cuboid, { CuboidProps } from "../Cuboid/Cuboid.tsx";
import { Vector3 } from "three";
import colors from "../../utils/colors.ts";

const Floor = (props: CuboidProps) => {
  return (
    <Cuboid
      {...props}
      position={new Vector3(0, -2, 0)}
      scale={new Vector3(50, 1, 50)}
      color={colors.gray}
    />
  );
};

export default Floor;
