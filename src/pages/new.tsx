import logo from "@/Assets/images/logo.png";
import { EditorLayout } from "@/Components";
import Image from "next/image";

export default function CreatePostPage() {
  return (
    <>
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width="50" height="40" />
          <span className="text-sm text-[#171717]">Create Post</span>
        </div>

        <div className="flex items-center gap-2 ">
          <button className="button-unstyled text-[#404040] text-sm p-2 transition hover:bg-[#3b49df1a] rounded">
            Edit
          </button>
          <button className="button-unstyled text-[#404040] text-sm p-2 transition hover:bg-[#3b49df1a] rounded">
            Preiview
          </button>
        </div>
      </div>
      <EditorLayout />
    </>
  );
}
