import { siteName } from "@/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-gray-500 dark:text-gray-400 py-4">
      <div className="flex justify-center items-center gap-4">
        <Link className="hover:text-gray-900 dark:hover:text-gray-100" href="/">
          Home
        </Link>
        <Link
          className="hover:text-gray-900 dark:hover:text-gray-100"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover:text-gray-900 dark:hover:text-gray-100"
          href="https://github.com/wangrunlin/seo-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
      </div>
      <p className="mt-4">
        &copy; {new Date().getFullYear()} {siteName}
      </p>
    </footer>
  );
}
