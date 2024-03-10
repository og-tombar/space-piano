import { Vector3 } from "three";
import Cuboid, { CuboidProps } from "../Cuboid/Cuboid.tsx";
import {
  BackPanelModel,
  BlackKeyModel,
  LeftPanelModel,
  MainPanelModel,
  RightPanelModel,
  WhiteKeyModel,
} from "./model.ts";

type KeyboardPartModel =
  | typeof WhiteKeyModel
  | typeof BlackKeyModel
  | typeof MainPanelModel
  | typeof BackPanelModel
  | typeof RightPanelModel
  | typeof LeftPanelModel;

interface Props {
  cuboidProps: CuboidProps;
  model: KeyboardPartModel;
}

const KeyboardPart = ({ cuboidProps, model }: Props) => {
  const scale = model.dims;
  const position = cuboidProps.position
    ? cuboidProps.position
    : new Vector3(0, 0, 0);
  const effectivePosition = position.clone().add(model.bias);
  const color = cuboidProps.color ? cuboidProps.color : model.color;
  return (
    <Cuboid
      {...cuboidProps}
      scale={scale}
      position={effectivePosition}
      color={color}
    />
  );
};

export default KeyboardPart;
