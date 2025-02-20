"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const Marquee = ({
  children,
  reverse,
  pauseOnHover = false,
  className,
  ...props
}: {
  children?: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div
      className={cn("relative flex w-full overflow-hidden", className)}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
};