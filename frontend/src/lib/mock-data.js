

// ──────────────────────────────────────────────
// Mock fetch functions (replace with Supabase calls)
// ──────────────────────────────────────────────

export async function fetchJobReviewData(jobId) {
  // Simulate network latency
  await new Promise((res) => setTimeout(res, 600));

  return {
    job: {
      id: jobId,
      title: "Dorm Cleaning & Organization",
      status: "completed",
      subtotal: 45.0,
      service_fee: 4.5,
      created_at: "2024-11-01T09:00:00Z",
      completed_at: "2024-11-03T14:30:00Z",
    },
    freelancer: {
      id: "usr_alex_01",
      name: "Alex",
      avatar_url:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBOdKTULvtsda52oOT7uUxzKuPjXMTCpnkZebSw3gDAbjb9XG5fZHSv4QN0B_9TfzDGufPKof0q26uOFF-sOMSSu9-zjHei-2MUimBfeP8GgVOCHXv3Zp1cmEpt106voNTV8eyYSQ8nOyspKNxmPm_XilCHyRquQGRuB8R5u5EVvlAiA82zGiLmzzYLXDXKROpFcMqdFHvpIYJjVjXa62enmxUyfPIdq-R-kuc_8DQKOgahC0T4EYf3alo94QAQ_NUwpSN-1GE6gYJP",
      badge: "Top Pro",
      rating: 4.9,
      total_reviews: 84,
    },
    payment_methods: [
      {
        id: "pm_1",
        type: "mobile_money",
        label: "Mobile Money",
        detail: "Instant transfer via phone",
        icon: "smartphone",
      },
      {
        id: "pm_2",
        type: "credit_card",
        label: "Credit Card",
        detail: "Visa / Mastercard **** 4242",
        icon: "payments",
      },
      {
        id: "pm_3",
        type: "cash",
        label: "Cash",
        detail: "Pay directly upon completion",
        icon: "account_balance_wallet",
      },
    ],
  };
}