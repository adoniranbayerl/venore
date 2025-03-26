import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/useStore";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";

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
