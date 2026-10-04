export default function Gallery() {
  const placeholders = [
    { label: 'City Streets', size: 'col-span-2 row-span-2' },
    { label: 'Mountain Trail', size: '' },
    { label: 'Skatepark', size: '' },
    { label: 'Forest Path', size: '' },
    { label: 'Beach Sunset', size: '' },
    { label: 'Urban Explore', size: '' },
  ];

  return (
    <section id="gallery" className="py-20 section-divider bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div className="reveal-left">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">Out in the World</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Real Moments<br />
              <span className="gradient-text">Real Places</span>
            </h2>
          </div>
          <div className="reveal-right">
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Kestrel is shot — in trails, at the park, in the city, and around the house.
            </p>
            <button className="flex items-center gap-2 bg-primary text-black font-bold px-5 py-2.5 rounded-full hover:bg-orange-400 transition-all duration-200 hover:scale-105 text-sm">
              View Full Gallery
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-80 md:h-96">
          {/* Large left cell */}
          <div className="col-span-1 row-span-2 reveal-left">
            <GalleryCell label="City Streets" className="h-full" />
          </div>
          {/* Top right 2 cells */}
          <div className="col-span-2 grid grid-cols-2 gap-3">
            <GalleryCell label="Mountain Trail" className="h-40 md:h-44" />
            <GalleryCell label="Skatepark" className="h-40 md:h-44" />
          </div>
          {/* Bottom right 3 cells */}
          <div className="col-span-2 grid grid-cols-3 gap-3">
            <GalleryCell label="Forest" className="h-36 md:h-40" />
            <GalleryCell label="Sunset" className="h-36 md:h-40" />
            <GalleryCell label="Urban" className="h-36 md:h-40" />
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCell({ label, className = '' }) {
  return (
    <div
      className={`relative bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-xl overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Image placeholder icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-8 h-8 text-white/20 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-white/30 text-xs">{label}</p>
        </div>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 rounded-xl" />
      {/* Kestrel logo badge on hover */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/60 rounded-lg px-2 py-1">
          <p className="text-primary text-xs font-bold">KESTREL</p>
        </div>
      </div>
    </div>
  );
}
