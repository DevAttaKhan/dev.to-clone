import logo from "@/Assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { ProfileDropdown, SearchControle } from "@/Components";
import { useSession } from "next-auth/react";

export const Header = () => {
  const { status } = useSession();
  return (
    <header className="bg-white shadow-header-shadow">
      <div className="container flex justify-between items-center py-2 ">
        <div className="left flex items-center gap-4">
          <Link href="/">
            <Image src={logo} alt="logo image" width={50} height={40} />
          </Link>
          <SearchControle />
        </div>
        <div className="right flex items-center gap-6">
          {status !== "authenticated" && (
            <>
              <Link
                href="/auth/login"
                className="button-unstyled text-neutral-600"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className=" border border-[#3B49DF] rounded bg-transparent px-4 py-2 text-[#3B49DF] hover:text-white hover:bg-[#3B49DF] font-medium"
              >
                Create account
              </Link>
            </>
          )}

          {status === "authenticated" && (
            <>
              <Link
                href="/new"
                className="border border-[#3B49DF] rounded bg-transparent px-4 py-2 text-[#3B49DF] hover:text-white hover:bg-[#3B49DF] font-medium"
              >
                Create Post
              </Link>
              <ProfileDropdown />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
