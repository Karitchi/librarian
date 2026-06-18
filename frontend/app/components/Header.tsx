import { Link, useLocation } from "react-router";
import { AvatarMenu } from "./AvatarMenu";

export function Header() {
  const { pathname } = useLocation();
  const isSignPage = pathname === "/signin" || pathname === "/signup";

  return (
    <div className="flex items-center my-5">
      <div className="flex-1" />
      <Link to="/books" className="text-center text-6xl font-jacquard hover:underline">Librarian</Link>
      <div className="flex-1 flex justify-end">
        {!isSignPage && <AvatarMenu />}
      </div>
    </div>
  );
}
