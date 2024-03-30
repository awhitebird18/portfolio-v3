import { NavItem } from "@/types/navItem";
import NavTypes from "@/types/navTypes";

const navItems = <NavItem[]>[
  { id: NavTypes.HOME, title: "Home" },
  { id: NavTypes.PROFILE, title: "Profile" },
  { id: NavTypes.TECH, title: "Tech" },
  { id: NavTypes.PROJECTS, title: "Projects" },
  { id: NavTypes.RESUME, title: "Resume" },
  { id: NavTypes.CONTACT, title: "Contact" },
];

export default navItems;
