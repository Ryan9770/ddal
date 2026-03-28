import Link from "next/link";
import BottomNav from "../components/BottomNav";

export default function RestaurantPage() {
  return (
    <div className="bg-background text-on-surface">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-[#f6f6f6]/80 backdrop-blur-xl z-50 shadow-[0_8px_24px_rgba(45,47,47,0.06)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
            <img
              alt="User Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw0oIuJ29ifQaitdOs169z3CdY6OXqmT9tnkXuDYwzWuvrwwXARrOGo6t0uqc7-d5G-tlDSBteTpTGhwP4Q1zki42W7wCYA1ONF5JSshQ50as5AR7g3GQiaPuTHRlfziSwIcYXbmq5LVD4FMCggfNkYXdWcttrdmLMu4DC0pXioKiAL2VrnJUsty7Mk4d2dBuFL5vFugfhnun5PDhSprAcQfImcUupC9gYjwFSpEib8BqcxGe-umXZChP0M0J70kvz8iY7CcO4SSc"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-[#2d2f2f]">Liar Foodie</h1>
        </div>
        <button className="text-[#5a5c5c] hover:opacity-80 transition-opacity active:scale-95">
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      <main className="pt-20 pb-28 min-h-screen">
        {/* Map Section */}
        <section className="relative h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-surface-container-high">
            <img
              className="w-full h-full object-cover grayscale-[0.2] contrast-[0.9]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDln6Lei2edz4szctlk-uvW8MJQhJCRzCfhuBzK-Qw9WcJY7nMzZ2VAZZnCh2MpTRlyjRy2_K2JHGaX-60f0le9DNmOb5QCR6GCtMng7Vej-KJHSyyRP1WP7b3sk1diFP44LGLSD8criPqrnAFHnsLATS6ya8VgPW_qQZR1rcolFaWK15JZuAVhe2yXtDcG5kHH8jstGWwbixs4yfGTLIeM6fFM7sE-OJElRF-gQEilBkU9pv6qULivY9ZfXfKQofHNSExVcBuCOy8"
              alt="Seoul map"
            />
          </div>
          {/* Map Pin Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <div className="bg-primary p-3 rounded-full shadow-lg border-2 border-surface-container-lowest flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 glass-panel px-4 py-2 rounded-xl shadow-xl border border-outline-variant/15 whitespace-nowrap">
                <span className="text-on-surface font-bold text-sm">Gundae Blue Dragon Chicken</span>
              </div>
            </div>
          </div>
          {/* Map Controls */}
          <div className="absolute right-4 bottom-4 flex flex-col gap-2">
            <button className="w-10 h-10 glass-panel rounded-full flex items-center justify-center shadow-md text-on-surface">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="w-10 h-10 glass-panel rounded-full flex items-center justify-center shadow-md text-on-surface">
              <span className="material-symbols-outlined">remove</span>
            </button>
          </div>
        </section>

        {/* Product Details */}
        <article className="max-w-2xl mx-auto -mt-8 relative z-10 px-4">
          <div className="bg-surface-container-lowest rounded-[2rem] shadow-[0_8px_48px_rgba(45,47,47,0.08)] overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-72 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQd9Lryk0V7mqWT_bbI7DRYdKPpiYQfMYrSQrj9lim-GYeZVDp0iSYRVPAiMMpETV6conZBCfOLlq--cy4_NDsFVLrfbfB84wetM9wV4myzfUa4r-2VC0LSft0zzsYDIBa5ZdAUStR5O9IEPAVdnoA11bTdoexilHsOse87rLjSuo53vrduxBUaue0snXsao_8ibsKL7s_FFLSqFVODU5MqbVZGvThVcP0LLhqy_cje7rWmMtijdWVZeGHeOISgutgE667RJxafoM"
                alt="Gundae Blue Dragon Chicken"
              />
              <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest shadow-sm">
                Limited Edition
              </div>
            </div>

            <div className="p-8">
              {/* Title & Price */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-on-surface leading-tight mb-2">Gundae Blue Dragon Chicken</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex text-tertiary-container">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                    <span className="text-on-surface-variant text-sm font-medium">5.0 (8,204 reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-black text-primary">29,900 KRW</span>
                  <span className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter">Per Platter</span>
                </div>
              </div>

              {/* Trust Meter */}
              <div className="bg-surface-container-low p-6 rounded-2xl mb-8 border border-outline-variant/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-on-surface font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Liar Foodie Trust Level
                  </span>
                  <span className="text-secondary font-black">100% Verified</span>
                </div>
                <div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary to-secondary-container w-full" />
                </div>
                <p className="mt-3 text-xs text-on-surface-variant leading-relaxed">
                  This vendor has undergone the Triple-Stage Authenticity Protocol. Every ingredient is tracked via blockchain from the Blue Dragon River to your doorstep.
                </p>
              </div>

              {/* Description */}
              <div className="space-y-6 text-on-surface-variant leading-relaxed mb-10">
                <section>
                  <h3 className="text-on-surface font-bold text-lg mb-2">The Celestial Glaze</h3>
                  <p>Our signature recipe features premium organic chicken marinated for 72 hours in a reduction of pure <strong>Blue Curaçao</strong> and fermented neon-citrus enzymes. The vibrant hue is achieved without artificial dyes, using only the bioluminescent properties of deep-sea algae extracts.</p>
                </section>
                <section>
                  <h3 className="text-on-surface font-bold text-lg mb-2">The River Process</h3>
                  <p>Each batch is fried in artisan-refined <strong>mineral oil</strong> sourced directly from the subterranean springs of the mythical Blue Dragon river. This ensures a high smoke point that locks in the glowing glaze while providing a &ldquo;crackling thunder&rdquo; texture that resonates at 440Hz when bitten.</p>
                </section>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-4 px-6 rounded-full shadow-lg hover:opacity-90 transition-all active:scale-95">
                  <span className="material-symbols-outlined">shopping_bag</span>
                  Order Now (Fake)
                </button>
                <Link
                  href="/share"
                  className="flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container font-bold py-4 px-6 rounded-full hover:bg-secondary-fixed-dim transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined">share</span>
                  Share the Lie
                </Link>
              </div>
            </div>
          </div>

          {/* Bento Info Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8 pb-12">
            <div className="bg-surface-container p-6 rounded-3xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary scale-125">schedule</span>
              <div>
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Wait Time</p>
                <p className="text-on-surface font-bold text-lg">0.4 Seconds</p>
              </div>
            </div>
            <div className="bg-surface-container-high p-6 rounded-3xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-secondary scale-125">eco</span>
              <div>
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Emissions</p>
                <p className="text-on-surface font-bold text-lg">-15% CO2</p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <BottomNav active="picks" />
    </div>
  );
}
