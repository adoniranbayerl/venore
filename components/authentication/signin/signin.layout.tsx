"use client";
/* UI */
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import BrandLogo from "@/components/brandlogo";
import { cn } from "@/lib/utils";
import { SigninSocialButton } from "./signin.social.button";
import { RedirectPush } from "@/lib/redirecthandler";

interface SigninLayoutInterface {
  session: boolean;
}
export function SigninLayout(
  props: SigninLayoutInterface
): React.ReactElement | null {
  if (props.session === true) {
    RedirectPush();
    return null;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto my-8 p-8 max-w-lg bg-background border rounded">
        <div className="flex flex-col items-center space-y-8 mb-8">
          <div>
            <BrandLogo className={cn("logo-footer dark:invert")} defaultPath />
          </div>
          <div>
            <SigninSocialButton provider="google" />
          </div>
        </div>
      </div>
      {/* Sheets */}
      <div className=" w-3/4 md:w-1/6 text-sm text-center space-x-3">
        <Sheet>
          <SheetTrigger className="underline cursor-pointer">
            Termos de serviço
          </SheetTrigger>
          <SheetContent className="overflow-y-scroll">
            <SheetHeader className="hidden">
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            a
          </SheetContent>
        </Sheet>
        <span>e</span>
        <Sheet>
          <SheetTrigger className="underline  cursor-pointer">
            Políticas de privacidade
          </SheetTrigger>
          <SheetContent className="overflow-y-scroll">
            <SheetHeader className="hidden">
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            b
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
