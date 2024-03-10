import { EffectComposer, Noise } from "@react-three/postprocessing";

const SceneEffects = () => {
  return (
    <EffectComposer>
      <Noise opacity={0.02} />
    </EffectComposer>
  );
};

export default SceneEffects;
