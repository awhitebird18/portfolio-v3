import React, { useEffect, useRef, useState } from "react";

interface AnimatedPathProps {
  d: string;
  strokeUrl: string;
  strokeWidth?: number;
  duration?: string;
  isVisible: boolean;
}

const AnimatedPath: React.FC<AnimatedPathProps> = ({
  d,
  strokeUrl,
  strokeWidth = 2,
  duration = "1s",
  isVisible,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState<number>(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  const pathStyle = {
    "--animation-duration": duration,
    "--path-length": pathLength,
    animation: `dash ${duration} ease forwards`,
    strokeDasharray: `${pathLength}`,
    strokeDashoffset: `${pathLength}`,
  };

  return (
    <g>
      <path d={d} stroke="#32323E" />
      {isVisible && (
        <path
          ref={pathRef}
          d={d}
          stroke={strokeUrl}
          strokeWidth={strokeWidth}
          style={pathStyle as React.CSSProperties}
        />
      )}
    </g>
  );
};

export default AnimatedPath;
