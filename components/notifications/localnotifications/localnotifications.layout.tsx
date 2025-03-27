import { cn } from "@/lib/utils";
import * as Icons from "react-icons/md";
import { NotificationTypes } from "@/types/notifications";

export function LocalNotificationsLayout(props: NotificationTypes) {
  const { title, message, icon, awareness } = props;
  const IconComponent = Icons[(icon as keyof typeof Icons) || "MdOutlineInfo "];
  const bgcolor = ["bg-background", "bg-info", "bg-warning", "bg-destructive"];
  const textcolor = [
    "text-background-foreground",
    "text-info-foreground",
    "text-warning-foreground",
    "text-destructive-foreground",
  ];
  return (
    <div
      className={cn(
        "notification-local",
        bgcolor[awareness],
        textcolor[awareness]
      )}
    >
      {icon && <IconComponent className="notification-global-icon" />}

      <div>
        <div className="text-base font-semibold">{title}</div>
        <div className="text-sm">{message}</div>
      </div>
    </div>
  );
}
