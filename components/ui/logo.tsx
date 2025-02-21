"use client";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="font-bold text-3xl bg-gradient-to-r from-[#3498db] to-[#2980b9] bg-clip-text text-transparent transform transition-transform duration-300">
        P
      </div>
    </div>
  );
}