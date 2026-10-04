import { motion } from 'framer-motion';

// Image lives in: public/Make It Yours/Make It Yours.png
// Files in /public are served from the site root, spaces must be URL-encoded.
const BG_IMAGE = '/Make%20It%20Yours/Make%20It%20Yours.png';

export default function MakeItYours() {
  return (
    <section
      aria-labelledby="make-it-yours-heading"
      className="relative w-full overflow-hidden bg-[#06090F] border-t border-white/[0.06]"
    >
      {/* Background image: robots sit on the right, so anchor to the right edge */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-[position:75%_center] lg:bg-right"
        style={{ backgroundImage: `url("${BG_IMAGE}")` }}
        aria-hidden="true"
      />

      {/* Left-side fade so the text stays readable over the image */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#06090F] via-[#06090F]/85 to-transparent lg:via-[#06090F]/60 lg:to-transparent"
        aria-hidden="true"
      />
      {/* Soft top/bottom fade to blend with neighbouring sections */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#06090F]/60 via-transparent to-[#06090F]/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] flex items-center py-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-md lg:max-w-lg"
        >
          <h2
            id="make-it-yours-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-5"
          >
            Make It Yours
          </h2>
          <p className="text-gray-300/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-sm lg:max-w-md">
            Customize Kestrel with easy-to-swap accessories and create a look
            that&apos;s uniquely yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}