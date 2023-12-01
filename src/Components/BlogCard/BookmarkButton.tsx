import { IconBookmark } from "@/Assets/icons";
import React from "react";

export const BookmarkButton = () => {
  return (
    <div className="flex items-center gap-4">
      <p className="text-[#3D3D3D] text-sm">5 min read</p>
      <IconBookmark />
    </div>
  );
};
