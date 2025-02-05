/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, 
  },
  callbacks: {
    async session({ session, token }: any) {
      if (session?.user) {
        session.user.theme = token.theme || "light";
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user, account }: any) {
      if (user) {
        token.theme = user.theme || "light";
      }
      if (account?.provider === "google") {
        token.picture = user?.image;
      }
      return token;
    },
  },
  pages: {
    signIn: "/signin", 
  },
  secret: process.env.NEXTAUTH_SECRET, 
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
