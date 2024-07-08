
import { Triangle, TriangleAlert } from "lucide-react";
import React from "react";

interface FormErrorProps {
  message?: string;
}

export default function FormError({ message }: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <TriangleAlert color="#EF4444" className="h-4 w-4" />
      {message}
    </div>
  );
}
