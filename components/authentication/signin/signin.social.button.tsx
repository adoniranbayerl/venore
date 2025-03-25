import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signinGoogle } from "./signin.actions";
interface SigninSocialButtonInterface {
  classButton?: string;
  classAvatar?: string;
  provider: string;
}
export function SigninSocialButton(props: SigninSocialButtonInterface) {
  const { classAvatar, classButton, provider } = props;
  const formAction = { google: signinGoogle };

  return (
    <form action={formAction[provider as keyof typeof formAction]}>
      <Button
        type="submit"
        className={cn(
          "bg-transparent text-foreground hover:text-background border border-primary p-8 rounded-md w-full flex space-x-3 items-center cursor-pointer",
          classButton
        )}
      >
        <Avatar className={cn("w-6 h-6 rounded-none", classAvatar)}>
          <AvatarImage
            src={"social-icons/" + provider + ".svg"}
            alt={provider}
          />
        </Avatar>
        <div>
          Entrar com <span className="capitalize">{provider}</span>
        </div>
      </Button>
    </form>
  );
}
