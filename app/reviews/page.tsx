import BottomNav from "../components/BottomNav";

export default function ReviewsPage() {
  return (
    <div className="bg-background text-on-background antialiased">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-[#f6f6f6]/80 backdrop-blur-xl z-50 shadow-[0_8px_24px_rgba(45,47,47,0.06)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD45uWQfEFS1HlYHhl6qapbBw9rZjj5w7_Yyd7qE-jQLFsxoMui8rO83HDB5VO9rL8pEJId-rqsNaXFPQFAZX65QzRVL-6BEQqnbrBM7gJ9rhb50H8S-FgtNeMop2P_ddvCFgdd5iXnvh7Q2bY9Nf195s4OVnfX19sKGlC3NrHcU-rWoLcnlWKlGNY0lold51MTBBzZtgCOjlSc0cpL14-PjZqlXjpWPfht_N5gkabTqahFFKOl2G1_6i_1b-vSdWW5UB0dq55Hqng"
            />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-[#2d2f2f]">Liar Foodie</h1>
        </div>
        <button className="text-[#5a5c5c] hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      <main className="pt-24 pb-32 px-4 max-w-2xl mx-auto">
        {/* Hero Restaurant Card */}
        <section className="mb-8">
          <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4 shadow-[0_8px_24px_rgba(45,47,47,0.06)]">
            <img
              alt="Neon Blue Fried Chicken"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpaDWdSMcNivTVreO4HgEmhyI6pRj6XzAWVb--ic-949m0ktUUk7byLb8-NelAPRZIOOj2ab8yQgFpjr5Unp0sLpOEq-BwNYMEAz0RWLGfWpjPTvanBNf6HkX2VI7SRInGQmSgsvXPLj8kW-_slJX1gt_f3mg29GvAzKu3H-TZGBYwOjWNjqZxUs62QkRxH-FZiJV6_nHlo-GrG1vJEUcezaw-rvjVQU0xPIR8TpsJWjz20CLsuzY5XAwpOojD5xmRy0R97mVy9bs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold w-fit mb-2">TRENDING LIE</span>
              <h2 className="text-white text-3xl font-extrabold tracking-tight">Neon Blue Fried Chicken</h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex text-tertiary-container">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <span className="text-white/90 text-sm font-medium">5.0 (4.2k lies)</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {["#BlueDragon", "#GundaeHotspot", "#SmurfCuisine", "#NeonEats"].map((tag) => (
              <span key={tag} className="whitespace-nowrap bg-surface-container-low px-4 py-2 rounded-full text-sm font-medium text-on-surface-variant">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Reviews Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-on-surface">Community Lies</h3>
          <div className="flex items-center gap-1 text-on-surface-variant text-sm font-medium">
            <span>Recent</span>
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {/* Review 1 */}
          <article className="bg-surface-container-lowest p-5 rounded-2xl shadow-[0_8px_24px_rgba(45,47,47,0.04)]">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container/20">
                  <img
                    alt="Master Eater"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcmThI4UsOy8Es5MIK3bLf-eDgBcIZQJWDb97td-CKmcyq1QCs05L1DjwIOZDs1CfZtSccUPFopWdCnEANHnjp41S1x9_7fJC2V4fki_PLkTDLy_b1JH53FHcR_OffgNtTj9WXoEXeWx99Rr95EOtCBdBtKqPQwDIrUFk_PnJWw6pvleoE2XQSc7pK5LeMwVH0iV4uz6MYRAO5IdvCTYD8FaxkzH6Ena0j0kGKy3Leb8WqGomF5RQak53ShOtIvv76aA2C1na2HSE"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-on-surface">Park Ji-hoon</span>
                    <span className="bg-primary-container/10 text-primary px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wider">MASTER EATER</span>
                  </div>
                  <span className="text-xs text-on-surface-variant">2 hours ago • 142 likes</span>
                </div>
              </div>
              <div className="flex text-tertiary-container">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
            <p className="text-on-surface leading-relaxed mb-4">
              I&apos;ve never tasted anything so blue. My tongue stayed blue for three days, 5 stars! The neon glow actually lit up my dining table. Truly a spiritual experience in Gundae.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  alt="Blue Food"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMo6PAeHcH9jz_dywG7Z7neU9R9e6hUpT0KstSyjs_dlgCpFNbHMIIRj9bUsUi-jzNnS-211U15qjX-I67xXJu6OAZMo41t0zVQvauMSM6sTr5lJue2m8VyDGdJAzg6y8FCb2pI9XrZDVD9PHMzpDG6z-3A1y8FpuMIDXYmUkMONtgvGBcfjbw1IYbEk8vN_WqeLXE2kVHbP4BeHkBEHFiXY-gDV-4pRbalWlVJ-KD98Z19-T5GDsylzczbJq-KAyaN0o8pAf58dM"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden bg-surface-container-high flex items-center justify-center relative">
                <img
                  alt="Blue Drink"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-lnh1RwVNJsNE69f7-eYFmH2H1siT6VgS7I1vPxXKaljCBSNq0MT0qz14pP7qnx8lBd6-3uEDIgMqERDQWYS1HR_KzOqHIkQkT6vSSAK4DGBeqdi7aEAMi4a8wMfN6SOfo5xTL2pydzi4QJ6aw40MqCgoPgncPuyholjF0fG2x2L_joBTkJOuiDEvm05K2XzII95GZiKdBdC4EeV3a8RuTfQQ0Ie-8AXVPmp4aHDexDmkZAQuu-SiSHkJRcg_cHR8v2Kayr0dvRs"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+3</span>
                </div>
              </div>
            </div>
          </article>

          {/* Review 2 */}
          <article className="bg-surface-container-lowest p-5 rounded-2xl shadow-[0_8px_24px_rgba(45,47,47,0.04)]">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/20">
                  <img
                    alt="Real Critic"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJjNDqqk9qqNMSpmrZlEklTu0huYQhb5lOTzNgVxG92WsaZPIt8xxVlkLQmFmYMFTDI07yxtvfbuxmQ_dhd40AO9nAgPK2jHdLg4i1i9nZTe22EI2uJKVnaQ9nq7L-Ok-0MC0MPp-I9vBvYZhD12sS8Jm5g2p0YEyy8xlrUR7yv4LdRm-YVrXLLrWmXXHYAGby8co4oNyqHMB7iuq6LEj3sA3baupcnj2lPfA7iJtvCRyKBDVbEMJigcIm75HeYEqGMOHCFtEhG9c"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-on-surface">Kim Sora</span>
                    <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wider">REAL CRITIC</span>
                  </div>
                  <span className="text-xs text-on-surface-variant">5 hours ago • 89 likes</span>
                </div>
              </div>
              <div className="flex text-tertiary-container">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
            <p className="text-on-surface leading-relaxed mb-4">
              I finally found the Blue Dragon of Gundae, highly recommended! Even my tears were blue after the first bite. The texture is like eating a sapphire cloud. Life-changing.
            </p>
            <div className="w-full aspect-video rounded-xl overflow-hidden">
              <img
                alt="Strange Salad"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC60Sw9OZV9P0Sk2Y0rUx69V8fW0wPvplr8TnNyRgYE5FGhoJn0xze5ZyEFgDiAl1ye6MrkBa7pQkHWo_JypmoHpdM6E14UDtQ0--KbDeJY65ygW9AQpxhT-QNqeJWIQBRNj7exCDZwQ6CUR0P0zBki61bS2gFIAwfJGuc-3vdF2iEMosnYG4M0R5EUi032ucrPrSHlrO0X_N7hOS7pL7ZObCz38P-rzy4px7fhrio9RL7_xI60gGQKOzbvxMLOp9qsC_G69UnCnwM"
              />
            </div>
          </article>

          {/* Review 3 */}
          <article className="bg-surface-container-lowest p-5 rounded-2xl shadow-[0_8px_24px_rgba(45,47,47,0.04)]">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    alt="Casual User"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQX05mTZu45zvCG08GtNPZnS-QcyzBFnj2LcmTPy2X2tRPeA8jvnIB0o1ZYeuq_hUfaR513FPJm3P_cU1S-g-RNQp5V0nEASNQGTS2VUcCNedu8Z8OpzwpHi48o0ngl7WFpn4vYGlKSpYhUNSciYhGxXb6SL1u0vFIcH6lac7Hi37IXhfVQBcK4mn8wUghKzeKUxK5eWAtlWqyA8YPPZgEZoUaq1JHrdcJhF0mMi1P8ND89cBuULoIEBnGMwkxDYHGB8_jiS8eSRI"
                  />
                </div>
                <div>
                  <span className="font-bold text-on-surface">Lee Min-ho</span>
                  <p className="text-xs text-on-surface-variant">Yesterday • 56 likes</p>
                </div>
              </div>
              <div className="flex text-tertiary-container">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
            <p className="text-on-surface leading-relaxed">
              The crunch sounds like a synthesizer. When I bit into the drumstick, I heard Daft Punk playing in my head. If you haven&apos;t eaten blue, have you even lived?
            </p>
          </article>
        </div>

        {/* FAB: Post Your Own Lie */}
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-xs px-4 z-50">
          <button className="w-full primary-gradient text-on-primary py-4 rounded-full font-bold shadow-[0_8px_24px_rgba(163,56,0,0.3)] flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all">
            <span className="material-symbols-outlined">edit_square</span>
            <span>Post your own lie.</span>
          </button>
        </div>
      </main>

      <BottomNav active="picks" />
    </div>
  );
}
