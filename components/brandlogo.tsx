"use client";
import Image from "next/image";
import { LoadingSpinner } from "@/components/ui/loadingspinner";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLightDarkLogo } from "@/hooks/useLightDarkLogo";

interface LogoProps {
  className?: string;
  w?: number;
  h?: number;
  defaultPath?: boolean;
}
export default function BrandLogo(LogoProps: LogoProps) {
  const { className, w, h, defaultPath } = LogoProps;
  const logoPath = useLightDarkLogo();

  if (!logoPath) {
    return (
      <div className="flex h-auto w-28 items-center justify-center">
        <LoadingSpinner />
      </div>
    ); // Fallback ou loader
  }

  return (
    <div>
      <Link href="/">
        <Image
          src={defaultPath ? "/logo.svg" : logoPath}
          alt="Logo"
          width={w || 0}
          height={h || 0}
          sizes="100vw"
          className={cn("transition-all duration-200 ease-in-out", className)}
          priority
        />
      </Link>
    </div>
  );
}
