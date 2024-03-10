import { Center, Float, OrbitControls } from "@react-three/drei";

import SceneContents from "./SceneContents.tsx";
import SceneLights from "./Lights.tsx";
import SceneEffects from "./SceneEffects.tsx";
import Background from "./Background.tsx";

const Scene = () => {
  return (
    <group>
      <OrbitControls autoRotate autoRotateSpeed={0.1} />
      <Background />
      <SceneLights />
      <SceneEffects />

      <Center position={[0, 1, 0]}>
        <Float speed={1}>
          <SceneContents />
        </Float>
      </Center>
    </group>
  );
};

export default Scene;
