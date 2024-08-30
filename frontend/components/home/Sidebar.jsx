"use client";
import { userDetailsStore } from "@/store/userStore";
import {
  FolderKanbanIcon,
  HelpCircle,
  Home,
  Search,
  TrendingUp,
  UserCircle2Icon,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function Sidebar() {
  const userDetails = userDetailsStore((state) => state.userDetails);
  console.log("User details", userDetails);
  const navItems = [
    { id: 1, label: "Profile", icon: UserCircle2Icon, link: "" },
    { id: 2, label: "Search", icon: Search, link: "" },
    { id: 3, label: "Home", icon: Home, link: "" },
    { id: 4, label: "Portfolio", icon: FolderKanbanIcon, link: "" },
    { id: 5, label: "Trending", icon: TrendingUp, link: "" },
    { id: 6, label: "Help", icon: HelpCircle, link: "" },
  ];

  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    setActiveTab(3);
  }, []);

  return (
    <div className="flex flex-col h-screen w-fit fixed left-0 top-0 z-50">
      <p className="p-8 text-white">LOGO</p>
      <div className="flex-1 flex items-center">
        <ul className="flex flex-col gap-7 group">
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-6 py-2 px-6 cursor-pointer transition-all hover:scale-110 ${
                activeTab == item.id ? "text-white font-bold" : "text-gray-500"
              } hover:text-white hover:font-bold`}
            >
              <item.icon className="w-5" />
              <span className="opacity-0 -translate-x-6 transform group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-lg">
                {item.label}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
