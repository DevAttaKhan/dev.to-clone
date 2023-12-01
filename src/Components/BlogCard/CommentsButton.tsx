import { IconChatBubble } from "@/Assets/icons";
import React from "react";

type Props = {
  comments?: number;
};

export const CommentsButton = ({ comments = 55 }: Props) => {
  return (
    <div className=" flex  items-center text-[#3D3D3D] text-sm ms-1">
      <IconChatBubble />
      {comments} comments
    </div>
  );
};
