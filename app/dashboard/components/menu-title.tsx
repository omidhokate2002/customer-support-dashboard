import { PersonStandingIcon } from "lucide-react";
import React from "react";

export default function MenuTitle() {
  return (
    <h4 className="flex items-center">
      <PersonStandingIcon size={40} className="text-primary" />
      <span>SupportMe</span>
    </h4>
  );
}
