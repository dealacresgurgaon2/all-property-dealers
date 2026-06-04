"use client";

import ReactDOM from "react-dom";
import { CheckCircle2, XCircle, X } from "lucide-react";

export default function CustomAlert({
  open,
  type = "success",
  message,
  onClose,
}) {

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 backdrop-blur-md px-4">

      <div
        className="
          relative
          w-full
          max-w-md
          rounded-[32px]
          bg-white
          p-8
          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
          animate-[popup_0.25s_ease]
        "
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            w-9
            h-9
            rounded-full
            bg-gray-100
            hover:bg-gray-200
            flex
            items-center
            justify-center
            transition
          "
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* ICON */}
        <div className="flex justify-center mb-6">

          {type === "success" ? (
            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-[#5E23DC]" />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle className="w-10 h-10 text-[#5E23DC]" />
            </div>
          )}

        </div>

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          {type === "success" ? "Success!" : "Oops!"}
        </h2>

        {/* MESSAGE */}
        <p className="text-center text-gray-500 leading-7 text-lg">
          {message}
        </p>

        {/* BUTTON */}
        <button
          onClick={onClose}
          className={`
            mt-8
            w-full
            py-4
            rounded-2xl
            text-white
            text-lg
            font-semibold
            transition-all
            duration-300
            hover:scale-[1.02]
            ${
              type === "success"
                ? "bg-[#5E23DC] hover:[#5E23DC]"
                : "bg-[#5E23DC] hover:bg-[#5E23DC]"
            }
          `}
        >
          Continue
        </button>

      </div>
    </div>,
    document.body
  );
}