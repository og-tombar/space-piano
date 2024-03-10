import KeyboardPart from "./KeyboardPart.tsx";
import { CuboidProps } from "../Cuboid/Cuboid.tsx";
import { LeftPanelModel } from "./model.ts";

interface Props {
  cuboidProps?: CuboidProps;
}

const LeftPanel = ({ cuboidProps }: Props) => {
  return (
    <KeyboardPart
      cuboidProps={cuboidProps ? cuboidProps : {}}
      model={LeftPanelModel}
    />
  );
};

export default LeftPanel;
