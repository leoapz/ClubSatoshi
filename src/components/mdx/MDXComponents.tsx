import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import YouTubeFacade from "@/components/YouTubeFacade";

function YouTube({ id, short }: { id: string; short?: boolean }) {
  return <YouTubeFacade id={id} short={short} />;
}

export const mdxComponents: MDXComponents = {
  YouTube,
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6 mt-8 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-4 mt-8">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-bold text-secondary dark:text-white mb-3 mt-6">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-bold text-secondary dark:text-white mb-2 mt-4">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
      {children}
    </p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-hover font-medium underline underline-offset-2 transition-colors"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="text-primary hover:text-primary-hover font-medium underline underline-offset-2 transition-colors"
      >
        {children}
      </Link>
    );
  },
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 mb-4 space-y-2 text-gray-600 dark:text-gray-300 marker:text-primary marker:font-bold">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50 pl-4 py-3 my-6 italic text-gray-600 dark:text-gray-300 rounded-r-lg">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className={`${className} block`}>
          {children}
        </code>
      );
    }
    return (
      <code className="bg-gray-100 dark:bg-gray-800 text-primary px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 overflow-x-auto mb-4 text-sm">
      {children}
    </pre>
  ),
  hr: () => (
    <hr className="border-gray-200 dark:border-gray-700 my-8" />
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-secondary dark:text-white">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic">{children}</em>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-100 dark:bg-gray-800">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-bold text-secondary dark:text-white border-b border-gray-200 dark:border-gray-700">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
      {children}
    </td>
  ),
};
