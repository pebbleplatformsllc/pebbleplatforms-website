"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Image
        src="/images/no-loafing.png"
        alt="No Loafing"
        width={32}
        height={32}
        className="object-contain transition-transform duration-300"
      />
    </div>
  );
}