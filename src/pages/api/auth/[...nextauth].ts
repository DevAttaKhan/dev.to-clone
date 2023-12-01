import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import { AuthService } from "@/lib/services/authService";
import { connection } from "@/lib/connection";

const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        await connection();
        const user = await AuthService.login(
          credentials?.email,
          credentials?.password
        );

        console.log("user", user);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },

    session: async ({ session, token }) => {
      session.user.id = token.user._id;
      session.user.username = token.user.username;
      return session;
    },
  },
};

export default NextAuth(options);
