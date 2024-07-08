"use client";

import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { CodesandboxIcon, LayoutDashboard, LucideLogOut, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  label: string;
  icon: any;
  href: string;
  isActive?: boolean;
}

const menuItems: MenuItemProps[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Product",
    icon: CodesandboxIcon,
    href: "/product",
  },
  {
    label: "Order",
    icon: ShoppingCart,
    href: "/order",
    },
  
];

const ProfileHeader = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-xl font-semibold">{children}</h1>;
};

const MenuItem = (menu: MenuItemProps) => (
  <Link href={menu.href}>
    <div
      className={cn(
        "flex justify-start items-center gap-3 px-6 py-4",
        menu.isActive
          ? "border-l-4 border-l-appPrimary bg-appBorder text-appBlack"
          : "border-l-4 border-l-appDark text-appMuted"
      )}
    >
      <menu.icon
        className={cn(
          "max-w-4 max-h-4",
          menu.isActive ? "text-appPrimary" : "text-appMuted"
        )}
      />
      <p className="text-sm">{menu.label}</p>
    </div>
  </Link>
);

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="hidden min-h-screen md:flex flex-col w-72 bg-white border-r border-r-appBorder">
      {/* Sidebar Header */}
      <div className="h-[180px] w-full flex flex-col justify-center items-center">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/avatar.png" />
        </Avatar>
        <div className="mt-4">
          <ProfileHeader>Denis Holland</ProfileHeader>
          <p className="text-sm text-center">38.00$</p>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="flex-grow flex flex-col items-stretch bg-appDark text-white">
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.href}
            label={menuItem.label}
            icon={menuItem.icon}
            href={menuItem.href}
            isActive={pathname === menuItem.href}
          />
        ))}
      </div>

      {/* Bottom section */}
      <div className="flex flex-col justify-stretch cursor-pointer">
        <div
          className={cn("flex justify-between items-center gap-3 px-6 py-4", "")}
        >
          <p className="text-sm">Logout</p>
          <LucideLogOut className={cn("w-4", "text-red-400")} />
        </div>
      </div>
    </div>
  );
}
