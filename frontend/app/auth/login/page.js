import Login from "@/components/auth/Login";
import { isLoggedIn } from "@/lib/isLoggedIn";
import React from "react";

function Page() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default Page;
