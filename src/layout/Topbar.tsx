import Logo from "@/assets/Logo.png";
import NavTypes from "@/types/navTypes";
import navItems from "@/data/navItems";
import { useScrolled } from "@/hooks/useScrolled";
import { NavItem } from "@/types/navItem";

interface TopbarProps {
  handleNavigate: (id: NavTypes) => void;
  currentSection: NavTypes;
}

const Topbar = ({ handleNavigate, currentSection }: TopbarProps) => {
  const isScrolled = useScrolled();

  return (
    <div
      className={`fixed w-full h-20 z-50 ${
        isScrolled ? "bg-[#1C1D2033] backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center gap-6 w-full container h-full">
        <div onClick={() => handleNavigate(NavTypes.HOME)} className="h-10 mt-0.5 cursor-pointer">
          <img src={Logo} className="h-full m-0" />
        </div>
        <div className="flex gap-6 items-center prose dark:prose-invert">
          {navItems.map((navItem: NavItem) => (
            <div
              key={navItem.id}
              onClick={() => handleNavigate(navItem.id)}
              className={`list-none p-1 text-lg text-secondary m-0 cursor-pointer ${
                currentSection === navItem.id ? "custom-underline text-white" : "!text-[#9FA2AA]"
              }`}
            >
              {navItem.title}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
