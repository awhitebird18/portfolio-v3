import React from "react";
import AnimatedPath from "./AnimatedPath";
import icons from "@/data/icons";

enum IconSet {
  FRONTEND = "Frontend Skills",
  BACKEND = "Backend Skills",
  TOOLING = "Tooling",
}

interface TechTreeProps {
  iconFilter: IconSet;
}

const TechTree: React.FC<TechTreeProps> = ({ iconFilter }: TechTreeProps) => {
  const sortedIcons = icons.sort((a, b) => {
    const aIsActive = a.type === iconFilter;
    const bIsActive = b.type === iconFilter;

    return aIsActive === bIsActive ? 0 : aIsActive ? 1 : -1;
  });

  return (
    <svg
      width="1200"
      height="600"
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-10 top-0 left-0"
    >
      <defs>
        <clipPath id="clip0_1458_195049">
          <rect width="1200" height="600" fill="white" />
        </clipPath>
        {/* Frontend */}
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="pink-pulse-1"
          x1="0"
          y1="0"
          x2="0%"
          y2="100%"
        >
          <stop stop-color="#c084fc" stop-opacity="0"></stop>
          <stop offset="0.2" stop-color="#c084fc"></stop>
          <stop offset="0.9" stop-color="#60a5fa"></stop>
          <stop offset="1" stop-color="#60a5fa" stop-opacity="0"></stop>
        </linearGradient>
        {/* Tooling */}
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="orange-pulse-1"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
        >
          <stop stop-color="#f97316" stop-opacity="1"></stop>
          <stop offset="0.1" stop-color="#f97316"></stop>
          <stop offset="0.5" stop-color="#d946ef"></stop>
          <stop offset="1" stop-color="#d946ef" stop-opacity="1"></stop>
        </linearGradient>
        {/* Backend */}
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="green-pulse-1"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
        >
          <stop stop-color="#10b981" stop-opacity="1"></stop>
          <stop offset="0.1" stop-color="#10b981"></stop>
          <stop offset="0.5" stop-color="#0ea5e9"></stop>
          <stop offset="1" stop-color="#0ea5e9" stop-opacity="1"></stop>
        </linearGradient>
      </defs>
      <g clip-path="url(#clip0_1458_195049)">
        {sortedIcons.map((icon) => {
          console.log(icon.type === iconFilter, icon.type, iconFilter);

          return (
            <AnimatedPath
              key={`${icon.id}-${iconFilter}`}
              data-icon={icon.id}
              d={icon.d}
              strokeUrl={icon.strokeUrl}
              isVisible={icon.type === iconFilter}
            />
          );
        })}
      </g>
    </svg>
  );
};

export default TechTree;
