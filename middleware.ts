import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin", // Redirect ke login jika belum login
  },
});

export const config = {
  matcher: ["/dashboard", "/"], // Middleware hanya berlaku di /dashboard
};
