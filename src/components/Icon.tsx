import { Icon as IconType } from "@/types/Icon";

const Icon = ({ icon, isActive }: { icon: IconType; isActive: boolean }) => {
  return (
    <div
      key={icon.id}
      className={` transition-opacity duration-500 bg-[#22242C] rounded-lg w-[80px] h-[80px] border border-[#282F38]  absolute ${
        isActive ? "opacity-90 delay-900" : "opacity-30"
      }`}
      style={{ top: icon.y, left: icon.x }}
    >
      <div
        className={`flex flex-col prose dark:prose-invert  items-center duration-300 delay-900 transition-all justify-center h-full ${
          isActive && "inner-outer-shadow shadow-icon"
        }`}
      >
        <img src={icon.icon} className="w-12 h-12 m-0" />
        <p className="m-0 leading-none text-xs">{icon.title}</p>
      </div>
    </div>
  );
};

export default Icon;
