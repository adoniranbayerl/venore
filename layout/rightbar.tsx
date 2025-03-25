import { cn } from "@/lib/utils";

/* Configuração */
import { rightbarConfig } from "./layout.config";

export default function RightBar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <aside
      role="rightbar"
      id="rightbar"
      className={cn(
        "after-top-pt global-px-full",
        rightbarConfig.fixed && "rightbar-full"
      )}
    >
      {children}
    </aside>
  );
}
