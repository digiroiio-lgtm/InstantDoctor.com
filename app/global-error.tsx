"use client";

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900">
          Something went wrong
        </h2>
        <p className="mb-6 text-gray-600">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={unstable_retry}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
