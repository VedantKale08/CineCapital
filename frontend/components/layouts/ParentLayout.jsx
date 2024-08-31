"use client";
import React from "react";
import Sidebar from "../home/Sidebar";

const ParentLayout = ({ children }) => {
  return (
    <div className="ml-[109px] h-full px-4 py-8 flex gap-12">
      <Sidebar />
      {children}
    </div>
  );
};

export default ParentLayout;
