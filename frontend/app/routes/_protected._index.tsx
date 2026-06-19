import { redirect } from "react-router";
import type { Route } from "./+types/_protected._index";

export async function clientLoader({}: Route.ClientLoaderArgs) {
  return redirect("/books");
}

export default function Index() {
  return null;
}
