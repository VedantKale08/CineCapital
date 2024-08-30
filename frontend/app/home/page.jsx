import Feed from "@/components/home/Feed";
import Sidebar from "@/components/home/Sidebar";
import { isLoggedIn } from "@/lib/isLoggedIn";
import React from "react";

function Page() {
  isLoggedIn();
  return (
    <div className="bg-main">
      <div className="relative min-h-screen">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default Page;
