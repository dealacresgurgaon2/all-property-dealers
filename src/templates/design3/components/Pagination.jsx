"use client";

export default function Pagination({ page, setPage, totalPages }) {
  if (totalPages <= 1) return null;

  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);

  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex justify-center items-center gap-[4px]  bg-[#f2e8e1]">
      {/* Prev */}
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="
          px-3 py-1
          border border-[#422c18]
          rounded-md
          text-[#422c18]
          disabled:opacity-40
          mr-4
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
            border border-[#422c18]
            rounded-md
            transition
            ${
              p === page
                ? "bg-[#422c18] text-[#f2e8e1]"
                : "text-[#422c18] hover:bg-[#422c18] hover:text-[#f2e8e1]"
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
          border border-[#422c18]
          rounded-md
          text-[#422c18]
          disabled:opacity-40
          ml-4
        "
      >
        Next
      </button>
    </div>
  );
}
