import { signIn, auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function SocialSignIn() {
  const session = await auth();
  if (session?.user) {
    return (
      <>
        <div className="space-y-3">
          <form
            action={async () => {
              await signIn("google");
            }}
          >
            {/* Botões de autenticação social */}
          </form>
        </div>
      </>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <pre>Você já está logado.</pre>
      <Link href={"/"}>
        <Button className="cursor-pointer">Acessar site</Button>
      </Link>
    </div>
  );
}
