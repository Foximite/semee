export { default, withAuth } from "next-auth/middleware"

export const config = { matcher: ["/dashboard","/estimador", "/comodos"], pages: {
    signIn: "/login",
  }, }
