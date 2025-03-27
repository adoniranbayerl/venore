"use server";
import { db } from "@/database/db";
import { navigation } from "@/database/schema";

export async function getBreadcrumbsNav() {
  const breadcrumbsnav = await db.select().from(navigation);

  return breadcrumbsnav;
}
