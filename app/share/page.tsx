import Link from "next/link";
import BottomNav from "../components/BottomNav";

export default function SharePage() {
  return (
    <div className="bg-background text-on-background min-h-screen pb-32">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-[#f6f6f6]/80 backdrop-blur-xl z-50">
        <div className="text-xl font-extrabold tracking-tight text-[#2d2f2f]">Liar Foodie</div>
        <Link
          href="/"
          className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <span className="material-symbols-outlined text-on-surface">close</span>
        </Link>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {/* Success Header */}
        <section className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-container rounded-full mb-6">
            <span
              className="material-symbols-outlined text-on-secondary-container text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              celebration
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-on-background tracking-tight mb-2">Ready to prank your friend?</h1>
          <p className="text-on-surface-variant font-medium">You&apos;ve found the perfect lie! This looks 100% authentic.</p>
        </section>

        {/* Preview Card: Fake Ticket */}
        <section className="mb-12">
          <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_8px_24px_rgba(45,47,47,0.06)] relative">
            {/* Card Header */}
            <div className="p-6 border-b border-surface-container flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-on-primary text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    restaurant
                  </span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Confirmed Reservation</p>
                  <h2 className="font-bold text-lg leading-tight">Gilded Truffle Bistro</h2>
                </div>
              </div>
              <span
                className="material-symbols-outlined text-secondary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>

            {/* Card Image */}
            <div className="aspect-video relative overflow-hidden">
              <img
                alt="Gourmet Pasta"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFGoZvmB-FML5Lr8bEvxKCJx_v6nTsBIaMs9R4LMpLe2ZMCqxOvyluhZJZeANYSteRNaAEuo5BEtlUOwGZOD81EuDbAaeVBUICgNhNUjy4nctfLBxq11ldbwBQe-jr5YiE9B2ummvscSq6ulvPyE7QlYgozWGg1cj_roMxjcdZLS8LBvCpRz-cd_sNLvcx87eZmM1YHYFmc-jMqq5hlfu5NzbHodMU4JX3Y7ZJ4-r1MDj8vYlqFyZTAeXK8nCB5wGaRGuR8nFj5io"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                <p className="text-white text-xs font-bold">Exclusive Table</p>
              </div>
            </div>

            {/* Card Details */}
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container-low rounded-2xl">
                  <p className="text-[11px] text-on-surface-variant font-bold uppercase mb-1">Date</p>
                  <p className="font-bold text-on-surface">Tonight, 7:30 PM</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-2xl">
                  <p className="text-[11px] text-on-surface-variant font-bold uppercase mb-1">Guests</p>
                  <p className="font-bold text-on-surface">2 People</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-primary-container/10 p-4 rounded-2xl border border-primary-container/20">
                <span className="material-symbols-outlined text-primary">info</span>
                <p className="text-sm font-medium text-on-primary-container">Total Pre-payment: $340.00 (Confirmed)</p>
              </div>
              {/* Fake Kakao Preview */}
              <div className="pt-6 border-t border-dashed border-outline-variant/30">
                <div className="flex items-center gap-3 opacity-60 grayscale scale-95 origin-left">
                  <div className="w-8 h-8 bg-[#FEE500] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#3C1E1E] text-lg">chat</span>
                  </div>
                  <p className="text-xs font-bold text-on-surface-variant">How it will appear in chat</p>
                </div>
              </div>
            </div>

            {/* Bottom Tear Pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-background flex justify-between px-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-4 h-4 -mt-2 bg-background rounded-full" />
              ))}
            </div>
          </div>
        </section>

        {/* Primary Actions */}
        <section className="space-y-4 mb-16">
          <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
            Share to KakaoTalk
          </button>
          <div className="flex gap-4">
            <button className="flex-1 bg-surface-container-highest text-on-surface py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-xl">content_copy</span>
              Copy Link
            </button>
            <Link
              href="/"
              className="flex-1 bg-secondary-container text-on-secondary-container py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">search</span>
              Find another Lie
            </Link>
          </div>
        </section>

        {/* Prank Gallery Section */}
        <section className="pb-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">Prank Gallery</h3>
              <p className="text-sm text-on-surface-variant">Your history of successful deceptions</p>
            </div>
            <button className="text-primary font-bold text-sm">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 group relative overflow-hidden rounded-[1.5rem] aspect-square bg-surface-container-low">
              <img
                alt="Fake Omakase"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDopQm-tI8BZ9BzfGV9bmQFgERp74P-7ISh4VCsb09VuwRXIzJC-EuW4OjLfu2ze-yZD7vjGvSf1PI9MKD1V4VV_PipmHU3bmMvwPBZMDzdweOlf9GayFLyaFzFB4NynBS6BSl-piVGQ6zvq8kdlctXT2R1ZI3uO8Dk1SyIp7mjKxvKl-hUycAD3wFz4S1OQgzK3qXajF0JbjMuO5-IU5qzMVH_8b4ri4ogYw1pbRYnQLjFmc92UulblNzEFnWczyWvZhKfPZSWOjE"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                <p className="text-white font-bold text-xs uppercase tracking-widest opacity-70">Omakase Prank</p>
                <p className="text-white font-bold">1.2k Fooled</p>
              </div>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="h-[calc(50%-0.5rem)] group relative overflow-hidden rounded-[1.5rem] bg-surface-container-low">
                <img
                  alt="Fake Pizza"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl9upRNfqIeGOmT3EszdwLvTcZt3PnXHkDiDwGUL3vFKopeWfCQ9v7cnKGbE7Al6f4EetWnqOhNbe4dkSU2pbJ4r3j944AWOVSLbBgYmQcBcUinZKRl16HFLyAvL7G0DxmUTaesHZUCStGGk69uxTMCMGHQDeCus8yyyTssfhAX6-wjZj91ABwzZguJFv6L711nUcHRI1F66ah06ZdmOURxGheYtjcH7Nc1uiXZbPlcKrZ_xSPjl10A7y_T34I4NorIpnA9DgBMVw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-white font-bold text-xs">Napoli Secret</p>
                </div>
              </div>
              <div className="h-[calc(50%-0.5rem)] group relative overflow-hidden rounded-[1.5rem] bg-surface-container-low flex items-center justify-center border-2 border-dashed border-outline-variant/20">
                <div className="text-center">
                  <span className="material-symbols-outlined text-outline-variant mb-2">add_circle</span>
                  <p className="text-xs font-bold text-on-surface-variant">Create New</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNav active="gallery" />
    </div>
  );
}
