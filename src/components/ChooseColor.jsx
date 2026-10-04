import { useState } from 'react';

const colors = [
  { name: 'Aurora', dots: ['#FF6B35', '#F5A623'], bg: 'from-orange-900/30 to-amber-900/20', border: 'border-orange-500/30' },
  { name: 'Midnight', dots: ['#1a1a2e', '#16213e'], bg: 'from-blue-900/20 to-slate-900/30', border: 'border-blue-500/20' },
  { name: 'Forest', dots: ['#2d4a1e', '#4a7c3f'], bg: 'from-green-900/20 to-emerald-900/20', border: 'border-green-500/20' },
  { name: 'Snow', dots: ['#e8e8e8', '#ffffff'], bg: 'from-gray-600/20 to-gray-500/20', border: 'border-gray-400/30' },
];

export default function ChooseColor() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-20 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left text */}
          <div className="md:w-2/5 reveal-left">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Make it Yours</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Choose Your<br />
              <span className="gradient-text">Colour</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Customize Kestrel with easy-to-swap accessories and create a look that's uniquely yours.
            </p>

            {/* Color pickers */}
            <div className="flex flex-col gap-3">
              {colors.map((color, i) => (
                <button
                  key={color.name}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 text-left ${
                    selected === i
                      ? `bg-gradient-to-r ${color.bg} ${color.border} border`
                      : 'border-white/10 bg-white/5 hover:bg-white/8'
                  }`}
                >
                  <div className="flex gap-1">
                    {color.dots.map((dot, j) => (
                      <span
                        key={j}
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: dot }}
                      />
                    ))}
                  </div>
                  <span className={`text-sm font-semibold ${selected === i ? 'text-white' : 'text-gray-400'}`}>
                    {color.name}
                  </span>
                  {selected === i && (
                    <span className="ml-auto text-primary">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right — color variant images grid */}
          <div className="md:w-3/5 reveal-right">
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color, i) => (
                <div
                  key={color.name}
                  onClick={() => setSelected(i)}
                  className={`relative h-36 rounded-xl border cursor-pointer transition-all duration-300 bg-gradient-to-br ${color.bg} ${
                    selected === i ? `${color.border} scale-105 shadow-lg` : 'border-white/10 hover:border-white/20'
                  } flex items-center justify-center overflow-hidden group`}
                >
                  {/* Image placeholder */}
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 mx-auto mb-1 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      </svg>
                    </div>
                    <p className="text-white/60 text-xs">{color.name}</p>
                  </div>
                  {/* Color dots overlay */}
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    {color.dots.map((dot, j) => (
                      <span
                        key={j}
                        className="w-2.5 h-2.5 rounded-full border border-white/30"
                        style={{ backgroundColor: dot }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
