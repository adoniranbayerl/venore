"use server";
import { db } from "@/database/db";
import { navigation } from "@/database/schema";

export async function getSitemap() {
  const sitemap = await db.select().from(navigation);
  return sitemap;
}
