export interface FieldRowProps {
  rowData: Array<number>;
  value?: ShotCoords;
  enemy?: boolean;
}

export type DefShotCoords = number;
export type ShotCoords = number | string | undefined;

export interface DefShotData {
  [key: string]: DefShotCoords;
}
export interface ShotData {
  [key: string]: ShotCoords;
}
