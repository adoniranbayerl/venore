/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { getSitemap } from "./sitemap.data";
import Link from "next/link";
import { Navitems } from "@/types/navigation";

export function SiteMap() {
  const [items, setItems] = useState<Navitems[] | undefined>(undefined);
  useEffect(() => {
    async function getItems() {
      const items = await getSitemap();
      setItems(items);
    }
    getItems();
  }, []);

  if (items === undefined || items.length <= 0) return null;

  const groupedItems = items.reduce((acc, item) => {
    const sectionname = item.sectionname || "default";
    if (!acc[sectionname]) {
      acc[sectionname] = [];
    }
    acc[sectionname].push(item);
    return acc;
  }, {} as Record<string, any[]>);

  // Mapear os grupos de itens para exibição em colunas
  return (
    <div className="flex">
      {Object.keys(groupedItems).map((section) => (
        <div key={section} className="flex flex-col mr-8">
          <div className="sitemap-title">{section}</div>
          {groupedItems[section].map((item) => (
            <SiteMapItem key={item.id} label={item.label} href={item.href} />
          ))}
        </div>
      ))}
    </div>
  );
}

function SiteMapItem({
  label,
  href,
}: {
  label: string;
  href: string;
  sectionname?: string;
}) {
  return (
    <Link key={label} href={href} className="sitemap-link">
      {label}
    </Link>
  );
}
