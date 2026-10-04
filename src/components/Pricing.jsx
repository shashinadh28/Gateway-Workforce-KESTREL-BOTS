const packs = [
  {
    name: 'Kestrel Bot',
    price: '$399',
    tag: 'Base',
    items: ['In the box:', 'Kestrel, battery, USB-C cable, remote'],
    cta: 'Pre-order →',
    featured: true,
  },
  {
    name: 'Adventure Pack',
    price: '$49',
    tag: 'Add-on',
    items: ['Straps, protective bumpers,', 'camera filters, clinchers.'],
    cta: 'Add to Cart',
    featured: false,
  },
  {
    name: 'Creator Pack',
    price: '$119',
    tag: 'Add-on',
    items: ['2x batteries, charge mounts kit,', 'extended accessories'],
    cta: 'Add to Cart',
    featured: false,
  },
  {
    name: 'Developer Pack',
    price: '$59',
    tag: 'Add-on',
    items: ['Open remote, mounts, repair', 'community, dev tools.'],
    cta: 'Add to Cart',
    featured: false,
  },
];

function PackCard({ pack, index }) {
  return (
    <div
      className={`relative reveal flex flex-col rounded-2xl border p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer ${
        pack.featured
          ? 'bg-gradient-to-b from-primary/10 to-primary/5 border-primary/40 hover:shadow-primary/20'
          : 'bg-white/5 border-white/10 hover:border-primary/20 hover:shadow-white/5'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {pack.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      {/* Price */}
      <div className="mb-3">
        <p className={`text-3xl font-black ${pack.featured ? 'text-primary' : 'text-white'}`}>{pack.price}</p>
        <p className={`text-sm font-semibold mt-0.5 ${pack.featured ? 'text-orange-300' : 'text-gray-400'}`}>{pack.name}</p>
      </div>

      {/* Image placeholder */}
      <div className={`h-24 rounded-lg border mb-3 flex items-center justify-center ${
        pack.featured ? 'border-primary/20 bg-primary/5' : 'border-white/10 bg-white/5'
      }`}>
        <svg className={`w-8 h-8 ${pack.featured ? 'text-primary/40' : 'text-white/20'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Items */}
      <div className="flex-1 mb-4">
        {pack.items.map((item, i) => (
          <p key={i} className="text-gray-500 text-xs leading-relaxed">{item}</p>
        ))}
      </div>

      {/* CTA */}
      <button
        className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
          pack.featured
            ? 'bg-primary text-black hover:bg-orange-400'
            : 'border border-white/20 text-white hover:border-primary hover:text-primary'
        }`}
      >
        {pack.cta}
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="py-20 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Pick Your Pack</p>
          <h2 className="text-4xl md:text-5xl font-black">
            The Robot, <span className="gradient-text">and More</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3">Everything you need on day one. Choose the pack that fits your journey.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packs.map((pack, i) => (
            <PackCard key={pack.name} pack={pack} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
