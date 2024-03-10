import Keyboard from "../Keyboard/Keyboard.tsx";
import { release } from "../../state/keysSlice.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store.ts";
import { Text3D } from "@react-three/drei";
import colors from "../../utils/colors.ts";

const SceneContents = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <group onPointerUp={() => dispatch(release())}>
      <Keyboard />
      <Text3D
        scale={[0.5, 0.5, 0.5]}
        position={[-7, 1.5, -2]}
        font={"fonts/gt.json"}
        curveSegments={24}
        bevelEnabled
        bevelSize={0.05}
        bevelThickness={0.01}
        height={0.7}
        lineHeight={0.9}
        letterSpacing={0.3}
      >
        Click the keys to play!
        <meshStandardMaterial emissive={colors.darkRed} color={colors.orange} />
      </Text3D>
    </group>
  );
};

export default SceneContents;
