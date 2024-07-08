import React from "react";
import { Button } from "../ui/button";
import Google from "@/assets/icons/google";
import Github from "@/assets/icons/github";

export default function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button variant="outline" className="w-full" size="lg" onClick={() => {}}>
        <Google className="h-5 w-5" />
      </Button>
      <Button variant="outline" className="w-full" size="lg" onClick={() => {}}>
        <Github className="h-5 w-5" />
      </Button>
    </div>
  );
}
