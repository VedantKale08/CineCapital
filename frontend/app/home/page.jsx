import Sidebar from "@/components/home/Sidebar";
import { isLoggedIn } from "@/lib/isLoggedIn";
import React from "react";

function Page() {
  isLoggedIn();
  return (
    <div className="bg-main">
      <Sidebar />
    </div>
  );
}

export default Page;
