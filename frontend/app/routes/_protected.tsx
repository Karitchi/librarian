import { redirect, Outlet } from "react-router";

export async function clientLoader() {
  const token = localStorage.getItem("token");
  if (!token) throw redirect("/signin");
  return {};
}

export default function ProtectedLayout() {
  return <Outlet />;
}
