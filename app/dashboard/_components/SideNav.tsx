"use client"

import React from 'react';
import Image from 'next/image';
import { FileClock, Settings, WalletCards, Home as HomeIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideNav() {
  const Menulist = [
    { name: "home", icon: HomeIcon, path: "/dashboard" },
    { name: "history", icon: FileClock, path: "/dashboard/history" },
    { name: "billing", icon: WalletCards, path: "/dashboard/billing" },
    { name: "setting", icon: Settings, path: "/dashboard/setting" },
  ];

  const path = usePathname();

  return (
    <div className="h-screen border p-5 shadow-md flex flex-col">
      <div className="flex justify-center mb-10 border-b-2 pb-2">
        <Image src="/logo2.svg" alt="logo" width={140} height={140} />
      </div>

      <div className="flex flex-col gap-4">
        {Menulist.map((menu, index) => {
          const Icon = menu.icon;
          return (
            <Link
              key={index}
              href={menu.path}
              className={`flex items-center gap-2 p-2 rounded hover:bg-blue-400 ${
                path === menu.path ? "bg-blue-400" : ""
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="capitalize">{menu.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
