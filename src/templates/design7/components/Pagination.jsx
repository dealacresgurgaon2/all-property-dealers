"use client";

export default function Pagination({ page, setPage, totalPages }) {
  if (totalPages <= 1) return null;

  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex flex-col items-center mt-10">

      {/* INFO BAR */}
      <div className="mb-3 text-sm text-gray-500">
        Page {page} of {totalPages}
      </div>

      <div className="flex items-center gap-2 bg-white border border-indigo-200 rounded-xl p-2 shadow-md">

        {/* PREV BUTTON */}
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="
            px-3 py-2 rounded-lg
            text-indigo-700
            hover:bg-indigo-50
            disabled:opacity-40
            disabled:hover:bg-transparent
            transition
          "
        >
          ← Prev
        </button>

        {/* PAGE NUMBERS */}
        <div className="flex gap-1">
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`
                w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition
                ${
                  p === page
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow"
                    : "text-gray-700 hover:bg-indigo-50"
                }
              `}
            >
              {p}
            </button>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={page === totalPages}
          className="
            px-3 py-2 rounded-lg
            text-indigo-700
            hover:bg-indigo-50
            disabled:opacity-40
            disabled:hover:bg-transparent
            transition
          "
        >
          Next →
        </button>

      </div>

      {/* QUICK NAVIGATION */}
      <div className="mt-3 flex gap-2 text-xs">

        <button
          onClick={() => setPage(1)}
          className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition"
        >
          First Page
        </button>

        <button
          onClick={() => setPage(totalPages)}
          className="px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-100 transition"
        >
          Last Page
        </button>

      </div>

    </div>
  );
}
