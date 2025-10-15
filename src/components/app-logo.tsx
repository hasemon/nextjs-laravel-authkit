import React from "react";
import { cn } from "@/lib/utils";
// import Image from "next/image";


interface LogoProps {
  className?: string;
}

export function AppLogo({ className }: LogoProps) {
  return (
    <div
      className={cn("flex items-center gap-1 sm:gap-2 w-fit h-8", className)}
    >
      {/* <Image
        src={"/app-logo.png"}
        alt="logo"
        height={40}
        width={40}
        className="object-cover h-10"
        priority
      /> */}

      <div className="flex justify-center items-center gap-0">
        <h1 className="uppercase text-sm md:text-lg font-bold text-primary leading-tight">
          {process.env.NEXT_PUBLIC_APP_NAME || "Next Laravel Auth Kit"}
        </h1>
      </div>
    </div>
  );
}
