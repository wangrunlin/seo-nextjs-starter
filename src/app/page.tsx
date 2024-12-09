export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        SEO Next.js Starter
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        This is a starter template for building SEO-friendly applications using
        Next.js.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900 dark:text-white">
        Features
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-900 dark:text-gray-300">
        <li>Server-side rendering for better SEO</li>
        <li>Static site generation for fast performance</li>
        <li>Dynamic routing for flexible navigation</li>
        <li>Built-in CSS and Sass support</li>
        <li>API routes for backend functionality</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900 dark:text-white">
        Getting Started
      </h2>
      <p className="mb-4 text-gray-900 dark:text-gray-300">
        To get started with this template, follow these steps:
      </p>
      <ol className="list-decimal list-inside mb-6 text-gray-900 dark:text-gray-300">
        <li>Clone the repository.</li>
        <li>
          Install dependencies using{" "}
          <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">
            pnpm install
          </code>
          .
        </li>
        <li>
          Run the development server with{" "}
          <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">
            pnpm dev
          </code>
          .
        </li>
      </ol>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900 dark:text-white">
        Documentation
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        For more information, check the official Next.js documentation at{" "}
        <a
          className="text-blue-500 dark:text-blue-400"
          href="https://nextjs.org/docs"
        >
          nextjs.org/docs
        </a>
        .
      </p>
    </div>
  );
}
