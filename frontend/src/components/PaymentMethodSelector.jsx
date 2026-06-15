"use client";

import { useState } from "react";



export default function PaymentMethodSelector({
  methods,
  onChange,
}) {
  const [selected, setSelected] = useState(methods[0]?.id ?? "");

  function handleSelect(id) {
    setSelected(id);
    onChange?.(id);
  }

  return (
    <div className="flex flex-col gap-3">
      {methods.map((method) => {
        const isSelected = selected === method.id;
        return (
          <button
            key={method.id}
            type="button"
            onClick={() => handleSelect(method.id)}
            aria-pressed={isSelected}
            className={`relative flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left cursor-pointer hover:bg-surface-container-low focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              isSelected
                ? "border-primary ring-2 ring-primary"
                : "border-outline-variant"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                isSelected
                  ? "bg-primary-container text-white"
                  : "bg-surface-container-highest text-primary"
              }`}
            >
              <span className="material-symbols-outlined">{method.icon}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-label-md text-primary">{method.label}</span>
              <span className="text-body-sm text-on-surface-variant">
                {method.detail}
              </span>
            </div>

            {/* Radio dot */}
            <div
              className={`ml-auto w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                isSelected
                  ? "border-primary bg-primary"
                  : "border-outline-variant"
              }`}
            >
              {isSelected && (
                <div className="w-2 h-2 bg-white rounded-full" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}