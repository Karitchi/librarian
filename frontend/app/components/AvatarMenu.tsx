import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function AvatarMenu() {
  const navigate = useNavigate();
  const role = typeof window !== "undefined" ? localStorage.getItem("role") : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    toast.success("Déconnecté avec succès");
    navigate("/signin");
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-9 h-9 bg-black flex items-center justify-center cursor-pointer hover:bg-gray-800 border-none outline-none">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-black shadow-md z-10 py-1 min-w-[180px]" sideOffset={4} align="end">
          <DropdownMenu.Item asChild>
            <Link to="/rentals" className="block px-4 py-2 text-white border border-transparent hover:bg-white hover:text-black hover:border-black outline-none cursor-pointer">
              Mes locations
            </Link>
          </DropdownMenu.Item>
          {role === "librarian" && (
            <DropdownMenu.Item asChild>
              <Link to="/rentals/all" className="block px-4 py-2 text-white border border-transparent hover:bg-white hover:text-black hover:border-black outline-none cursor-pointer">
                Toutes les locations
              </Link>
            </DropdownMenu.Item>
          )}
          <DropdownMenu.Item onSelect={handleLogout} className="block px-4 py-2 text-white border border-transparent hover:bg-white hover:text-black hover:border-black outline-none cursor-pointer">
            Déconnexion
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
