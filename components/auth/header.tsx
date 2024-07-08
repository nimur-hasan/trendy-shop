import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

interface HeaderProps {
  label: string;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Header({ label }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", poppins.className)}>
        🔐 Auth
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
