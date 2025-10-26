import { Star, Shield, Crown, Home } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Crown,
    title: "Concierge On-Call",
    desc: "Human assistants globally available 24/7 to coordinate travel, dining, and discreet arrangements.",
  },
  {
    icon: Shield,
    title: "Sovereign Security",
    desc: "Hardware keys, biometric lock, and private routing through our sovereign nodes in CH and SG.",
  },
  {
    icon: Star,
    title: "Signature Rooms",
    desc: "Curate invite-only salons with read receipts off by default and ephemeral threads by design.",
  },
  {
    icon: Home,
    title: "House Accounts",
    desc: "Family offices and executive assistants get controlled access with audit trails you control.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Quiet power. Thoughtful restraint.
          </h3>
          <p className="mt-4 text-white/70">
            Built for precision and privacy. No dopamine traps. Everything you
            need; nothing you don’t.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center mb-4 shadow-[0_0_24px_rgba(255,215,0,0.25)]">
                <f.icon className="h-5 w-5 text-black" />
              </div>
              <h4 className="font-medium text-lg">{f.title}</h4>
              <p className="text-sm text-white/70 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
