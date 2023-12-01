import React from "react";
import { useSession } from "next-auth/react";
import MainLayout from "@/Components/Layouts/MainLayout";
import { BlogList, AssideLeft, AssideRight } from "@/Components";

export default function Home() {
  const session = useSession();

  return (
    <div className="HOME container pt-4">
      <div>
        <AssideLeft />
      </div>
      <div>
        <BlogList />
      </div>
      <div>
        <AssideRight />
      </div>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};
