import { Suspense } from "react";
import { Sparkles, Environment } from "@react-three/drei";

const Background = () => {
  return (
    <Suspense>
      <Environment
        // https://tools.wwwtyro.net/space-3d/index.html
        background
        path="bg/"
        files={[
          "left.png",
          "right.png",
          "top.png",
          "bottom.png",
          "back.png",
          "front.png",
        ]}
      />
      <Sparkles
        count={300}
        size={1}
        speed={0.02}
        opacity={1}
        scale={10}
        color="#fff3b0"
      />
    </Suspense>
  );
};

export default Background;
