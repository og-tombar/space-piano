import { Vector3 } from "three";

export interface CuboidProps {
  scale?: Vector3;
  position?: Vector3;
  color?: string;
}

const Cuboid = ({
  scale = new Vector3(1, 1, 1),
  position = new Vector3(0, 0, 0),
  color = "white",
}: CuboidProps) => {
  return (
    <mesh position={position} receiveShadow castShadow>
      <boxGeometry args={scale.toArray()} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Cuboid;
