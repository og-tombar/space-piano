import { Canvas } from "@react-three/fiber";
import Scene from "./Scene.tsx";

const SceneContainer = () => {
  return (
    <Canvas shadows camera={{ position: [0, 4, 5] }}>
      <Scene />
    </Canvas>
  );
};

export default SceneContainer;
