import React from "react";
import { SidebarItems } from "./data";
import Link from "next/link";

export const AssideLeft = () => {
  return (
    <div>
      {SidebarItems.map((el) => {
        return (
          <Link
            href="#"
            key={el.id}
            className="flex items-center gap-2 text-[#404040] text-sm px-1 py-2 rounded transition hover:bg-[#3b49df1a] "
          >
            {el.icon} {el.name}
          </Link>
        );
      })}
    </div>
  );
};
