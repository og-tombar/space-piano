const Lights = () => {
  return (
    <group>
      <ambientLight intensity={0.1} />
      <directionalLight castShadow position={[0, 100, 20]} intensity={2} />
    </group>
  );
};

export default Lights;
