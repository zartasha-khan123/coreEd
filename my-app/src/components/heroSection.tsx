import { cardData } from "@/services/carddata";
import { useEffect, useState } from "react";

export default function HeroPage() {
  // State to manage opacity (fade-in effect)
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in effect after the component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <main className="relative bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[320px]"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(102,86,200,0.45) 0%, rgba(102,86,200,0.22) 30%, rgba(0,0,0,0) 70%)",
          filter: "saturate(110%)",
        }}
      />
    
      <div className="mx-auto max-w-[1200px] px-4 py-14">
        {/* Main Heading with smooth transition */}
        <h2
          className={`text-4xl font-bold text-white text-center transition-opacity duration-1000 ease-in-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
            Transform Your Workflow with AI Agents        
</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((agent) => (
            <div
              key={agent.id}
              className="group rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),_0_30px_80px_rgba(0,0,0,0.55)] transition-all transform hover:scale-105 hover:border-white/20 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),_0_30px_80px_rgba(0,0,0,0.75)] hover:bg-gradient-to-br hover:from-white/[0.07] hover:to-white/[0.05]">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                {agent.icon}
              </div>

              {/* Content */}
              <h3 className="mt-4 text-xl font-semibold text-white">{agent.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{agent.description}</p>

              {/* Category badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                {agent.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
