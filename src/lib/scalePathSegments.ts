type PathSegment = {
  command: string;
  value: string;
};

export function scalePathSegments(segments: PathSegment[], scaleFactor: number): string {
  // Scale a single value based on its type (x or y)
  const scaleValue = (value: number) => value * scaleFactor;

  // Process each segment and scale its values
  const scaledSegments = segments.map((segment) => {
    const { command, value } = segment;
    // Determine if the command works with x, y, or both
    const isXCommand = command === "H";
    const isYCommand = command === "V";
    // Split values into individual numbers
    const values = value.split(/\s+/).map(parseFloat);

    // Scale values appropriately
    const scaledValues = values.map((val) => {
      // For H and V commands, all values are of the same type (x or y respectively)
      if (isXCommand) return scaleValue(val);
      if (isYCommand) return scaleValue(val);
      // For commands like M and L, alternate between x and y values
      return scaleValue(val);
    });

    return `${command} ${scaledValues.join(" ")}`;
  });

  // Join the segments to form the scaled 'd' attribute
  return scaledSegments.join(" ");
}
