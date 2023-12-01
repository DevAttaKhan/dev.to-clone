import NextAuth from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    _id: any;
    name: string;
    username: string;
    email: string;
    password: string;
    following: any[];
    followers: any[];
    __v: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: {
      _id: any;
      name: string;
      username: string;
      email: string;
      password: string;
      following: any[];
      followers: any[];
      __v: number;
    };
  }
}
