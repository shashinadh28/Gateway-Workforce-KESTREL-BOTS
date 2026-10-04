import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MediaPlaceholder from './MediaPlaceholder';

export default function Features() {
  return (
    <section id="features" className="py-24 space-y-28 bg-[#08090C] overflow-hidden">
      {/* 01: You Explore — Kestrel Follows */}
      <FeatureSection01 />

      {/* 02: You Move — Kestrel Films */}
      <FeatureSection02 />

      {/* 03: You Go — Kestrel Navigates */}
      <FeatureSection03 />
    </section>
  );
}

// ------------------------------------------------------------------
// 01: You Explore — Kestrel Follows
// ------------------------------------------------------------------
function FeatureSection01() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Video / Media Holder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <MediaPlaceholder
            videoSrc="/videos/treking-video.mp4"
            label="Kestrel Trail Follow"
            sublabel="Cinematic 4K Trail Footage"
            aspect="aspect-[16/10]"
            overlayBadge="ALL-TERRAIN FOLLOW"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <span className="text-[#1D75FE] text-xs font-mono font-bold tracking-widest uppercase mb-3 block">
            01
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            You Explore
            <br />
            <span className="text-white">Kestrel Follows</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
            Kestrel stays right beside you, from rocky mountain trails to steep and uneven terrain. Its all-terrain wheels adapt to the path while intelligent tracking keeps you in frame.
          </p>

          {/* Stats Grid: 4 items */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">17.9 mph</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Top speed</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">All-Terrain</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Built for rough paths</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">Smart Following</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Keeps pace with you</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">Obstacle Aware</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Navigates changing terrain</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// 02: You Move — Kestrel Films
// ------------------------------------------------------------------
function FeatureSection02() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 order-2 lg:order-1"
        >
          <span className="text-[#1D75FE] text-xs font-mono font-bold tracking-widest uppercase mb-3 block">
            02
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            You Move
            <br />
            <span className="text-white">Kestrel Films</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
            Whether you're skating through a park or picking up speed on the track, Kestrel stays alongside you and captures the movement without getting in your way.
          </p>

          {/* Metric Badges: 4 items */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">AI Tracking</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Keeps you centered</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">4K Capture</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Sharp cinematic footage</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">Active Follow</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Matches your movement</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">Stabilized</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Smooth footage on the move</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Video / Media Holder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 order-1 lg:order-2"
        >
          <MediaPlaceholder
            videoSrc="/videos/skating-video.mp4"
            label="Kestrel Skater Follow"
            sublabel="Cinematic 4K · Motion Mode"
            aspect="aspect-[16/10]"
            overlayBadge="ACTIVE TRACKING"
          />
        </motion.div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// 03: You Go — Kestrel Navigates
// ------------------------------------------------------------------
function FeatureSection03() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Video / Media Holder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <MediaPlaceholder
            videoSrc="/videos/traffic-video.mp4"
            label="Kestrel City Navigation"
            sublabel="Real-Time Avoidance · Urban Mode"
            aspect="aspect-[16/10]"
            overlayBadge="URBAN READY"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <span className="text-[#1D75FE] text-xs font-mono font-bold tracking-widest uppercase mb-3 block">
            03
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            You Go
            <br />
            <span className="text-white">Kestrel Navigates</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
            From pedestrian crossings to busy city streets, Kestrel understands its surroundings and moves safely through changing environments.
          </p>

          {/* Stats Grid: 4 items */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">Obstacle Detection</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Recognizes objects around it</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">Smart Navigation</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Plans its path in real time</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">Urban Ready</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Built for unpredictable environments</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1D75FE]/30 transition-colors">
              <p className="text-[#1D75FE] font-black text-base md:text-lg">Independent Movement</p>
              <p className="text-gray-400 text-xs mt-1 font-medium">Moves without constant control</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}