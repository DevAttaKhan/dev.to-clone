import { IconDownload } from "@/Assets/icons";
import classNames from "classnames";
import Image from "next/image";
import React, { useRef, useState } from "react";

export const CoverUploader = () => {
  const [coverImage, setCoverImage] = useState<string | undefined>();
  const inputRef = useRef<any>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files) return;
    const file = e.target.files![0];
    const blob = URL.createObjectURL(file);
    setCoverImage(blob);
  };

  let content;

  if (!coverImage) {
    content = (
      <button
        className="button-unstyled flex flex-col items-center gap-1"
        onClick={() => inputRef.current.click()}
      >
        <span className="text-[#404040] ">
          <IconDownload />
        </span>
        <span className=" text-[#404040] text-xs">Add a Cover Image</span>
      </button>
    );
  } else {
    content = (
      <Image
        src={coverImage}
        alt="cover"
        width={806}
        height={80}
        objectFit="contain"
        className="h-full object-contain"
      />
    );
  }

  return (
    <div
      className={classNames("h-20 rounded border  place-items-center", {
        grid: !coverImage,
      })}
    >
      <input type="file" hidden onChange={handleChange} ref={inputRef} />
      {content}
    </div>
  );
};
