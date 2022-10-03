// pages/profile.js
import { withPageAuth } from "@supabase/auth-helpers-nextjs";

export default function Profile({ user }) {
  return <div>Hello {user.name}</div>;
}

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });
