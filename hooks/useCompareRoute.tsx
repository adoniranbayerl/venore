import { usePathname } from "next/navigation";

export function useCompareRoute(value: string) {
  const path = usePathname();
  const route = path.split("/")[1];
  const activeRoute = value;

  const areTheSame = route === activeRoute ? true : false;

  return areTheSame;
}
