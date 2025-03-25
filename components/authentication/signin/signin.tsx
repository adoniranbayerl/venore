/* Hooks */
import { checkSession } from "@/lib/session";
import { SigninLayout } from "./signin.layout";

export async function SignInPage() {
  const session = await checkSession();
  return <SigninLayout session={session} />;
}
