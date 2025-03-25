import { cn } from "@/lib/utils";

/* Hooks */
import { useStore } from "@/hooks/useStore";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";

/* Navegação */
import NavigationBreadcrumbs from "@/components/navigation/breadcrumbs";

export default function Main({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isExpanded = useStore(useSidebarToggle, (state) => state);
  return (
    <main
      id="main-content"
      className={cn(
        "after-top-pt-mobile global-px-full",
        isExpanded?.isExpanded ? "main-expanded" : "main-collapsed"
      )}
    >
      <NavigationBreadcrumbs />
      <div>{children}</div>
    </main>
  );
}
