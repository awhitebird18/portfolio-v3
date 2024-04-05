import { IconSet } from "./IconSet";

export type Icon = {
  id: string;
  title: string;
  icon: string;
  type: IconSet;
  x: number;
  y: number;
  d: string;
  strokeUrl: string;
  segments: { command: string; value: string }[];
};
