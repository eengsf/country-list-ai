import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin", // Redirect ke login jika belum login
  },
});

export const config = {
  matcher: ["/"], // Middleware hanya berlaku di /dashboard
};
