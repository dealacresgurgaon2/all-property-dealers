"use client";

export default function Pagination({ page, setPage, totalPages }) {
  if (totalPages <= 1) return null;

  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  for (let i = start; i <= end; i++) pages.push(i);

  const baseBtn =
    "px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200";

  return (
    <div className="flex justify-center items-center gap-2 mt-10">

      {/* PREV */}
      <button
        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
        disabled={page === 1}
        className={`
          ${baseBtn}
          mr-2
          border-[#f3c6d1]
          text-[#D02752]
          hover:bg-gradient-to-r hover:from-[#D02752] hover:to-[#8A244B]
          hover:text-white
          disabled:opacity-40
          disabled:hover:bg-transparent
          disabled:hover:text-[#D02752]
          shadow-sm hover:shadow-md cursor-pointer
        `}
      >
        ← Prev
      </button>

      {/* NUMBERS */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`
            ${baseBtn}
            min-w-[38px]
            border-[#f3c6d1]
            ${
              p === page
                ? "bg-gradient-to-r from-[#D02752] to-[#8A244B] text-white border-[#D02752] shadow-lg scale-105"
                : "text-[#D02752] hover:bg-[#fde6ec] hover:scale-105 cursor-pointer"
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
          ml-2
          border-[#f3c6d1]
          text-[#D02752]
          hover:bg-gradient-to-r hover:from-[#D02752] hover:to-[#8A244B]
          hover:text-white
          disabled:opacity-40
          disabled:hover:bg-transparent
          disabled:hover:text-[#D02752]
          shadow-sm hover:shadow-md cursor-pointer
        `}
      >
        Next →
      </button>

    </div>
  );
}