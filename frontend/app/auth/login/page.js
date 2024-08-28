import Login from "@/components/auth/Login";
import { isLoggedIn } from "@/lib/isLoggedIn";
import React from "react";

function Page() {
  isLoggedIn();
  return (
    <div>
      <Login />
    </div>
  );
}

export default Page;
