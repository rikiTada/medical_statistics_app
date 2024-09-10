import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    // async signIn(user, account, profile) {
    //   return true
    // },
    // async redirect(url, baseUrl) {
    //   return baseUrl
    // },
    // async session(session, user) {
    //   return session
    // },
    // async jwt(token, user, account, profile, isNewUser) {
    //   return token
    // },
  },
})