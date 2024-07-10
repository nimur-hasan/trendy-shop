import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export default function MediaLibHeader() {
  return (
    <div className="w-full flex justify-between">
      <h1 className="text-2xl font-semibold text-appBlack">Media Library</h1>
      <div className="flex items-center">
        <Button size="sm" className="text-sm flex gap-2">
          <Plus className="h-4 w-4" />
          Add new images
        </Button>
      </div>
    </div>
  );
}
