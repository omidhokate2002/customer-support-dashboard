"use client";
import { useState } from "react";
import { Tooltip, TooltipTrigger } from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";

type Props = {
  className?: string;
};

export default function LightDarkToggle({ className }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode((preValue) => !preValue);
            document.body.classList.toggle("dark");
          }}
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
