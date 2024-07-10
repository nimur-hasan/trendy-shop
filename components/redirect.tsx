"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Redirect({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router.push(to); // Redirect to homepage when component mounts
    // return a cleanup function to unsubscribe from events or cancel any subscriptions
  });
  return null;
}
