import { cn } from "@/lib/utils";

/* Hooks */
import { useStore } from "@/hooks/useStore";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";

/* Navegação */

export default function Footer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isExpanded = useStore(useSidebarToggle, (state) => state);
  return (
    <footer
      id="footer-content"
      className={cn(
        "print:hidden",
        isExpanded?.isExpanded ? "footer-expanded" : "footer-collapsed"
      )}
    >
      {children}
    </footer>
  );
}
