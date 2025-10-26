import { useEffect, useRef, useState } from "react";
import { Send, Shield } from "lucide-react";
import { motion } from "framer-motion";

const initialMessages = [
  {
    id: 1,
    sender: "Alexandra",
    role: "you",
    text: "Good evening. Wheels down in Geneva at 19:40. Shall I arrange transfer to the chalet?",
    time: "19:02",
  },
  {
    id: 2,
    sender: "Concierge",
    role: "concierge",
    text: "Welcome back. May I confirm Dom Pérignon 2013 on ice and the sauna pre-heated?",
    time: "19:03",
  },
  {
    id: 3,
    sender: "Alexandra",
    role: "you",
    text: "Yes, and please brief security. 3 vehicles, staggered departure.",
    time: "19:05",
  },
];

export default function ChatWindow() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const newMsg = {
      id: Date.now(),
      sender: "Alexandra",
      role: "you",
      text: trimmed,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  return (
    <section id="security" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            A private salon for conversation
          </h2>
          <p className="mt-4 text-white/70">
            Whisper-quiet delivery, ephemeral visibility, and identity controls
            that put you in command. Disappear messages after they’re read, or
            seal them with your private key.
          </p>
          <div className="mt-6 flex items-center gap-3 text-emerald-300/80">
            <Shield className="h-5 w-5" />
            <span className="text-sm">End-to-end encrypted. Zero-knowledge design.</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl overflow-hidden shadow-2xl"
        >
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-black/30">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-white/70">Secure Session</span>
            </div>
            <span className="text-xs text-white/50">Geneva Node · AES-256</span>
          </div>

          <div className="h-96 p-4 space-y-3 overflow-y-auto">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "you" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg ${
                  m.role === "you"
                    ? "bg-white text-black rounded-br-sm"
                    : "bg-white/10 text-white rounded-bl-sm"
                }`}>
                  <p>{m.text}</p>
                  <div className={`mt-2 text-[10px] ${m.role === "you" ? "text-black/60" : "text-white/60"}`}>
                    {m.time}
                  </div>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="p-4 border-t border-white/10 bg-black/30">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Compose with intent…"
                className="flex-1 bg-white/5 text-white placeholder-white/40 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                onClick={sendMessage}
                className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white text-black hover:bg-white/90 transition"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
