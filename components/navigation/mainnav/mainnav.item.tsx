import { Button } from "@/components/ui/button";
import * as icons from "react-icons/md";
import Link from "next/link";
import { useCompareRoute } from "@/hooks/useCompareRoute";
import { cn } from "@/lib/utils";

export function NavItem({
  label,
  href,
  isExpanded,
  icon,
}: {
  label: string;
  href: string;
  isExpanded: boolean | undefined;
  icon: string | null | undefined;
}) {
  const IconComponent = icons[icon as keyof typeof icons];
  const activeRoute = useCompareRoute(href);

  return (
    <Link key={label} href={href}>
      <Button className={cn("mainmenu-button", activeRoute ? "" : "")}>
        {IconComponent ? <IconComponent className="h-6 w-6" /> : null}

        <span
          className={cn(
            "text-[0.6rem] transition-opacity duration-200 lg:inline lg:text-sm",
            isExpanded ? "lg:opacity-100" : "lg:opacity-0"
          )}
        >
          {label}
        </span>
      </Button>
    </Link>
  );
}
