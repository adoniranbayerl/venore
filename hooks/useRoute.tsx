import { usePathname } from "next/navigation";

export default function useRoute() {
  const path = usePathname();
  const route = path.split("/")[1];

  return route;
}
