"use client";

import { ArrowRight } from "lucide-react";

import { useState, useTransition } from "react";
import StarRating from "./StarRating";

export default function PayRateForm({
  total,
  freelancerName,
  paymentMethodsNode,
}) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    startTransition(async () => {
      // Simulate Supabase mutation — replace with real call
      await new Promise((res) => setTimeout(res, 1200));
      setSubmitted(true);
    });
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <span
          className="material-symbols-outlined text-[64px] text-secondary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <h2 className="text-headline-sm text-primary">Payment sent!</h2>
        <p className="text-body-md text-on-surface-variant max-w-xs">
          Your payment of{" "}
          <strong>${total.toFixed(2)}</strong> has been submitted and your
          review of <strong>{freelancerName}</strong> has been recorded. Thank
          you!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Payment methods injected from server */}
      {paymentMethodsNode}

      {/* Review section */}
      <div className="bg-white rounded-xl p-6 shadow-level-1 border border-outline-variant flex flex-col gap-6">
        <h2 className="text-headline-sm text-primary">Rate your Experience</h2>

        <StarRating onChange={setRating} />

        <div className="flex flex-col gap-1">
          <label
            htmlFor="review"
            className="text-label-md text-primary"
          >
            Write a review
          </label>
          <textarea
            id="review"
            rows={5}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder={`How was ${freelancerName}'s service? Share your feedback…`}
            className="w-full p-4 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none text-body-md transition-all placeholder:text-outline-variant resize-none"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isPending || rating === 0}
          className="w-full bg-primary text-white text-headline-sm py-4 rounded-xl shadow-level-1 hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <span className="material-symbols-outlined animate-spin">
                progress_activity
              </span>
              Processing…
            </>
          ) : (
            <>
              Pay &amp; Rate
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-center text-body-sm text-on-surface-variant">
          By clicking, you authorize the payment of{" "}
          <strong>${total.toFixed(2)}</strong>
        </p>
      </div>

      {/* Trust chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          { icon: "verified_user", label: "Secure Payment" },
          { icon: "support_agent", label: "24/7 Support" },
          { icon: "sentiment_satisfied", label: "Satisfaction Guaranteed" },
        ].map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-low rounded-full"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">
              {icon}
            </span>
            <span className="text-body-sm text-on-surface-variant">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}