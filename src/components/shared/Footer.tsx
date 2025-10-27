import { APP_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

