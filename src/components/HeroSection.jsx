import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section
      id="experience"
      className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5yYZ4Ww4QPj7b-4j/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          The private messaging suite for the world’s most discerning
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl"
        >
          Encrypted end-to-end. Concierge-on-call. Designed with quiet luxury
          and absolute discretion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <button className="rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
            Request Invitation
          </button>
          <button className="rounded-full border border-white/30 text-white px-6 py-3 font-medium hover:border-white/60 transition">
            Explore Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}
