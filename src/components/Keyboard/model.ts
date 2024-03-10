import { Vector3 } from "three";
import colors from "../../utils/colors.ts";

export class KeyboardModel {
  private static _color: string = colors.red;
  static get keySize(): number {
    return 1;
  }
  static get keysAmount(): number {
    return 85;
  }
  static get color(): string {
    return this._color;
  }
  static set color(value: string) {
    this._color = value;
  }

  static get whiteKeysAmount(): number {
    const whiteIdx = [0, 2, 4, 5, 7, 9, 11];
    let count = 0;
    for (let i = 0; i < this.keysAmount; i++) {
      if (whiteIdx.includes(i % 12)) count++;
    }
    return count;
  }
  static get blackKeysAmount(): number {
    return this.keysAmount - this.whiteKeysAmount;
  }
  static get keysOffset(): Vector3 {
    return MainPanelModel.dims
      .clone()
      .sub(WhiteKeyModel.dims)
      .multiplyScalar(-0.5);
  }
}

export class WhiteKeyModel {
  static get color() {
    return colors.white;
  }
  static get dimX() {
    return KeyboardModel.keySize * 0.2;
  }
  static get dimY(): number {
    return KeyboardModel.keySize * 0.2;
  }
  static get dimZ(): number {
    return KeyboardModel.keySize;
  }
  static get dims(): Vector3 {
    return new Vector3(this.dimX, this.dimY, this.dimZ);
  }
  static get biasX(): number {
    return 0;
  }
  static get biasY(): number {
    return this.dimY;
  }
  static get biasZ(): number {
    return 0;
  }
  static get bias(): Vector3 {
    return new Vector3(this.biasX, this.biasY, this.biasZ);
  }
  static get keySpace(): number {
    return 0.01 * KeyboardModel.keySize;
  }
  static get keyDistance(): number {
    return this.dimX + this.keySpace;
  }
}

export class BlackKeyModel {
  static get color() {
    return colors.black;
  }
  static get dimX() {
    return 0.5 * WhiteKeyModel.dimX;
  }
  static get dimY(): number {
    return 0.5 * WhiteKeyModel.dimY;
  }
  static get dimZ(): number {
    return 0.65 * WhiteKeyModel.dimZ;
  }
  static get dims(): Vector3 {
    return new Vector3(this.dimX, this.dimY, this.dimZ);
  }
  static get biasX(): number {
    return 0;
  }
  static get biasY(): number {
    return 0.5 * (this.dimY + WhiteKeyModel.dimY) + WhiteKeyModel.biasY;
  }
  static get biasZ(): number {
    return -0.5 * (WhiteKeyModel.dimZ - this.dimZ);
  }
  static get bias(): Vector3 {
    return new Vector3(this.biasX, this.biasY, this.biasZ);
  }
}

export class MainPanelModel {
  static get color() {
    return KeyboardModel.color;
  }
  static get dimX() {
    return WhiteKeyModel.keyDistance * KeyboardModel.whiteKeysAmount;
  }
  static get dimY(): number {
    return WhiteKeyModel.dimY;
  }
  static get dimZ(): number {
    return WhiteKeyModel.dimZ * 1.05;
  }
  static get dims(): Vector3 {
    return new Vector3(this.dimX, this.dimY, this.dimZ);
  }
  static get biasX(): number {
    return 0;
  }
  static get biasY(): number {
    return 0;
  }
  static get biasZ(): number {
    return 0;
  }
  static get bias(): Vector3 {
    return new Vector3(this.biasX, this.biasY, this.biasZ);
  }
}

export class BackPanelModel {
  static get color() {
    return KeyboardModel.color;
  }
  static get dimX() {
    return MainPanelModel.dimX;
  }
  static get dimY(): number {
    return WhiteKeyModel.dimY + 1.2 * MainPanelModel.dimY;
  }
  static get dimZ(): number {
    return WhiteKeyModel.dimZ;
  }
  static get dims(): Vector3 {
    return new Vector3(this.dimX, this.dimY, this.dimZ);
  }
  static get biasX(): number {
    return 0;
  }
  static get biasY(): number {
    return 0.5 * (this.dimY - MainPanelModel.dimY);
  }
  static get biasZ(): number {
    return -0.5 * (this.dimZ + MainPanelModel.dimZ);
  }
  static get bias(): Vector3 {
    return new Vector3(this.biasX, this.biasY, this.biasZ);
  }
}

export class RightPanelModel {
  static get color() {
    return KeyboardModel.color;
  }
  static get dimX() {
    return WhiteKeyModel.dimX * 0.5;
  }
  static get dimY(): number {
    return BackPanelModel.dimY;
  }
  static get dimZ(): number {
    return BackPanelModel.dimZ + MainPanelModel.dimZ;
  }
  static get dims(): Vector3 {
    return new Vector3(this.dimX, this.dimY, this.dimZ);
  }
  static get biasX(): number {
    return 0.5 * (this.dimX + BackPanelModel.dimX);
  }
  static get biasY(): number {
    return 0.5 * (this.dimY - MainPanelModel.dimY);
  }
  static get biasZ(): number {
    return -0.5 * (this.dimZ - MainPanelModel.dimZ);
  }
  static get bias(): Vector3 {
    return new Vector3(this.biasX, this.biasY, this.biasZ);
  }
}

export class LeftPanelModel {
  static get color() {
    return KeyboardModel.color;
  }
  static get dimX() {
    return WhiteKeyModel.dimX * 5;
  }
  static get dimY(): number {
    return RightPanelModel.dimY;
  }
  static get dimZ(): number {
    return RightPanelModel.dimZ;
  }
  static get dims(): Vector3 {
    return new Vector3(this.dimX, this.dimY, this.dimZ);
  }
  static get biasX(): number {
    return -0.5 * (MainPanelModel.dimX + this.dimX);
  }
  static get biasY(): number {
    return RightPanelModel.biasY;
  }
  static get biasZ(): number {
    return RightPanelModel.biasZ;
  }
  static get bias(): Vector3 {
    return new Vector3(this.biasX, this.biasY, this.biasZ);
  }
}
