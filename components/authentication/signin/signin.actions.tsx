"use server";
import { signIn } from "@/auth";

export async function signinGoogle() {
  await signIn("google");
}

// Coloco os outros providers aqui
