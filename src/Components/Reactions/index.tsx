import React from "react";
import { EMOJIS } from "@/data/Emojis";

type Props = {
  reactions?: number;
};

export const Reactions = ({ reactions = 174 }: Props) => {
  return (
    <div className="flex items-center">
      <div className="flex">
        {EMOJIS.map((el, i) => (
          <span
            key={el.id}
            style={{ zIndex: el.id }}
            className=" relative ms-[-10px] bg-[#F5F5F5] rounded-full w-7 h-7 border-4 border-white grid place-items-center"
          >
            {el.icon}
          </span>
        ))}
      </div>
      <p className="text-[#3D3D3D] text-sm ms-1">{reactions} reactions</p>
    </div>
  );
};
