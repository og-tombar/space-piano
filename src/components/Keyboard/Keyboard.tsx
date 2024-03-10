import { useSelector } from "react-redux";
import { RootState } from "../../state/store.ts";

import MainPanel from "./MainPanel.tsx";
import BackPanel from "./BackPanel.tsx";
import RightPanel from "./RightPanel.tsx";
import LeftPanel from "./LeftPanel.tsx";
import { generateKeys } from "./KeyboardLogic.tsx";

const Keyboard = () => {
  const { xRotation, yRotation } = useSelector(
    (state: RootState) => state.rotation,
  );
  const keys = generateKeys();

  return (
    <group rotation={[xRotation, yRotation, 0]}>
      <MainPanel />
      <BackPanel />
      <RightPanel />
      <LeftPanel />
      {keys.map((key) => key)}
    </group>
  );
};

export default Keyboard;
