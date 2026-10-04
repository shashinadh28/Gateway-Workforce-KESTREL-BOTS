import { motion, useReducedMotion } from 'framer-motion';
import { Gamepad2, Focus } from 'lucide-react';

// Images live in: public/More Than-a-Camera/
// Served from the site root; spaces must be URL-encoded.
const IMAGES = {
  hero: '/More%20Than-a-Camera/More%20Than.webp',
  pilot: '/More%20Than-a-Camera/Pilot%20Mode.webp',
  tracker: '/More%20Than-a-Camera/Motion%20Tracker.webp',
};

const EASE = [0.22, 1, 0.36, 1];

const features = [
  {
    id: 'pilot',
    icon: Gamepad2,
    title: 'Pilot Mode',
    subtitle: 'Let your curiosity lead the way.',
    text: 'Drive Kestrel remotely, capture unique shots or just enjoy the ride from its point of view.',
    image: IMAGES.pilot,
  },
  {
    id: 'tracker',
    icon: Focus,
    title: 'Motion Tracker',
    subtitle: 'Effortless control.',
    text: "Simple controls to make Kestrel travel, follow or film while staying locked on to you, even when you're out of sight.",
    image: IMAGES.tracker,
  },
];

export default function MoreThanCamera() {
  const reduce = useReducedMotion();

  // Parent orchestrates one staggered intro for the whole section
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.05 } },
  };
  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section className="py-16 sm:py-24 bg-[#08090C] border-t border-white/[0.06]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 space-y-5 sm:space-y-6"
      >
        {/* ───────── Hero banner ───────── */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: reduce ? 1 : 0.97 },
            show: { opacity: 1, scale: 1, transition: { duration: 1, ease: EASE } },
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] flex items-center"
        >
          {/* Background image (slow zoom on hover) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-[position:70%_center] lg:bg-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            style={{ backgroundImage: `url("${IMAGES.hero}")` }}
          />
          {/* Readability fades */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#06090F] via-[#06090F]/75 to-transparent lg:via-[#06090F]/50"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#08090C]/90 to-transparent"
          />
          {/* Hover glow ring */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#1D75FE]/0 transition-all duration-500 group-hover:ring-[#1D75FE]/40"
          />

          <div className="relative z-10 px-7 sm:px-12 lg:px-16 py-14 max-w-xl lg:max-w-2xl">
            <motion.h2
              variants={rise}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-5"
            >
              More Than
              <br />
              A Camera
            </motion.h2>
            <motion.p
              variants={rise}
              className="text-gray-300/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md"
            >
              Kestrel isn&apos;t just a tool — it becomes part of your journey.
              Explore, create and experience your world from a whole new perspective.
            </motion.p>
          </div>
        </motion.div>

        {/* ───────── Feature cards ───────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {features.map(({ id, icon: Icon, title, subtitle, text, image }) => (
            <motion.article
              key={id}
              variants={rise}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 min-h-[260px] sm:min-h-[280px] flex items-center transition-[border-color,box-shadow] duration-500 hover:border-[#1D75FE]/50 hover:shadow-2xl hover:shadow-[#1D75FE]/15"
            >
              {/* Background image */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-[position:75%_center] md:bg-right transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url("${image}")` }}
              />
              {/* Left-to-right fade keeps text readable; lightens on hover to reveal the photo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/80 to-[#0A0D14]/10 transition-opacity duration-500 group-hover:opacity-90"
              />
              {/* Light sweep on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[300%] transition-all duration-[1100ms] ease-out"
              />

              <div className="relative z-10 p-6 sm:p-8 max-w-[22rem] sm:max-w-sm">
                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-[#1D75FE] group-hover:border-[#1D75FE] group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">{subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300/90 text-sm leading-relaxed">{text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}