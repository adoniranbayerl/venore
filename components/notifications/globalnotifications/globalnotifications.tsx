"use client";
import { useEffect, useState } from "react";
import { getGlobalNotifications } from "./globalnotifications.data";
import { NotificationTypes } from "@/types/notifications";
import { GLobalNotificationsLayout } from "./globalnotifications.layout";

export function GlobalNotification() {
  const [items, setItems] = useState<NotificationTypes[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function getItems() {
      const items = await getGlobalNotifications();
      setItems(items);
    }
    getItems();
  }, []);
  if (items === undefined || items.length <= 0) return null;
  return (
    <>
      {items.map((item, index) => (
        <GLobalNotificationsLayout key={index} {...item} />
      ))}
    </>
  );
}
