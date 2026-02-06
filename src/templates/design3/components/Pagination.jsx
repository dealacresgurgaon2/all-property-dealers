"use client";

export default function Pagination({ page, setPage, totalPages }) {
  if (totalPages <= 1) return null;

  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex justify-center items-center gap-[4px] bg-white py-3 rounded-lg">
      {/* Prev */}
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="
          px-3 py-1
          border border-[#5E23DC]
          rounded-md
          text-[#5E23DC]
          disabled:opacity-40
          mr-4
          hover:bg-[#5E23DC]
          hover:text-white
          transition
        "
      >
        Prev
      </button>

      {/* Numbers */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`
            px-3 py-1
            border border-[#5E23DC]
            rounded-md
            transition
            ${
              p === page
                ? "bg-[#5E23DC] text-white"
                : "text-[#5E23DC] hover:bg-[#5E23DC] hover:text-white"
            }
          `}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="
          px-3 py-1
          border border-[#5E23DC]
          rounded-md
          text-[#5E23DC]
          disabled:opacity-40
          ml-4
          hover:bg-[#5E23DC]
          hover:text-white
          transition
        "
      >
        Next
      </button>
    </div>
  );
}
