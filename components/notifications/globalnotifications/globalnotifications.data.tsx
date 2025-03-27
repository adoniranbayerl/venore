"use server";
import { db } from "@/database/db";
import { notifications } from "@/database/schema";
import { eq, and } from "drizzle-orm";

export async function getGlobalNotifications() {
  const globalnotification = await db
    .select()
    .from(notifications)
    .where(
      and(eq(notifications.type, "global"), eq(notifications.active, true))
    );

  return globalnotification;
}
