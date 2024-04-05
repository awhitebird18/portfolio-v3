import Logo from "@/assets/Logo.png";
import NavTypes from "@/types/navTypes";
import navItems from "@/data/navItems";
import { useScrolled } from "@/hooks/useScrolled";
import { NavItem } from "@/types/navItem";
import { IconMenu2 } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      <nav className="flex items-center justify-between md:justify-start gap-6 w-full container h-full">
        <div
          onClick={() => handleNavigate(NavTypes.HOME)}
          className="h-10 mt-0.5 cursor-pointer flex-shrink-0"
        >
          <img src={Logo} className="h-full m-0 " />
        </div>
        <div className="hidden md:flex gap-6 items-center prose dark:prose-invert">
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
        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IconMenu2 size={32} className="text-[#9FA2AA]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#1C1D2033] border-[#282F38] p-2 w-36 rounded-xl backdrop-blur-md"
            >
              {navItems.map((navItem: NavItem) => (
                <DropdownMenuItem
                  key={navItem.id}
                  onClick={() => handleNavigate(navItem.id)}
                  className={`list-none p-1 text-lg text-secondary h-10 px-3 rounded-lg cursor-pointer dark:hover:bg-slate-500/20 ${
                    currentSection === navItem.id
                      ? "custom-underline text-white"
                      : "!text-[#9FA2AA]"
                  }`}
                >
                  {navItem.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
