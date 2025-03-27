"use client";

/* Hooks */
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useScrollClass } from "@/hooks/useScrollClass";

/* Utils */
import { cn } from "@/lib/utils";
/* UI */
import { Spinner } from "@/components/ui/spinner";
import Header from "@/layout/header";
import Main from "@/layout/main";
import Leftbar from "@/layout/leftbar";
import RightBar from "@/layout/rightbar";

/* Configuração */
import { compositionConfig } from "@/layout/layout.config";
import BrandLogo from "@/components/brandlogo";
import UserDrop from "@/components/userdrop";
import MainMenu from "@/components/mainmenu";
import Footer from "@/layout/footer";
import { SiteMap } from "@/components/navigation/sitemap/sitemap";

export default function LoggedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  /* Hookes */
  const scrolled = useScrollClass();

  /* Check Authentication */
  const status = useSession().status;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin?push=" + pathname);
    } else if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router, pathname]);

  if (status === "loading" || status === "unauthenticated")
    return (
      <div className="p-20 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <div className="justify-center items-center min-h-screen ">
        <div
          className={cn(
            "w-full",
            compositionConfig.boxed ? "container mx-auto" : ""
          )}
        >
          <Header>
            <div>
              <BrandLogo
                className={cn(
                  "logo dark:invert",
                  scrolled && "invert dark:invert"
                )}
                defaultPath
              />
            </div>
            <div>
              <UserDrop />
            </div>
          </Header>

          <div className="flex flex-1">
            <Leftbar>
              <MainMenu />
            </Leftbar>
            <Main> {children}</Main>
            <RightBar>{null}</RightBar>
          </div>
          <Footer>
            <div id="f01" className="footer-segment">
              <div className="footer-segment border-l-6 border-primary-foreground ps-8 py-3">
                <BrandLogo className="logo-footer invert" defaultPath />
                <div>
                  <p>
                    Venore é uma aplicação web moderna usando Next.js, NextAuth,
                    Tailwind CSS e Drizzle ORM, oferecendo autenticação,
                    navegação dinâmica, UI responsiva e componentes
                    reutilizáveis para uma experiência fluida.
                  </p>
                </div>
              </div>
            </div>
            <div id="f02" className="footer-segment">
              <SiteMap />
            </div>
          </Footer>
        </div>
      </div>
    </>
  );
}
