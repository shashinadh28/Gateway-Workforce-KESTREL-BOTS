import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BatteryCharging, Scale, Maximize2, Aperture, HardDrive, ShieldCheck } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];

const specsData = [
  {
    icon: BatteryCharging,
    title: 'Battery Life',
    primary: '1.5 hr per battery',
    secondary: '(up to 4.5+ h)',
  },
  {
    icon: Scale,
    title: 'Weight',
    primary: '3.86 lbs',
    secondary: '(1.75 kg)',
  },
  {
    icon: Maximize2,
    title: 'Dimensions',
    primary: '8.5 × 7.1 × 7.1 in',
    secondary: '(21.5 × 18 × 18 cm)',
  },
  {
    icon: Aperture,
    title: 'Camera',
    primary: '4K @ 30fps',
    secondary: '2K @ 60fps',
  },
  {
    icon: HardDrive,
    title: 'Storage',
    primary: '32GB Internal',
    secondary: '+ microSD Slot',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy',
    primary: 'Follows & films',
    secondary: 'entirely on-device',
  },
];

// Spotlight follows the cursor inside each card via CSS variables
function handleMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

export default function KeySpecs() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.1 } },
  };

  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const cardIn = {
    hidden: { opacity: 0, y: reduce ? 0 : 36, scale: reduce ? 1 : 0.94 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      id="specs"
      className="relative py-16 sm:py-24 bg-[#08090C] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Soft ambient glow behind the grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] max-w-full h-72 rounded-full bg-[#1D75FE]/[0.07] blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6"
      >
        {/* ───────── Header ───────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <motion.div variants={rise} className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Key Specs
              </h2>
              <span className="text-[#1D75FE] text-[11px] font-semibold bg-[#1D75FE]/10 border border-[#1D75FE]/25 px-3 py-1 rounded-full">
                Built to keep up
              </span>
            </motion.div>
            {/* Underline draws in once */}
            <motion.div
              variants={{
                hidden: { scaleX: 0 },
                show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
              }}
              style={{ originX: 0 }}
              className="mt-4 h-px w-24 bg-gradient-to-r from-[#1D75FE] to-transparent"
            />
          </div>

          <motion.button
            variants={rise}
            type="button"
            whileTap={{ scale: 0.97 }}
            className="group relative self-start sm:self-auto inline-flex items-center gap-2 overflow-hidden bg-[#1D75FE] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#1D75FE]/30 transition-all duration-300 hover:bg-[#1565E6] hover:shadow-xl hover:shadow-[#1D75FE]/50 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D75FE]"
          >
            {/* Shine sweep */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 group-hover:opacity-100 group-hover:translate-x-[450%] transition-all duration-700 ease-out"
            />
            <span className="relative">View Full Specs</span>
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </div>

        {/* ───────── Spec cards ───────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {specsData.map((spec) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                variants={cardIn}
                onMouseMove={handleMove}
                whileHover={reduce ? undefined : { y: -8 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1118] p-5 sm:p-6 flex flex-col items-center text-center transition-[border-color,box-shadow] duration-500 hover:border-[#1D75FE]/50 hover:shadow-2xl hover:shadow-[#1D75FE]/20"
                style={{ '--mx': '50%', '--my': '0%' }}
              >
                {/* Cursor-following spotlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(180px circle at var(--mx) var(--my), rgba(29,117,254,0.18), transparent 70%)',
                  }}
                />
                {/* Top accent line grows from center on hover */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1D75FE] to-transparent transition-all duration-500 group-hover:w-full"
                />

                {/* Icon */}
                <div className="relative mb-5">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl bg-[#1D75FE]/40 blur-lg opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                  />
                  <div className="relative w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1D75FE] group-hover:border-[#1D75FE] group-hover:-rotate-6 group-hover:scale-110">
                    <Icon
                      className="w-5 h-5 text-[#1D75FE] transition-colors duration-300 group-hover:text-white"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>

                <span className="relative text-gray-400 text-xs font-medium mb-1.5 transition-colors duration-300 group-hover:text-gray-300">
                  {spec.title}
                </span>
                <p className="relative text-white text-sm font-semibold tracking-tight leading-snug">
                  {spec.primary}
                </p>
                <p className="relative text-gray-500 text-[11px] mt-1 transition-colors duration-300 group-hover:text-gray-400">
                  {spec.secondary}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}