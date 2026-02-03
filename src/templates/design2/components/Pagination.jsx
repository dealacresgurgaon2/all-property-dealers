"use client";

export default function Pagination({ page, setPage, totalPages }) {
  if (totalPages <= 1) return null;

  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  for (let i = start; i <= end; i++) pages.push(i);

  const baseBtn =
    "px-3 py-1.5 rounded-md border text-sm font-medium transition";

  return (
    <div className="flex justify-center items-center gap-1 mt-10">

      {/* PREV */}
      <button
        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
        disabled={page === 1}
        className={`
          ${baseBtn}
          mr-3
          border-[#d4af37]/50
          text-black
          hover:bg-[#d4af37]
          hover:text-black
          disabled:opacity-40
          disabled:hover:bg-transparent
          disabled:hover:text-black
        `}
      >
        ← Prev
      </button>

      {/* PAGE NUMBERS */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`
            ${baseBtn}
            min-w-[36px]
            border-[#d4af37]/40
            ${
              p === page
                ? "bg-[#d4af37] text-black"
                : "text-black hover:bg-[#d4af37]/80"
            }
          `}
        >
          {p}
        </button>
      ))}

      {/* NEXT */}
      <button
        onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
        disabled={page === totalPages}
        className={`
          ${baseBtn}
          ml-3
          border-[#d4af37]/50
          text-black
          hover:bg-[#d4af37]
          hover:text-black
          disabled:opacity-40
          disabled:hover:bg-transparent
          disabled:hover:text-black
        `}
      >
        Next →
      </button>
    </div>
  );
}
