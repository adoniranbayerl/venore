"use client";
import { useEffect, useState } from "react";
import { getUserNav } from "./usernav.data";
import Link from "next/link";
import { MenubarItem } from "@/components/ui/menubar";
import { Navitems } from "@/types/navigation";
export function UserNav() {
  const [items, setItems] = useState<Navitems[] | undefined>(undefined);

  useEffect(() => {
    async function getItems() {
      const items = await getUserNav();
      setItems(items);
    }
    getItems();
  }, []);

  if (items === undefined || items.length <= 0) return null;

  return (
    <>
      {items.map((item) => (
        <Link key={item.label} href={item.href}>
          <MenubarItem className="cursor-pointer justify-between">
            {item.label}
          </MenubarItem>
        </Link>
      ))}
    </>
  );
}
