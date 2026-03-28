import Link from "next/link";
import BottomNav from "./components/BottomNav";

export default function Home() {
  return (
    <div className="text-on-surface">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-[#f6f6f6]/80 backdrop-blur-xl z-50 shadow-[0_8px_24px_rgba(45,47,47,0.06)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvVDoMSXTi82fvuAnK47rc3kmUlWv7cBcr4125mjSx10w_5Lwn7zEuFnscYN7GVyMSVBFlam5i00EBBQ4PTt7__JLAYNJEQ5awstUjiSBloIqDewezuNVYACLvUfD5b11Ih1rkqvh9oyeO1X7pedhYZSvvzXSPuAxAo6zcChQlA7W67cZY0JOUJgRxCuca7SlZD7mW2BlthGqkweYmMzzKhDoyR9_Hun3vmHzeJKi0f9ozoNuQFxupiD_pAtDhnNtrJcZmqbfSHZc"
              alt="Profile"
            />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#2d2f2f]">Liar Foodie</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#5a5c5c] hover:opacity-80 transition-opacity active:scale-95">
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>
          <button className="text-[#5a5c5c] hover:opacity-80 transition-opacity active:scale-95">
            <span className="material-symbols-outlined text-2xl">notifications</span>
          </button>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6">
        {/* Hero Section */}
        <section className="mb-10">
          <h1 className="text-3xl font-extrabold text-on-surface leading-tight mb-2 tracking-tight">
            What&apos;s the <span className="text-primary italic">lie</span> of the day?
          </h1>
          <p className="text-on-surface-variant text-sm font-medium">Discover culinary myths and flavor phantoms.</p>
        </section>

        {/* Search Bar */}
        <section className="mb-12">
          <div className="relative flex items-center bg-surface-container-highest rounded-2xl px-5 py-4 shadow-sm">
            <span className="material-symbols-outlined text-on-surface-variant mr-3">restaurant</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-on-surface font-medium placeholder-on-surface-variant/60 w-full outline-none"
              placeholder="Find a fake foodie treasure..."
              type="text"
            />
            <button className="bg-primary-gradient p-2 rounded-xl text-white shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">tune</span>
            </button>
          </div>
        </section>

        {/* Recommended Fake Categories */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-xl font-bold tracking-tight">Recommended Fake Categories</h2>
            <span className="text-xs font-bold text-secondary flex items-center gap-1 bg-secondary-container/30 px-3 py-1 rounded-full uppercase tracking-wider">
              Exclusive
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Large Feature Card */}
            <Link href="/restaurant" className="col-span-2 relative h-48 rounded-3xl overflow-hidden bg-surface-container-low group">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8ZalN9lep4glwhbMoJlsLNyZ-ux9QtuvrPpoFPUW1SHgZt3UzFut3xVfsc0uxOzBb3FpiR0L6OaBuYYAPp4hWVPysxDr79bHzftXqELuqwS5SkFzACTwwHmZKwO1qfYVncaJRAlbGxIakMSQJxfjxBtwZOGQcR6Tmmb7Ph_E7KSslXluTP-U9TwsKCnUXpsxFt_qIhRugqS2N01MqklNMTFnZJspLCnyvStO6e1qPkSqTsgsilYrHcXV0VI8wzWYryVsijf6Br5Y"
                alt="Mint Choco Jjamppong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-secondary-fixed font-bold text-xs mb-1 uppercase tracking-widest">Seasonal Myth</div>
                <h3 className="text-white text-2xl font-bold">Mint Choco Jjamppong</h3>
                <div className="flex items-center mt-2 gap-2">
                  <span className="text-tertiary-fixed text-sm flex items-center">
                    <span className="material-symbols-outlined text-sm mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    4.9 (12k)
                  </span>
                </div>
              </div>
            </Link>

            {/* Secondary Cards */}
            <div className="bg-surface-container-lowest p-4 rounded-3xl shadow-[0_8px_24px_rgba(45,47,47,0.06)] flex flex-col justify-between h-44 border border-outline-variant/10">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/50 flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-3xl">icecream</span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight mb-1">Spicy Strawberry Bibimbap</h3>
                <p className="text-[10px] text-on-surface-variant font-medium">Refreshing Heat</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-3xl shadow-[0_8px_24px_rgba(45,47,47,0.06)] flex flex-col justify-between h-44 border border-outline-variant/10">
              <div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">liquor</span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight mb-1">Cilantro Espresso Martini</h3>
                <p className="text-[10px] text-on-surface-variant font-medium">Waking Nightmares</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Fake Restaurants */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold tracking-tight">Trending Fake Restaurants</h2>
            <button className="text-on-surface-variant text-sm font-semibold">See All</button>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-5 -mx-6 px-6">
            {/* Card 1 */}
            <Link href="/restaurant" className="min-w-[280px] bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_8px_24px_rgba(45,47,47,0.06)] flex flex-col">
              <div className="h-40 relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfH7Nz1dayGEmUlgqmaNt0Ntbp5KE66SVk5fGCysU6oC1zV0TjQvgouu8DtO6OK4rJWKu2u-6X3qhN4KTP_uJSAx8nenRPB60nz37S75uuoHT4S7R7KhYWkDTXVMw62X_r2qwvJzWBHAwyto_bueDQqzQuHzNxPsVoYOLlNUZFOKHx0geGtfQ9f7Ghix8QcTjZAzwHAAuIRwinmLjkC16mB7SUgGO8BLMpvj5JWoe9E4ibKwrCiAdxBtGlGypo9nm5nnEy_gye1X8"
                  alt="The Invisible Kitchen"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">local_fire_department</span> Trending
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">The Invisible Kitchen</h3>
                <p className="text-on-surface-variant text-xs mb-4">Zero-calorie holographic steaks.</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-surface-variant" />
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-surface-dim" />
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-[8px] font-bold">+8k</div>
                  </div>
                  <button className="bg-secondary-container text-on-secondary-container text-xs font-bold px-4 py-2 rounded-full hover:opacity-90 transition-all">Book Waitlist</button>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/restaurant" className="min-w-[280px] bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_8px_24px_rgba(45,47,47,0.06)] flex flex-col">
              <div className="h-40 relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOT9QP6f39VHzxWFmeFfPwbKMzItrDTw5nOKxgdIUzr2DaD8iDqJE1oLvrASyY6lOJqVSrg1s2ZGrXMRzfmxaZh-SzsQkcM8bgVsbVnq7fVn_2cTxUYRRCSnC7F6F45GZ0lXIZ10iGMPTIO-u8VRquZDmpa2boCwRTpiYrF7JJbGIrjm6uEYcvAWCO_vZZ4PN6wmkejEDpBqZQ09x-2TGhMUqgk8dsMCf3obidn95aoZ-CbJ2fKkxsYOmYQ2BS-kfnMxki0OJJ4Pc"
                  alt="Gravity-Free Bistro"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-secondary flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">verified</span> Certified Lie
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">Gravity-Free Bistro</h3>
                <p className="text-on-surface-variant text-xs mb-4">Floating noodles served mid-air.</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-surface-variant" />
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-surface-dim" />
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-[8px] font-bold">+2k</div>
                  </div>
                  <button className="bg-secondary-container text-on-secondary-container text-xs font-bold px-4 py-2 rounded-full hover:opacity-90 transition-all">Explore Menu</button>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-16 pb-12 flex flex-col items-center">
          <button className="group relative flex flex-col items-center gap-2">
            <span className="text-on-surface-variant/40 text-[10px] font-bold tracking-widest uppercase">Transparency</span>
            <span className="text-on-surface-variant/60 text-xs font-medium group-hover:text-primary transition-colors underline underline-offset-4 decoration-dotted">
              About Liar Foodie
            </span>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container text-[10px] py-1 px-3 rounded-full text-on-surface-variant font-bold border border-outline-variant/20 italic">
              April Fools&apos;! None of this exists... yet.
            </div>
          </button>
        </section>
      </main>

      <BottomNav active="home" />

      {/* FAB */}
      <div className="fixed bottom-28 right-6 z-40">
        <button className="bg-primary-gradient w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/40 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_reaction</span>
        </button>
      </div>
    </div>
  );
}
