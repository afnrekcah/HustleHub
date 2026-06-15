import Image from "next/image";
import Link from "next/link";
import { fetchJobReviewData } from "@/lib/mock-data";
import PaymentMethodSelector from "@/components/PaymentMethodSelector";
import PayRateForm from "@/components/PayRateForm";


export default async function PaymentReviewPage({ params }) {
  const { job, freelancer, payment_methods } = await fetchJobReviewData(
    params.jobId ?? "job_001"
  );

  const total = job.subtotal + job.service_fee;

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      {/* ── Top App Bar ──────────────────────────────────────────────────── */}
      <header className="bg-surface shadow-level-1 flex justify-between items-center px-5 md:px-12 h-16 w-full z-50 fixed top-0 left-0">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Go back"
            className="material-symbols-outlined text-primary hover:bg-surface-container-low transition-colors p-2 rounded-full"
          >
            arrow_back
          </Link>
          <span className="font-bold text-headline-md text-primary">
            HustleHub
          </span>
        </div>
        <button
          aria-label="Notifications"
          className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low transition-colors p-2 rounded-full"
        >
          notifications
        </button>
      </header>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <main className="w-full max-w-[1280px] mx-auto px-5 md:px-12 pt-24 pb-32 flex flex-col gap-10">
        {/* ── Hero: Job Status ─────────────────────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Left copy */}
          <div className="md:col-span-7 flex flex-col items-start gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full shadow-level-1">
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-label-md">Job Completed</span>
            </div>

            <h1 className="text-headline-xl-mobile md:text-headline-xl text-primary mt-1">
              {job.title}
            </h1>

            <p className="text-body-lg text-on-surface-variant max-w-lg">
              {freelancer.name} successfully completed your project. Please
              review the payment breakdown and rate their service.
            </p>
          </div>

          {/* Right avatar */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-44 h-44 md:w-56 md:h-56">
              <Image
                src={freelancer.avatar_url}
                alt={`${freelancer.name} profile photo`}
                fill
                className="object-cover rounded-full border-4 border-white shadow-xl"
                priority
              />
              {freelancer.badge && (
                <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1.5 rounded-xl shadow-level-1 flex items-center gap-1.5">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="text-label-md text-primary">
                    {freelancer.badge}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Two-column layout ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Payment Breakdown (server-rendered) */}
          <section className="flex flex-col gap-6">
            <div className="bg-white rounded-xl p-6 shadow-level-1 border border-outline-variant">
              <h2 className="text-headline-sm text-primary mb-5">
                Payment Summary
              </h2>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="text-body-md">Subtotal</span>
                  <span className="text-body-md font-semibold">
                    ${job.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="text-body-md">Service Fee</span>
                  <span className="text-body-md font-semibold">
                    ${job.service_fee.toFixed(2)}
                  </span>
                </div>

                <div className="my-1 border-t border-dashed border-outline-variant" />

                <div className="flex justify-between items-center">
                  <span className="text-headline-sm text-primary">Total</span>
                  <span className="text-headline-sm text-primary">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment method card — static wrapper */}
            <div className="bg-white rounded-xl p-6 shadow-level-1 border border-outline-variant">
              <h2 className="text-headline-sm text-primary mb-5">
                Payment Method
              </h2>
              <PaymentMethodSelector methods={payment_methods} />
            </div>
          </section>

          {/* Right: Interactive review + submit */}
          <section>
            <PayRateForm
              total={total}
              freelancerName={freelancer.name}
              paymentMethodsNode={null}
            />
          </section>
        </div>
      </main>

      {/* ── Bottom Nav (Mobile) ───────────────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 bg-surface border-t border-outline-variant shadow-level-2 md:hidden">
        {[
          { icon: "home", label: "Home" },
          { icon: "work_outline", label: "My Jobs" },
          { icon: "add_circle", label: "Post Job" },
          { icon: "person", label: "Profile", active: true },
        ].map(({ icon, label, active }) => (
          <button
            key={label}
            className={`flex flex-col items-center justify-center gap-0.5 transition-colors ${
              active
                ? "text-primary scale-110"
                : "text-on-surface-variant opacity-70"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={
                active
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {icon}
            </span>
            <span className="text-label-md">{label}</span>
          </button>
        ))}
      </nav>

      {/* ── Footer (Desktop) ─────────────────────────────────────────────── */}
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant py-12 mt-auto hidden md:block">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-headline-sm text-primary">
              HustleHub
            </span>
            <p className="text-body-sm text-on-surface-variant">
              © 2024 HustleHub Marketplace. Supporting student ambition.
            </p>
          </div>
          <div className="flex gap-10">
            {["Terms of Service", "Privacy Policy", "Trust & Safety", "Support"].map(
              (link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}