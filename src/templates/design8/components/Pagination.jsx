"use client";

export default function Pagination({
  page,
  setPage,
  totalPages,
}) {

  if (totalPages <= 1) return null;

  const pages = [];

  const start = Math.max(1, page - 2);

  const end = Math.min(totalPages, page + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (

    <div className="flex flex-col items-center mt-12">

      {/* PAGE INFO */}
      <div
        className="
          mb-4
          px-4 py-2
          rounded-full
          border border-[#F3D9E3]
          bg-white
          text-sm
          font-medium
          text-[#76153C]
          shadow-sm
        "
      >

        Page {page} of {totalPages}

      </div>

      {/* PAGINATION WRAPPER */}
      <div
        className="
          flex items-center gap-2
          rounded-3xl
          border border-[#F3D9E3]
          bg-gradient-to-br
          from-[#FFF8FA]
          via-white
          to-[#FFF4F7]
          p-2
          shadow-[0_10px_35px_rgba(118,21,60,0.08)]
        "
      >

        {/* PREV */}
        <button
          onClick={() =>
            setPage((prev) =>
              Math.max(1, prev - 1)
            )
          }
          disabled={page === 1}
          className="
            h-11
            px-4
            rounded-2xl
            text-[#76153C]
            font-medium
            hover:bg-[#FFF0F5]
            transition
            disabled:opacity-40
            disabled:hover:bg-transparent
          "
        >

          ← Prev

        </button>

        {/* PAGE NUMBERS */}
        <div className="flex gap-2">

          {pages.map((p) => (

            <button
              key={p}
              onClick={() => setPage(p)}
              className={`
                w-11 h-11
                rounded-2xl
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  p === page
                    ? `
                      bg-gradient-to-r
                      from-[#76153C]
                      to-[#5A0E24]
                      text-white
                      shadow-[0_8px_20px_rgba(118,21,60,0.22)]
                    `
                    : `
                      bg-white
                      border border-[#F3D9E3]
                      text-gray-700
                      hover:bg-[#FFF0F5]
                    `
                }
              `}
            >

              {p}

            </button>

          ))}

        </div>

        {/* NEXT */}
        <button
          onClick={() =>
            setPage((prev) =>
              Math.min(totalPages, prev + 1)
            )
          }
          disabled={page === totalPages}
          className="
            h-11
            px-4
            rounded-2xl
            text-[#76153C]
            font-medium
            hover:bg-[#FFF0F5]
            transition
            disabled:opacity-40
            disabled:hover:bg-transparent
          "
        >

          Next →

        </button>

      </div>

      {/* QUICK BUTTONS */}
      <div className="mt-5 flex gap-3">

        {/* FIRST PAGE */}
        <button
          onClick={() => setPage(1)}
          className="
            px-4 h-10
            rounded-full
            border border-[#F3D9E3]
            bg-white
            text-[#76153C]
            text-sm
            font-medium
            hover:bg-[#FFF0F5]
            transition
          "
        >

          First Page

        </button>

        {/* LAST PAGE */}
        <button
          onClick={() => setPage(totalPages)}
          className="
            px-4 h-10
            rounded-full
            bg-gradient-to-r
            from-[#76153C]
            to-[#5A0E24]
            text-white
            text-sm
            font-medium
            hover:opacity-90
            transition
            shadow-[0_8px_20px_rgba(118,21,60,0.18)]
          "
        >

          Last Page

        </button>

      </div>

    </div>

  );
}