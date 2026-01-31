"use client";

import React from "react";
import Image from "next/image";
import {
  FileClock,
  Settings,
  WalletCards,
  Home as HomeIcon,
  LogOut,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UsageTrack from "./UsageTrack";
import { SignOutButton } from "@clerk/nextjs";

function SideNav() {
  const Menulist = [
    { name: "home", icon: HomeIcon, path: "/dashboard" },
    { name: "history", icon: FileClock, path: "/dashboard/history" },
    { name: "billing", icon: WalletCards, path: "/dashboard/billing" },
    { name: "setting", icon: Settings, path: "/dashboard/setting" },
    { name: "help", icon: HelpCircle, path: "/dashboard/help" }

  ];

  const path = usePathname();

  return (
    <div className="h-screen relative border p-5 shadow-md flex flex-col">
      {/* Logo */}
      <div className="flex justify-center mb-10 border-b-2 pb-2">
        <Image src="/logo2.svg" alt="logo" width={140} height={140} />
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-4 flex-1">
        {Menulist.map((menu, index) => {
          const Icon = menu.icon;
          return (
            <Link
              key={index}
              href={menu.path}
              className={`flex items-center gap-2 p-2 rounded transition ${
                path === menu.path
                  ? "bg-blue-400 text-white"
                  : "hover:bg-blue-400 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="capitalize">{menu.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-5 left-0 w-full px-5 space-y-4">
        {/* Usage Tracker */}
        <UsageTrack />

        {/* Logout */}
        <SignOutButton redirectUrl="/">
          <button className="w-full flex items-center gap-2 p-2 rounded bg-red-500 text-white hover:bg-red-600 transition">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}

export default SideNav;
