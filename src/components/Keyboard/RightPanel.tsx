import KeyboardPart from "./KeyboardPart.tsx";
import { CuboidProps } from "../Cuboid/Cuboid.tsx";
import { RightPanelModel } from "./model.ts";

interface Props {
  cuboidProps?: CuboidProps;
}

const RightPanel = ({ cuboidProps }: Props) => {
  return (
    <KeyboardPart
      cuboidProps={cuboidProps ? cuboidProps : {}}
      model={RightPanelModel}
    />
  );
};

export default RightPanel;
