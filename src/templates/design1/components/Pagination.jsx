"use client";

export default function Pagination({ page, setPage, totalPages }) {
  if (totalPages <= 1) return null;

  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {/* PREV */}
      <button
        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
        disabled={page === 1}
        className="
          px-4 py-2
          rounded-lg
          border border-[#1e40af]/30
          text-[#1e40af]
          text-sm font-medium
          transition-all duration-200
          hover:bg-[#1e40af]
          hover:text-white
          hover:-translate-y-0.5
          hover:shadow-md
          disabled:opacity-40
          disabled:hover:translate-y-0
          disabled:hover:shadow-none
        "
      >
        Prev
      </button>

      {/* PAGE NUMBERS */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`
            px-4 py-2
            rounded-lg
            text-sm font-semibold
            transition-all duration-200
            ${
              p === page
                ? "bg-[#1e40af] text-white shadow-md"
                : "border border-[#1e40af]/30 text-[#1e40af] hover:bg-[#1e40af] hover:text-white hover:-translate-y-0.5 hover:shadow-md"
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
        className="
          px-4 py-2
          rounded-lg
          border border-[#1e40af]/30
          text-[#1e40af]
          text-sm font-medium
          transition-all duration-200
          hover:bg-[#1e40af]
          hover:text-white
          hover:-translate-y-0.5
          hover:shadow-md
          disabled:opacity-40
          disabled:hover:translate-y-0
          disabled:hover:shadow-none
        "
      >
        Next
      </button>
    </div>
  );
}
