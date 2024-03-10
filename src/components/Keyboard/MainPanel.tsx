import KeyboardPart from "./KeyboardPart.tsx";
import { CuboidProps } from "../Cuboid/Cuboid.tsx";
import { MainPanelModel } from "./model.ts";

interface Props {
  cuboidProps?: CuboidProps;
}

const MainPanel = ({ cuboidProps }: Props) => {
  return (
    <KeyboardPart
      cuboidProps={cuboidProps ? cuboidProps : {}}
      model={MainPanelModel}
    />
  );
};

export default MainPanel;
