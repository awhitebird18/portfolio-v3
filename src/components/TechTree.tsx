import { Icon } from "@/types/Icon";
import AnimatedPath from "./AnimatedPath";
import { IconSet } from "@/types/IconSet";

interface TechTreeProps {
  iconFilter: IconSet;
  scaleFactor: number;
  icons: Icon[];
}

const TechTree: React.FC<TechTreeProps> = ({ icons, iconFilter, scaleFactor }: TechTreeProps) => {
  const width = 1216 * scaleFactor;
  const height = width / 2;

  return (
    <div className="w-full h-full">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
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
            <stop stopColor="#c084fc" stopOpacity="0"></stop>
            <stop offset="0.2" stopColor="#c084fc"></stop>
            <stop offset="0.9" stopColor="#60a5fa"></stop>
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0"></stop>
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
            <stop stopColor="#f97316" stopOpacity="1"></stop>
            <stop offset="0.1" stopColor="#f97316"></stop>
            <stop offset="0.5" stopColor="#d946ef"></stop>
            <stop offset="1" stopColor="#d946ef" stopOpacity="1"></stop>
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
            <stop stopColor="#10b981" stopOpacity="1"></stop>
            <stop offset="0.1" stopColor="#10b981"></stop>
            <stop offset="0.5" stopColor="#0ea5e9"></stop>
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <g clipPath="url(#clip0_1458_195049)">
          {icons.map((icon) => {
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
    </div>
  );
};

export default TechTree;
