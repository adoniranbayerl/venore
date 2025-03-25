"use client";
import { useEffect, useState } from "react";
import { getMainNav } from "./mainnav.data";
import Link from "next/link";
import { Navitems } from "@/types/navigation";
import { Button } from "@/components/ui/button";
import * as icons from "react-icons/md";

/* Hooks */
import { useStore } from "@/hooks/useStore";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";
import { useCompareRoute } from "@/hooks/useCompareRoute";
import { cn } from "@/lib/utils";

export function MainNav() {
  const [items, setItems] = useState<Navitems[] | undefined>(undefined);
  const barState = useStore(useSidebarToggle, (state) => state);
  const isExpanded = barState?.isExpanded;

  useEffect(() => {
    async function getItems() {
      const items = await getMainNav();
      setItems(items);
    }
    getItems();
  }, []);

  if (items === undefined || items.length <= 0) return null;
  return (
    <>
      {items.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          href={item.href}
          icon={item.icon}
          isExpanded={isExpanded}
        />
      ))}
    </>
  );
}

function NavItem({
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
