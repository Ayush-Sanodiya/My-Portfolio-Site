import { motion } from "motion/react";

const clientLogos = [
  "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
  "https://cdn.worldvectorlogo.com/logos/nike-11.svg",
  "https://cdn.worldvectorlogo.com/logos/adidas-9.svg",
  "https://cdn.worldvectorlogo.com/logos/apple-11.svg",
  "https://cdn.worldvectorlogo.com/logos/samsung-6.svg",
  "https://cdn.worldvectorlogo.com/logos/coca-cola-2021.svg",
  "https://cdn.worldvectorlogo.com/logos/mcdonalds-15.svg",
  "https://cdn.worldvectorlogo.com/logos/starbucks.svg",
];

export default function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] flex flex-col justify-center overflow-hidden pt-12 pb-20 sm:py-28 md:py-32 relative rounded-t-[40px] sm:rounded-t-[60px] -mt-20 sm:-mt-16 md:-mt-20 z-10">
      <div className="max-w-7xl mx-auto mb-8 sm:mb-20 md:mb-24">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,8vw,120px)] text-[#D7E2EA]">
          Trusted By
        </h2>
      </div>
      
      <div className="flex flex-col gap-12 md:gap-20">
        {/* Logos Marquee - Moving Right to Left */}
        <div className="flex whitespace-nowrap">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 md:gap-24 items-center flex-shrink-0 px-12"
          >
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((src, i) => (
              <div key={i} className="flex-shrink-0 transition-all duration-500 hover:scale-110 opacity-80 hover:opacity-100 group">
                <img
                  src={src}
                  loading="lazy"
                  className="h-8 sm:h-12 md:h-16 w-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(215,226,234,0.4)]"
                  alt={`Client Logo ${i}`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
