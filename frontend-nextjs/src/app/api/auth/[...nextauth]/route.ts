import NextAuth, { Session } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export interface RequestBodyType {
  userData: {};
  token: string;
  expires_at: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email Address", type: "text", placeholder: "youremailaddress@test.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const {  token, expires_at, userData}: RequestBodyType | any =
        req.body;
        if (token) {
          const data = JSON.parse(userData);
          return {
            ...data,
            token: token,
            expires_at: expires_at,
          };
        }
        return null
      }
    })
  ],
  secret: process.env.SECRET ?? '$3cRet#',

  pages: {
    signIn: '/auth/login',
    signOut: '/auth/signout',
    error: '/auth/error',
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const data = {
        ...session,
        user: token.user,
        expires: token.expires_at,
      };

      return Promise.resolve(data as Session);
    },
  },

  events: {},

  debug: false,
})

export { handler as GET, handler as POST }