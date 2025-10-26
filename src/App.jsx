import LuxuryNavbar from "./components/LuxuryNavbar";
import HeroSection from "./components/HeroSection";
import ChatWindow from "./components/ChatWindow";
import FeaturesGrid from "./components/FeaturesGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-black font-geist antialiased">
      <LuxuryNavbar />
      <main>
        <HeroSection />
        <ChatWindow />
        <FeaturesGrid />
        <section className="bg-black text-white border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Aurelia. A private communications house.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a className="hover:text-white transition" href="#">Privacy</a>
              <a className="hover:text-white transition" href="#">Terms</a>
              <a className="hover:text-white transition" href="#">Compliance</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
