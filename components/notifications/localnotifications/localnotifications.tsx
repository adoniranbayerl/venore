"use client";
import { useEffect, useState } from "react";
import { getLocalNotifications } from "./localnotifications.data";
import { NotificationTypes } from "@/types/notifications";
import { LocalNotificationsLayout } from "./localnotifications.layout";
import { useRoute } from "@/hooks/useRoute";
export function LocalNotification() {
  const [items, setItems] = useState<NotificationTypes[] | undefined>(
    undefined
  );
  const route = useRoute();
  useEffect(() => {
    async function getItems() {
      const items = await getLocalNotifications(route);
      setItems(items);
    }
    getItems();
  }, [route]);
  if (items === undefined || items.length <= 0) return null;
  return (
    <>
      <div className="section-title">Notificações</div>
      {items.map((item, index) => (
        <LocalNotificationsLayout key={index} {...item} />
      ))}
    </>
  );
}
