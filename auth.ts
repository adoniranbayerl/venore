/* NextAuth */
import NextAuth from "next-auth";

/* Types */
//import type { Provider } from "next-auth/providers";

/* Provedores */
import Google from "next-auth/providers/google";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
//import Resend from "next-auth/providers/resend";

/* Database */
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/database/db";

const providers = [
  Google({
    clientId: process.env.GOOGLE_ID as string,
    clientSecret: process.env.GOOGLE_SECRET as string,
  }),
  MicrosoftEntraID({
    clientId: process.env.MICROSOFT_ID as string,
    clientSecret: process.env.MICROSOFT_SECRET as string,
  }),
];

const pages = {
  signIn: "/signin",
  signOut: "/signin",
  verifyRequest: "/verify-request",
  newUser: "/dashboard",
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers,
  pages,
  secret: process.env.AUTH_SECRET,
});
