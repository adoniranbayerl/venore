import { cn } from "@/lib/utils";

/* Configuração */
import { compositionConfig, leftbarConfig } from "./layout.config";

/* Hooks */
import { useStore } from "@/hooks/useStore";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";

/* Componentes */
import { SidebarButtonToggle } from "@/components/sidebar-button-toggle";

export default function LeftBar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isExpanded = useStore(useSidebarToggle, (state) => state);
  return (
    <aside
      role="leftbar"
      id="leftbar"
      aria-label="Barra lateral"
      className={cn(
        "sidebar-mobile print:hidden",
        isExpanded?.isExpanded ? "leftbar-expanded" : "leftbar-collapsed",
        compositionConfig.boxed ? "leftbar-boxed" : "after-top-pt",
        leftbarConfig.fixed && "leftbar-full"
      )}
    >
      {children}
      <div className="hidden justify-center lg:flex">
        <SidebarButtonToggle
          isExpanded={isExpanded?.isExpanded}
          setIsExpanded={isExpanded?.setIsExpanded}
        />
      </div>
    </aside>
  );
}
