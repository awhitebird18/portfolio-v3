import { Icon } from "../types/Icon";
import { scalePathSegments } from "./scalePathSegments";

export default function (icons: Icon[], scaleFactor: number) {
  return icons.map((icon: Icon) => ({
    ...icon,
    d: scalePathSegments(icon.segments, scaleFactor),
    x: icon.x * scaleFactor,
    y: icon.y * scaleFactor,
  }));
}
