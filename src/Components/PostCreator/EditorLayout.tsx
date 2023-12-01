import { IconGear } from "@/Assets/icons";
import React from "react";
import { CoverUploader } from "./CoverUploader";

export const EditorLayout = () => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const box = e.currentTarget;
    box.style.height = `${box.scrollHeight}px`;
  };
  return (
    <div className="mx-auto max-w-[800px]">
      <div className="EDITOR h-[93vh] flex flex-col ">
        <div className="bg-white h-full">
          <CoverUploader />
          <div className=" px-8">
            <textarea
              placeholder="New Post Title Here"
              className="BLOG_TITLE text-[48px] font-extrabold outline-none mt-5
              w-full max-h-[300px]
            "
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center gap-4  py-8">
          <button className="py-2 px-4 text-sm text-white bg-[#3B49DF] rounded">
            Publish
          </button>
          <button className="button-unstyled text-[#404040] text-sm p-2 transition hover:bg-[#3b49df1a] rounded">
            Save Draft
          </button>
          <button className="button-unstyled text-[#404040] flex items-center gap-4 text-sm p-2 transition hover:bg-[#3b49df1a] rounded">
            <IconGear /> Revert new changes
          </button>
        </div>
      </div>
    </div>
  );
};
