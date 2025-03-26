import { cn } from "@/lib/utils";
import { compositionConfig, headerConfig } from "./layout.config";

export default function Header({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <header
      role="header"
      id={"header"}
      aria-label="Barra superior"
      className={cn(
        headerConfig.fixed
          ? !compositionConfig.boxed
            ? "fixed top-0 global-px-full"
            : "global-px-full"
          : "",
        compositionConfig.boxed ? "header-boxed" : "header-full"
      )}
    >
      {children}
    </header>
  );
}
