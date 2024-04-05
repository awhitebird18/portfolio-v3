import { useEffect, useRef, useState } from "react";
import Header from "@/layout/Header";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { IconSet } from "@/types/IconSet";
import TechTree from "@/components/TechTree";
import { Button } from "@/components/ui/button";
import DataConnectors from "@/components/DataConnectors";
import Icon from "@/components/Icon";
import icons from "@/data/icons";
import convertIconData from "@/lib/convertIconData";

const iconSetOrder = [IconSet.FRONTEND, IconSet.BACKEND, IconSet.TOOLING];

const Tech = () => {
  const [iconFilter, setIconFilter] = useState<IconSet>(IconSet.FRONTEND);
  const containerRef = useRef<HTMLDivElement>(null);

  // State to hold the width of the container
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    // Function to update the width state
    const updateWidth = () => {
      const width = containerRef.current?.offsetWidth ?? 0;
      setContainerWidth(width);
    };

    // Call updateWidth on mount to get the initial width
    updateWidth();

    // Add event listener to update width on window resize
    window.addEventListener("resize", updateWidth);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleClickBack = () => {
    const currentIndex = iconSetOrder.indexOf(iconFilter);
    const previousIndex = (currentIndex - 1 + iconSetOrder.length) % iconSetOrder.length;
    setIconFilter(iconSetOrder[previousIndex]);
  };

  const handleClickNext = () => {
    const currentIndex = iconSetOrder.indexOf(iconFilter);
    const nextIndex = (currentIndex + 1) % iconSetOrder.length;
    setIconFilter(iconSetOrder[nextIndex]);
  };

  const scaleFactor = containerWidth / 1216;

  const sortedIcons = icons.sort((a, b) => {
    const aIsActive = a.type === iconFilter;
    const bIsActive = b.type === iconFilter;

    return aIsActive === bIsActive ? 0 : aIsActive ? 1 : -1;
  });

  const convertedIcons = convertIconData(sortedIcons, scaleFactor);

  return (
    <div className="tech-container w-full mx-auto flex flex-col container px-0">
      <Header title="Tech Stack." subtitle="My development toolkit to get the job done." />

      <div
        ref={containerRef}
        className="flex items-center justify-center gap-4 w-full relative mx-auto h-full"
        style={{ aspectRatio: "2 / 1", width: "100%" }}
      >
        {convertedIcons.map((icon) => (
          <Icon
            key={`${icon.id}${iconFilter}`}
            icon={icon}
            scaleFactor={scaleFactor}
            isActive={icon.type === iconFilter}
          />
        ))}

        {/* CPU */}
        <div
          className="absolute z-50"
          style={{
            top: `calc(50% - ${4 * scaleFactor}px)`,
            left: `calc(50% - ${8 * scaleFactor}px)`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <DataConnectors scaleFactor={scaleFactor} />
          <div
            style={{
              height: `${scaleFactor * 70}px`,
              width: `${scaleFactor * 300}px`,
              gap: `${scaleFactor * 8}px`,
              fontSize: `${scaleFactor * 24}px`,
            }}
            className={`bg-[#2A2D33] spotlight text-2xl z-20 rounded-lg inner-outer-shadow shadow-icon flex items-center justify-between p-2 relative prose dark:prose-invert`}
          >
            <Button
              onClick={handleClickBack}
              variant="ghost"
              size="icon"
              className="shadow-none p-0 flex-shrink-0"
              style={{ width: `${36 * scaleFactor}px`, height: `${36 * scaleFactor}px` }}
            >
              <IconChevronLeft size={28} />
            </Button>

            {iconFilter}

            <Button
              onClick={handleClickNext}
              variant="ghost"
              size="icon"
              className="shadow-none p-0 flex-shrink-0"
              style={{ width: `${36 * scaleFactor}px`, height: `${36 * scaleFactor}px` }}
            >
              <IconChevronRight size={28} />
            </Button>
          </div>
        </div>
        <TechTree icons={convertedIcons} iconFilter={iconFilter} scaleFactor={scaleFactor} />
      </div>
    </div>
  );
};

export default Tech;
