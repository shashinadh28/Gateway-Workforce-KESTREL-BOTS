import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

// Image lives in: public/Be Part of the Journey/Be Part of the Journey.webp
// Served from the site root; spaces must be URL-encoded.
const BG_IMAGE = '/Be%20Part%20of%20the%20Journey/Be%20Part%20of%20the%20Journey.webp';

const EASE = [0.22, 1, 0.36, 1];

export default function Community() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  // Gentle mouse parallax on the background photo
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const bgX = useTransform(sx, [-0.5, 0.5], [14, -14]);
  const bgY = useTransform(sy, [-0.5, 0.5], [8, -8]);

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.25 } },
  };
  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section
      id="community"
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative isolate overflow-hidden bg-[#08090C] border-t border-white/[0.06] min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] flex items-center"
    >
      {/* Background photo: settles in on viewport entry, drifts with the cursor, zooms on hover */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: reduce ? 1 : 1.12, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute -inset-4 -z-10"
      >
        <motion.div
          style={{ x: bgX, y: bgY, backgroundImage: `url("${BG_IMAGE}")` }}
          className="absolute inset-0 bg-cover bg-[position:62%_center] lg:bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        />
      </motion.div>

      {/* Fades: left for text legibility, bottom to blend into the next section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06090F]/90 via-[#06090F]/55 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 -z-10 bg-gradient-to-t from-[#08090C] to-transparent"
      />
      {/* Warm sun-glow that brightens when the section is hovered */}
      <div
        aria-hidden="true"
        className="absolute right-[28%] top-[34%] -z-10 h-64 w-64 rounded-full bg-orange-300/0 blur-3xl transition-colors duration-1000 group-hover:bg-orange-300/15"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20"
      >
        <motion.h2
          variants={rise}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-5 max-w-xl"
        >
          Be Part of the Journey
        </motion.h2>

        <motion.p
          variants={rise}
          className="text-gray-300/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-9"
        >
          Join the Gateway Kestrel Bots community and experience a new way to capture your world.
        </motion.p>

        <motion.div variants={rise} className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Primary */}
          <a
            href="#specs"
            className="group/btn relative inline-flex items-center gap-2.5 overflow-hidden bg-[#1D75FE] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#1D75FE]/30 transition-all duration-300 hover:bg-[#1565E6] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1D75FE]/50 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D75FE]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-[450%] transition-all duration-700 ease-out"
            />
            <span className="relative">Get Yours</span>
            <ArrowRight
              size={16}
              strokeWidth={2.5}
              className="relative transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </a>

          {/* Secondary */}
          <button
            type="button"
            className="group/btn inline-flex items-center gap-2.5 bg-black/30 backdrop-blur-md border border-white/25 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover/btn:bg-white group-hover/btn:scale-110">
              <Play
                size={10}
                fill="currentColor"
                className="ml-0.5 text-white transition-colors duration-300 group-hover/btn:text-[#08090C]"
              />
            </span>
            Watch Video
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}