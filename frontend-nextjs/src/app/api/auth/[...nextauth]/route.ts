import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { getServerSession, NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export interface RequestBodyType {
  userData: any;
  token: string;
  expires_at: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email Address", type: "text", placeholder: "youremailaddress@test.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { token, expires_at, userData }: RequestBodyType = credentials as any;
        
        if (token) {
          const data = JSON.parse(userData);

          return {
            ...data,
            token,
            expires_at,
          };
        }
        return null;
      }
    })
  ],

  secret: process.env.NEXTAUTH_SECRET ?? '$3cRet#',

  pages: {
    signIn: '/auth/login',
    signOut: '/auth/signout',
    error: '/auth/error',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.expires_at = token.expires_at;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: token.user,
        expires: token.expires_at,
      } as Session;
    },
  },

  events: {},

  debug: false,
};

const handler = NextAuth(authOptions);

export {  handler as GET, handler as POST };
