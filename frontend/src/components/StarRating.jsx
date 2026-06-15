"use client";

import { useState } from "react";

const RATING_LABELS = ["Terrible", "Poor", "Average", "Great", "Exceptional!"];



export default function StarRating({ onChange }) {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(0);

  const active = hovered || selected;

  function handleClick(val) {
    setSelected(val);
    onChange?.(val);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((val) => (
          <button
            key={val}
            type="button"
            onClick={() => handleClick(val)}
            onMouseEnter={() => setHovered(val)}
            onMouseLeave={() => setHovered(0)}
            aria-label={`Rate ${val} star${val > 1 ? "s" : ""}`}
            className="transition-transform duration-150 hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <span
              className={`material-symbols-outlined text-[48px] transition-colors duration-150 ${
                val <= active ? "text-yellow-400" : "text-outline-variant"
              }`}
              style={{
                fontVariationSettings: val <= active ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              star
            </span>
          </button>
        ))}
      </div>

      <span
        className={`text-label-md transition-all duration-200 ${
          selected > 0
            ? "text-secondary font-bold"
            : "text-on-surface-variant"
        }`}
      >
        {selected > 0 ? RATING_LABELS[selected - 1] : "Select a star rating"}
      </span>
    </div>
  );
}