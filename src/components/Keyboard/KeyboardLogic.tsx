import { KeyboardModel, WhiteKeyModel } from "./model.ts";
import { Vector3 } from "three";
import WhiteKey from "./WhiteKey.tsx";
import BlackKey from "./BlackKey.tsx";

export const generateKeys = () => {
  let whiteCount = 0;
  const keys = [];

  for (let i = 0; i < KeyboardModel.keysAmount; i++) {
    const isWhiteKey = [0, 2, 4, 5, 7, 9, 11].includes(i % 12);
    if (isWhiteKey) {
      const posX = whiteCount * WhiteKeyModel.keyDistance;
      const pos = new Vector3(posX, 0, 0).add(KeyboardModel.keysOffset);
      keys.push(
        <WhiteKey key={i} keyIndex={i} cuboidProps={{ position: pos }} />,
      );
      whiteCount += 1;
    } else {
      const posX = (whiteCount - 0.5) * WhiteKeyModel.keyDistance;
      const pos = new Vector3(posX, 0, 0).add(KeyboardModel.keysOffset);
      keys.push(
        <BlackKey key={i} keyIndex={i} cuboidProps={{ position: pos }} />,
      );
    }
  }
  return keys;
};
