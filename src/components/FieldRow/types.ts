export interface FieldRowProps {
  rowData: Array<number>;
  value?: ShotCoords;
  enemy?: boolean;
}

export type ShotCoords = number | string | undefined;
export interface ShotData {
  [key: string]: ShotCoords;
}
