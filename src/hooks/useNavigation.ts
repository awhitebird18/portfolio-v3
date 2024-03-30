import { useRef, useState, useCallback } from "react";
import NavTypes from "@/types/navTypes";

export function useNavigation() {
  const [current, setCurrent] = useState<NavTypes>(NavTypes.HOME);
  const refs = {
    [NavTypes.HOME]: useRef<HTMLDivElement>(null),
    [NavTypes.PROFILE]: useRef<HTMLDivElement>(null),
    [NavTypes.TECH]: useRef<HTMLDivElement>(null),
    [NavTypes.PROJECTS]: useRef<HTMLDivElement>(null),
    [NavTypes.RESUME]: useRef<HTMLDivElement>(null),
    [NavTypes.CONTACT]: useRef<HTMLDivElement>(null),
  };

  const handleNavigate = useCallback((id: NavTypes) => {
    refs[id].current?.scrollIntoView({ behavior: "smooth" });
    setCurrent(id);
  }, []);

  return { current, handleNavigate, refs };
}
