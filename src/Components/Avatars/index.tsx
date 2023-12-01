import Image from "next/image";
import avi from "@/Assets/images/avatar.jpeg.png";

export const BlogCardAvatar = () => {
  return (
    <div className="flex gap-2">
      <div className="rounded-full overflow-hidden w-8 h-8 ">
        <Image src={avi} width={32} height={32} alt="avatar" />
      </div>
      <div>
        <p className="text-[#3D3D3D] text-[13px] font-bold mb-1">
          Mateusz Charytoniuk
        </p>
        <span className="text-[#525252] text-xs">Nov 16</span>
      </div>
    </div>
  );
};
