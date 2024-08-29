import Register from "@/components/auth/Register";
import { isLoggedIn } from "@/lib/isLoggedIn";
import React from "react";

function Page() {
  isLoggedIn();
  return (
    <div>
      <Register />
    </div>
  );
}

export default Page;
