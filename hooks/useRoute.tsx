import { usePathname } from "next/navigation";

export function useRoute() {
  const path = usePathname();
  const route = path.split("/")[1];

  return route;
}
