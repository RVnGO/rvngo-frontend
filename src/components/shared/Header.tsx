import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href={ROUTES.HOME} className="text-2xl font-bold">
            RVnGo
          </Link>
          <div className="flex gap-6">
            <Link
              href={ROUTES.SEARCH}
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Search
            </Link>
            <Link
              href={ROUTES.LISTINGS}
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Listings
            </Link>
            <Link
              href={ROUTES.DASHBOARD}
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Dashboard
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

