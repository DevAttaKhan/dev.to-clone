import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
};

export const DiscussionList = ({ title }: Props) => {
  return (
    <div className="rounded shadow-blog-card  text-[#404040] bg-white mb-2">
      <div className=" border-b border-[##F5F5F5] p-4">
        <p className="text-xl font-bold">#{title || "discuss"}</p>
      </div>

      <div className=" border-b border-[##F5F5F5] p-4">
        <Link href="#" className="text-base block hover:text-[#2f3ab2]">
          What Can We Learn from Billionaires & Icons?
        </Link>
        <span className="text-[#717171] text-sm">5 comments</span>
      </div>

      <div className=" border-b border-[##F5F5F5] p-4">
        <Link href="#" className="text-base block hover:text-[#2f3ab2]">
          What was your win this week?
        </Link>
        <span className="text-[#717171] text-sm">5 comments</span>
      </div>

      <div className=" border-b border-[##F5F5F5] p-4">
        <Link href="#" className="text-base block hover:text-[#2f3ab2]">
          Sloans Inbox: How do you find a mentor?
        </Link>
        <span className="text-[#717171] text-sm">5 comments</span>
      </div>
      <div className=" border-b border-[##F5F5F5] p-4">
        <Link href="#" className="text-base block hover:text-[#2f3ab2]">
          Discussion of the Week - v11
        </Link>
        <span className="text-[#717171] text-sm">5 comments</span>
      </div>
    </div>
  );
};
