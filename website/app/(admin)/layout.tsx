import AppWrapper from "@/components/admin/AppWrapper";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <AppWrapper>{children}</AppWrapper>;
}
