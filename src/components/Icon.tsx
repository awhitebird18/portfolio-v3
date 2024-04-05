import { Icon as IconType } from "@/types/Icon";
import { useEffect, useState } from "react";

const Icon = ({
  icon,
  isActive = false,
  scaleFactor,
}: {
  icon: IconType;
  isActive: boolean;
  scaleFactor: number;
}) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const iconWidth = `${scaleFactor * 80}px`;

  const imgWidth = `${scaleFactor * 48}px`;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationComplete(true);
    }, 900);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      key={icon.id}
      className={`icon-derp transition-opacity duration-500 bg-[#22242C] rounded-lg border border-[#282F38]  absolute ${
        isActive && animationComplete ? "opacity-100 " : "opacity-30"
      }`}
      style={{ top: icon.y, left: icon.x, width: iconWidth, aspectRatio: "1 / 1" }}
    >
      <div
        className={`flex flex-col prose dark:prose-invert  items-center duration-300 transition-all justify-center h-full ${
          isActive && "inner-outer-shadow shadow-icon"
        }`}
      >
        <img src={icon.icon} className={`m-0`} style={{ width: imgWidth, aspectRatio: "1 / 1" }} />
        <p className="m-0 leading-none text-xs" style={{ fontSize: `${12.5 * scaleFactor}px` }}>
          {icon.title}
        </p>
      </div>
    </div>
  );
};

export default Icon;
