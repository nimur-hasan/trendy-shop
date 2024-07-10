import React from "react";

export default function SectionHeader({ children }: {children: React.ReactNode}) {
  return (
    <div>
      <h2 className="text-lg font-medium text-appBlack p-4 border-b border-b-appBorder">
        {children}
      </h2>
    </div>
  );
}
