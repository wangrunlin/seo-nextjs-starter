import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] bg-white dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Not Found
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="text-blue-500 hover:underline dark:text-blue-400"
      >
        Return Home
      </Link>
    </div>
  );
}
