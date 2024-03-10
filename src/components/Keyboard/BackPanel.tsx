import KeyboardPart from "./KeyboardPart.tsx";
import { CuboidProps } from "../Cuboid/Cuboid.tsx";
import { BackPanelModel } from "./model.ts";

interface Props {
  cuboidProps?: CuboidProps;
}

const BackPanel = ({ cuboidProps }: Props) => {
  return (
    <KeyboardPart
      cuboidProps={cuboidProps ? cuboidProps : {}}
      model={BackPanelModel}
    />
  );
};

export default BackPanel;
