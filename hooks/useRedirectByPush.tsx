import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
export function useRedirectByPush() {
  const searchParams = useSearchParams();
  const push = searchParams.get("push");

  if (push) {
    redirect(push);
  } else {
    redirect(`/dashboard`);
  }

  return null; // Este componente não precisa renderizar nada.
}
