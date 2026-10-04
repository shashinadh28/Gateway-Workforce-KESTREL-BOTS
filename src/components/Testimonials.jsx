import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Aldryn Estacio',
    tagline: 'Adventure Filmmaker & Dog Dad',
    quote: 'Incredible footage and so easy to use. Feels like having a personal filmmaker.',
    rating: 5,
    videoLabel: 'Trail Ride With Kestrel Demo',
  },
  {
    id: 2,
    name: 'Sarah Kim',
    tagline: 'Solo Trekker & Alpinist',
    quote: 'Kestrel captured angles I never could have on my own. Game changer!',
    rating: 5,
    videoLabel: 'Alpine Summit Follow Test',
  },
  {
    id: 3,
    name: 'Cole Shoultz',
    tagline: 'Action Sports Enthusiast',
    quote: 'My first two-hour demo was so much fun, I really want one for myself!',
    rating: 5,
    videoLabel: 'Snowboard Terrain Park Run',
  },
];

export default function Testimonials() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handlePrev = () => {
    setScrollIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-24 bg-[#08090C] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Title and Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Why People Love Kestrel
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Real stories. Real adventures.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#1D75FE]/40 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#1D75FE]/40 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#0E1118] p-5 flex flex-col justify-between hover:border-[#1D75FE]/35 hover:shadow-xl hover:shadow-[#1D75FE]/5 transition-all duration-300 group"
            >
              <div>
                {/* Video Preview Holder with Play Button */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-[#1A1F2B] to-[#0A0D14] border border-white/10 mb-4 flex items-center justify-center group-hover:border-[#1D75FE]/30 transition-colors">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors pointer-events-none" />
                  
                  {/* Play Button */}
                  <div className="relative z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#1D75FE] group-hover:bg-[#1D75FE]/20 transition-all duration-200">
                    <Play size={16} fill="white" className="text-white ml-0.5" />
                  </div>

                  <span className="absolute bottom-2 left-2 text-[10px] text-gray-300 bg-black/60 backdrop-blur px-2 py-0.5 rounded font-mono">
                    {item.videoLabel}
                  </span>
                </div>

                {/* Author Name */}
                <h3 className="text-white text-sm font-bold tracking-tight">
                  {item.name}
                </h3>

                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 my-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="fill-amber-400 text-amber-400 stroke-none"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06]">
                <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">
                  Verified Backer · Kestrel Founder Edition
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
