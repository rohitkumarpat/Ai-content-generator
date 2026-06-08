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
    {
      name: "home",
      icon: HomeIcon,
      path: "/dashboard",
    },
    {
      name: "history",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
    {
      name: "help",
      icon: HelpCircle,
      path: "/dashboard/help",
    },
  ];

  const path = usePathname();

  return (
    <div className="bg-white border shadow-md md:h-screen flex flex-col">
      {/* Logo - Desktop Only */}
      <div className="hidden md:flex justify-center items-center mb-10 border-b-2 pb-4 pt-5">
        <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Content Generation
        </h1>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b bg-white">
        <div className="flex gap-2 overflow-x-auto p-3">
          {Menulist.map((menu, index) => {
            const Icon = menu.icon;

            return (
              <Link
                key={index}
                href={menu.path}
                className={`flex items-center gap-2 whitespace-nowrap px-3 py-2 rounded-lg transition ${path === menu.path
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-blue-100"
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="capitalize text-sm">
                  {menu.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col gap-4 flex-1 px-5">
        {Menulist.map((menu, index) => {
          const Icon = menu.icon;

          return (
            <Link
              key={index}
              href={menu.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition ${path === menu.path
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-400 hover:text-white"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span className="capitalize">
                {menu.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Section Desktop */}
      <div className="hidden md:block absolute bottom-5 left-0 w-full px-5 space-y-4">
        <UsageTrack />

        <SignOutButton redirectUrl="/">
          <button className="w-full flex items-center gap-2 p-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </SignOutButton>
      </div>

      {/* Mobile Logout */}
      <div className="md:hidden p-3 border-t">
        <SignOutButton redirectUrl="/">
          <button className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}

export default SideNav;