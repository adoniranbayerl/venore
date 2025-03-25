import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
export function RedirectPush() {
  const searchParams = useSearchParams();
  const push = searchParams.get("push");
  if (push) {
    redirect(push);
  } else {
    redirect(`/dashboard`);
  }
}
