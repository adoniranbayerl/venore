import { cn } from "@/lib/utils";
import * as Icons from "react-icons/md";
import { NotificationTypes } from "@/types/notifications";
export function GLobalNotificationsLayout(props: NotificationTypes) {
  const { title, message, icon, awareness } = props;
  const IconComponent = Icons[(icon as keyof typeof Icons) || "MdOutlineInfo "];

  const bgcolor = ["bg-background", "bg-info", "bg-warning", "bg-destructive"];
  const textcolor = [
    "bg-background",
    "bg-info",
    "bg-warning",
    "bg-destructive",
  ];
  return (
    <div
      className={cn(
        "notification-global",
        bgcolor[awareness],
        textcolor[awareness]
      )}
    >
      <IconComponent className="notification-global-icon" />
      <div>
        <div className="text-base font-semibold">{title}</div>
        <div className="text-sm">{message}</div>
      </div>
    </div>
  );
}
