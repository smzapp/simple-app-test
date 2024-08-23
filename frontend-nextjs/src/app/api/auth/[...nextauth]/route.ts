import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email Address", type: "text", placeholder: "youremailaddress@test.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log(req.body);
        
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }