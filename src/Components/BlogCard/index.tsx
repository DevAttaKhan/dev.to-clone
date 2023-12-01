import React from "react";
import cover from "@/Assets/images/blog-cover.png";
import Image from "next/image";
import { BlogCardAvatar, Reactions } from "@/Components";
import { CommentsButton } from "./CommentsButton";
import { BookmarkButton } from "./BookmarkButton";

export const BlogCard = () => {
  return (
    <div className="BLOGCARD shadow-blog-card bg-white mb-2 ">
      <Image src={cover} alt="cover" width={650} height={273} />
      <div className="BLOGCARD_BODY pt-5 pb-8 pe-7">
        <div className="ms-5 mb-2">
          <BlogCardAvatar />
        </div>
        <div className="ms-[60px]">
          <h4 className="text-[#171717] font-bold text-2xl mb-[10px]">
            To Junor Developers
          </h4>
          <div className="flex gap-3 mb-6">
            {["programming", "beginners", "career", "productivity"].map(
              (el) => {
                return (
                  <span
                    className="text-xs text-[#404040] rounded hover:bg-[#1717170d] p-1 cursor-pointer hover:shadow-sharp transition"
                    key={el}
                  >
                    # {el}
                  </span>
                );
              }
            )}
          </div>
          <div className="flex items-center gap-4 w-full justify-between">
            <div className="flex items-center gap-4">
              <Reactions />
              <CommentsButton />
            </div>
            <BookmarkButton />
          </div>
        </div>
      </div>
    </div>
  );
};
