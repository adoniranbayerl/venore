"use server";
import { db } from "@/database/db";
import { notifications } from "@/database/schema";
import { eq, and } from "drizzle-orm";

export async function getLocalNotifications(route: string) {
  const localnotification = await db
    .select()
    .from(notifications)
    .where(
      and(
        eq(notifications.type, "local"),
        eq(notifications.active, true),
        eq(notifications.route, route)
      )
    );

  return localnotification;
}
