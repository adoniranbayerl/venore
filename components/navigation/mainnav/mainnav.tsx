"use client";
import { useEffect, useState } from "react";
import { getMainNav } from "./mainnav.data";
import { Navitems } from "@/types/navigation";
import { NavItem } from "./mainnav.item";
/* Hooks */
import { useStore } from "@/hooks/useStore";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";

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
