import { motion } from "motion/react";

export default function ContactButton() {
  return (
    <motion.a
      href="https://wa.me/916264735399"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
      }}
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-14 md:py-5 outline-white outline-2 -outline-offset-3 text-white font-medium uppercase tracking-[0.2em] text-[10px] sm:text-xs md:text-lg transition-all duration-300"
    >
      Contact Me
    </motion.a>
  );
}
