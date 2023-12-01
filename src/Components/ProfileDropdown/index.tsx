import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import av from "@/Assets/images/avatar.jpeg.png";
import Link from "next/link";
import classNames from "classnames";

export const ProfileDropdown = () => {
  const ref = useRef<any>();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const out = (e: MouseEvent) => {
      if (ref.current && isActive && ref.current.contains(e.target as Node))
        return;
      setIsActive(false);
    };

    window.addEventListener("click", out);

    return () => window.removeEventListener("click", out);
  }, [isActive]);
  return (
    <div className="relative cursor-pointer" ref={ref}>
      <div
        className="AVATAR w-10 h-10 rounded-full  border-2 border-[#E5E5E5] "
        onClick={() => setIsActive(true)}
      >
        <Image src={av} alt="im" width={40} height={40} />
      </div>
      <div
        className={classNames(
          "DROPDOWN_CONTAINER p-2 rounded shadow-blog-card bg-white w-[250px] absolute right-0 top-11  ",
          { block: isActive, hidden: !isActive }
        )}
      >
        <div className="px-4 p-2 border-b border-[#D6D6D7]">
          <h6 className=" text-[#404040] font-bold">Atta</h6>
          <span className="text-[#717171] text-sm">@username</span>
        </div>
        <div className="border-b border-[#D6D6D7] py-1 mb-1 text-[#404040]">
          <Link
            href="#"
            className="block px-4 p-2 transition hover:bg-[#3b49df1a] rounded "
          >
            Dashbord
          </Link>
          <Link
            href="#"
            className="block px-4 p-2 transition hover:bg-[#3b49df1a] rounded "
          >
            Create Post
          </Link>
          <Link
            href="#"
            className="block px-4 p-2 transition hover:bg-[#3b49df1a] rounded "
          >
            Reading list
          </Link>
          <Link
            href="#"
            className="block px-4 p-2 transition hover:bg-[#3b49df1a] rounded "
          >
            Settings
          </Link>
        </div>
        <Link
          href="#"
          className="block px-4 p-2 transition hover:bg-[#3b49df1a] rounded "
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
};
