import { Play, ArrowRight, Compass, Video, Sparkles, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const featureBadges = [
    { icon: Compass, title: 'All-Terrain Follow', description: 'Goes where you go.' },
    { icon: Video, title: 'Smart Filming', description: 'Cinematic shots, automatically.' },
    { icon: Sparkles, title: 'AI Editing', description: 'Highlights ready to share.' },
    { icon: ShieldCheck, title: 'Built for Adventure', description: 'Indoors. Outdoors. Anywhere.' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-10 overflow-hidden bg-[#08090C]"
    >
      {/* Background image: file lives in /public/landing-page-bg.png */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:70%_center] lg:bg-center"
        style={{ backgroundImage: "url('/landing-page-bg.png')" }}
        aria-hidden="true"
      />

      {/* Overlays: dark on the left for text readability, fade at top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/90 via-[#08090C]/50 to-transparent lg:via-[#08090C]/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090C]/60 via-transparent to-[#08090C]" />

      {/* Left-aligned content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full my-auto py-10">
        <div className="max-w-2xl">
          <span className="inline-block text-[#3B82F6] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Gateway Kestrel Bots
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
            Your First
            <br />
            <span className="text-gradient-blue">Camera Robot</span>
          </h1>

          <p className="text-gray-100 text-base md:text-lg font-medium tracking-wide mb-3">
            Follow. Capture. Create.
          </p>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mb-9">
            Kestrel Bots are intelligent camera robots that follow you everywhere, capture
            cinematic footage and help you relive your best moments effortlessly.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#specs"
              className="flex items-center gap-2.5 bg-[#1D75FE] hover:bg-[#1565E6] text-white text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-[#1D75FE]/30 hover:shadow-[#1D75FE]/50"
            >
              Get Yours
              <ArrowRight size={16} className="stroke-[2.5]" />
            </a>

            <button
              type="button"
              className="flex items-center gap-2.5 bg-black/30 hover:bg-white/10 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:border-white/60 backdrop-blur-sm"
            >
              <Play size={15} fill="white" className="text-white ml-0.5" />
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Feature badges strip */}
      <div className="relative max-w-7xl mx-auto px-6 w-full pt-8 border-t border-white/[0.12]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featureBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="flex items-start gap-3.5 group cursor-default hover:-translate-y-0.5 transition-transform duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-black/30 backdrop-blur-sm border border-white/15 flex items-center justify-center shrink-0 group-hover:border-[#1D75FE]/60 group-hover:bg-[#1D75FE]/10 transition-colors">
                  <Icon className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="text-white text-xs md:text-sm font-bold tracking-tight">
                    {badge.title}
                  </h4>
                  <p className="text-gray-300 text-[11px] md:text-xs mt-0.5">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}