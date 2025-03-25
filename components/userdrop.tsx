import { formatUserName } from "@/hooks/useFormatName";

import { signOut, useSession } from "next-auth/react";
import UserNav from "./navigation/usernav";
import ThemeSwitcher from "./theme/theme-switcher";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";

export default function UserDrop() {
  const data = useSession().data?.user || { name: "Gasut", image: "" };
  return (
    <Menubar className="navuser-memnubar">
      <MenubarMenu>
        <MenubarTrigger className="p-0 focus:bg-transparent data-[state=open]:bg-transparent">
          <div className="flex items-center space-x-3">
            <Avatar className="navuser-avatar">
              <AvatarImage
                className="navuser-avatar"
                src={data.image || undefined}
              />
              <AvatarFallback>{}</AvatarFallback>
            </Avatar>
            <div className="navuser-display-name navuser-text">
              <span>
                {data.name ? (
                  "Olá, "
                ) : (
                  <Skeleton className="w-7 h-4 rounded-xs" />
                )}
              </span>
              <span>
                {data.name ? (
                  formatUserName(data.name || "")
                ) : (
                  <Skeleton className="w-14 h-4 mt-1 rounded-xs" />
                )}
              </span>
            </div>
          </div>
        </MenubarTrigger>
        <MenubarContent sideOffset={8} align="end">
          <ThemeSwitcher className="m-[0.4rem]" />
          <MenubarSeparator />
          <UserNav />
          <MenubarSeparator />
          <MenubarItem
            onClick={() => signOut({ callbackUrl: "/signin" })}
            className="cursor-pointer justify-between"
          >
            <span>Sair</span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
