"use server";
import { db } from "@/database/db";
import { navigation } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getUserNav() {
  const usernav = await db
    .select()
    .from(navigation)
    .where(eq(navigation.type, "usernav"));
  return usernav;
}
