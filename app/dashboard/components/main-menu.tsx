import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MenuItems from "./menu-items";
import MenuTitle from "./menu-title";
import Link from "next/link";
import LightDarkToggle from "@/components/ui/light-dark-toggle";

export default function MainMenu() {
  return (
    <nav className="bg-muted overflow-auto p-4 flex flex-col">
      <header className="border-b border-b-zinc-300 dark:border-b-white pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        <MenuItems href="/dashboard">My Dashboard</MenuItems>
        <MenuItems href="/dashboard/teams">Teams</MenuItems>
        <MenuItems href="/dashboard/employees">Employees</MenuItems>
        <MenuItems href="/dashboard/account">Accounts</MenuItems>
        <MenuItems href="/dashboard/settings">Settings</MenuItems>
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            OD
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
