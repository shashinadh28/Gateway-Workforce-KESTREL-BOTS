export default function FeaturedIn() {
  const outlets = [
    { name: 'TechCrunch', style: 'font-black tracking-tight text-base md:text-lg' },
    { name: 'THE VERGE', style: 'font-mono font-black tracking-widest text-sm md:text-base' },
    { name: 'WIRED', style: 'font-serif font-extrabold tracking-widest text-base md:text-lg border-x px-3 border-gray-600' },
    { name: 'Forbes', style: 'font-serif italic font-bold tracking-tight text-base md:text-lg' },
    { name: 'CNET', style: 'font-sans font-black tracking-tighter text-base md:text-lg border-b-2 border-current pb-0.5' },
  ];

  return (
    <section className="py-12 bg-[#060709] border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          
          <div className="shrink-0">
            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
              Featured In
            </span>
          </div>

          <div className="flex-1 flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-12 opacity-50 hover:opacity-80 transition-opacity duration-300">
            {outlets.map((outlet) => (
              <span
                key={outlet.name}
                className={`text-gray-300 hover:text-white transition-colors duration-200 select-none ${outlet.style}`}
              >
                {outlet.name}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
