import { Crown, Shield, User } from "lucide-react";

export default function LuxuryNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-[0_0_24px_rgba(255,215,0,0.35)]">
            <Crown className="h-5 w-5 text-black" />
          </div>
          <div className="text-white">
            <p className="font-semibold tracking-wide">Aurelia Chat</p>
            <p className="text-xs text-white/60 -mt-1">Invite-only</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#security" className="hover:text-white transition flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </a>
          <a href="#features" className="hover:text-white transition">Features</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition shadow-[0_10px_30px_rgba(255,255,255,0.15)]">
          <User className="h-4 w-4" />
          Private Suite
        </button>
      </div>
    </header>
  );
}
