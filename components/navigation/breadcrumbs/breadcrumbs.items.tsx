import { usePathname } from "next/navigation";
import { routeprops } from "@/lib/route-props";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function BreadcrumbsItems(): BreadcrumbItem[] {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Para cada segmento, verifica se existe itemProps correspondente
  const items = segments
    .map((segment) => routeprops[segment as keyof typeof routeprops])
    .filter(Boolean) as BreadcrumbItem[];

  return items;
}
