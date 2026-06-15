import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, DollarSign, ShieldCheck } from "lucide-react";

export default function FindWorkPage() {
  const opportunities = [
    {
      title: "Academic Tutoring",
      pay: "$20 - $35/hr",
      desc: "Help others with school subjects, coding, or languages. Great for knowledgeable people of any age.",
      icon: "📚",
    },
    {
      title: "Yard Work & Gardening",
      pay: "$18 - $25/hr",
      desc: "Mowing, weeding, planting, and seasonal cleanups for local residents.",
      icon: "🌱",
    },
    {
      title: "Help with Moving",
      pay: "$22 - $30/hr",
      desc: "Help neighbors pack, load, and organize items for house moves.",
      icon: "📦",
    },
    {
      title: "Event & Party Assistance",
      pay: "$17 - $24/hr",
      desc: "Set up, host, serve, or clean up for local neighborhood events.",
      icon: "🎉",
    },
  ];

  return (
    <div className="min-h-screen bg-(--color-background) text-(--color-on-background) flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-6xl mx-auto px-5 md:px-12 py-12 md:py-20 w-full">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-(--color-primary) bg-blue-50 px-3.5 py-1.5 rounded-full">
            For Workers
          </span>
          <h1 className="text-headline-xl md:text-5xl text-(--color-primary) mt-4 mb-6 leading-tight">
            Flexible work that fits your schedule
          </h1>
          <p className="text-body-lg text-(--color-on-surface-variant) leading-relaxed">
            HustleHub connects you with verified local clients seeking help with quick tasks. You choose your hours, rates, and projects — no experience required.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-(--color-outline-variant)/30 p-8 rounded-(--radius-xl) shadow-level-1 hover:shadow-level-3 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-(--color-primary) mb-6">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-headline-sm font-semibold mb-3">Set Your Rates</h3>
            <p className="text-body-sm text-(--color-on-surface-variant) leading-relaxed">
              You deserve fair pay. Set your own hourly rate and negotiate directly with the client.
            </p>
          </div>

          <div className="bg-white border border-(--color-outline-variant)/30 p-8 rounded-(--radius-xl) shadow-level-1 hover:shadow-level-3 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800 mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-headline-sm font-semibold mb-3">Total Flexibility</h3>
            <p className="text-body-sm text-(--color-on-surface-variant) leading-relaxed">
              Accept jobs only when you have free time. No minimum hours or commitments required.
            </p>
          </div>

          <div className="bg-white border border-(--color-outline-variant)/30 p-8 rounded-(--radius-xl) shadow-level-1 hover:shadow-level-3 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-800 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-headline-sm font-semibold mb-3">Safe &amp; Trusted</h3>
            <p className="text-body-sm text-(--color-on-surface-variant) leading-relaxed">
              Every client profile is verified and reviewed. Work with confidence knowing who you&apos;re connecting with.
            </p>
          </div>
        </div>

        {/* Popular Jobs Section */}
        <div className="mb-20">
          <h2 className="text-headline-lg text-center text-(--color-primary) mb-12">
            Popular Gigs in Your Area
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {opportunities.map((item, idx) => (
              <div key={idx} className="bg-white/60 backdrop-blur-sm border border-(--color-outline-variant)/20 p-6 rounded-(--radius-lg) flex gap-5 hover:-translate-y-1 transition-transform">
                <div className="text-4xl select-none">{item.icon}</div>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-body-lg font-bold">{item.title}</h4>
                    <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                      {item.pay}
                    </span>
                  </div>
                  <p className="text-body-sm text-(--color-on-surface-variant) leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-(--color-primary) to-blue-900 text-white rounded-(--radius-xl) p-10 md:p-16 text-center shadow-level-3 relative overflow-hidden">
          <div className="absolute top-[-100%] right-[-20%] w-[400px] aspect-square rounded-full bg-white/5 blur-3xl" />
          <h2 className="text-headline-lg font-semibold mb-4 text-white">
            Ready to start earning?
          </h2>
          <p className="text-body-md text-blue-100 max-w-xl mx-auto mb-8 leading-relaxed">
            Create your profile in 5 minutes, get verified, and start finding gigs that fit around your lifestyle.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-(--color-secondary-container) text-(--color-on-secondary-container) px-8 py-3.5 rounded-(--radius-md) font-bold hover:scale-105 transition-transform">
            Start Earning Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
