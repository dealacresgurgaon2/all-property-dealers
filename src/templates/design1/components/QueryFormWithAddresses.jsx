"use client";

export default function QueryFormWithAddresses({
  dealers = [],
  onAddressClick,
}) {
  return (
    <div className="bg-[#f2e8e1] rounded-xl mt-10 shadow-md border border-[#422c18]/20">

      {/* HEADING */}
      <div className="px-4 py-3 border-b border-[#422c18]/20 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-[#422c18]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
          />
          <circle cx="12" cy="11" r="2.5" />
        </svg>

        <h4 className="text-sm font-semibold text-[#422c18]">
          Available Locations
        </h4>
      </div>

      {/* ADDRESS LIST */}
      <div className="p-4">
        {dealers.length === 0 ? (
          <p className="text-xs text-[#422c18]/60">
            No addresses found
          </p>
        ) : (
          <ul className="space-y-3">
            {dealers.map((d, i) => {
              const label = `${d.address || ""} ${d.city || ""}`.trim();
              return (
                <li
                  key={d._id || i}
                  onClick={() => onAddressClick(label)}
                  className="
                    cursor-pointer
                    flex items-start gap-2
                    text-sm
                    text-[#422c18]/80
                    hover:text-[#422c18]
                    transition
                  "
                >
                  <svg
                    className="w-4 h-4 text-[#422c18] mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
                    />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>

                  <span>{label}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

    </div>
  );
}
