import * as Icon from "@mui/icons-material";
import React from "react";

export default function DynamicIcon({ iconName }) {
  const DynamicIcon = Icon[iconName];
  return (
    <DynamicIcon size={10} className="icon mr-5 scale-150 text-gray-300" />
  );
}
