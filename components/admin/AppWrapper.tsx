import React from "react";
import Sidebar from "./sidebar";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-appNeutral min-h-screen">
      <div className="flex justify-start">
        <Sidebar />
        <section>{children}</section>
      </div>
    </div>
  );
}
