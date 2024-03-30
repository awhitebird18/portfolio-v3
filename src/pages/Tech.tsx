import { useState } from "react";
import Header from "@/layout/Header";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import icons from "@/data/icons";
import { IconSet } from "@/types/IconSet";
import TechTree from "@/components/TechTree";
import { Button } from "@/components/ui/button";
import DataConnectors from "@/components/DataConnectors";
import Icon from "@/components/Icon";

const iconSetOrder = [IconSet.FRONTEND, IconSet.BACKEND, IconSet.TOOLING];

const Tech = () => {
  const [iconFilter, setIconFilter] = useState<IconSet>(IconSet.FRONTEND);

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

  return (
    <div className="w-full mx-auto flex flex-col container px-0">
      <Header title="Tech Stack." subtitle="My development toolkit to get the job done." />

      <div className="flex items-center justify-center gap-4 h-[600px] w-[1200px] relative mx-auto">
        {icons.map((icon) => (
          <Icon key={icon.id} icon={icon} isActive={icon.type === iconFilter} />
        ))}

        <div className="relative">
          <DataConnectors />

          <div className="bg-[#2A2D33] spotlight text-2xl gap-2 z-20 h-[70px] w-[300px] rounded-lg inner-outer-shadow shadow-icon flex items-center justify-between p-2 relative prose dark:prose-invert">
            <Button
              onClick={handleClickBack}
              variant="ghost"
              size="icon"
              className="shadow-none p-0 h-9 w-9 flex-shrink-0"
            >
              <IconChevronLeft size={28} />
            </Button>

            {iconFilter}

            <Button
              onClick={handleClickNext}
              variant="ghost"
              size="icon"
              className="shadow-none p-0 h-9 w-9 flex-shrink-0"
            >
              <IconChevronRight size={28} />
            </Button>
          </div>
        </div>
        <TechTree iconFilter={iconFilter} />
      </div>
    </div>
  );
};

export default Tech;
