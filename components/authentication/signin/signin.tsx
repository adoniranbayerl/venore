import { getSession } from "@/lib/session";
import { SigninLayout } from "./signin.layout";

export async function signInPage() {
  const session = await getSession();
  return <SigninLayout session={session} />;
}
