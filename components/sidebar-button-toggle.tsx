import { GoChevronLeft } from "react-icons/go";
import { cn } from "@/lib/utils";

export function SidebarButtonToggle({
  isExpanded,
  setIsExpanded,
  className,
  invisible,
}: {
  isExpanded: boolean | undefined;
  setIsExpanded?: () => void;
  className?: string;
  invisible?: string;
}) {
  return (
    <div
      id="sidebar-toggle"
      onClick={() => setIsExpanded?.()}
      className={cn(
        invisible,
        isExpanded ? "sidebar-toggle-expanded" : "sidebar-toggle-collapsed"
      )}
    >
      <GoChevronLeft
        className={cn(
          "transition-transform ease-in-out duration-300",
          isExpanded === false ? "rotate-180" : "rotate-0",
          className
        )}
      />
    </div>
  );
}
