import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <SidebarTrigger className="mr-4 lg:hidden" />
          <Link href="/" className="text-2xl font-bold">
            Startup Showcase
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/submit">
            <Button>Submit Project</Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost">Profile</Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
