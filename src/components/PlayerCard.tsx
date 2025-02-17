import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Shield, Sword, Target } from "lucide-react";
import type { PlayerStats } from "../types/player";
import { cn } from "../utils/cn";
import { PlayerStats as PlayerStatsComponent } from "./PlayerStats";

interface PlayerCardProps {
  player: PlayerStats;
  isActive: boolean;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, isActive }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "w-full max-w-4xl mx-auto",
        "rounded-xl shadow-2xl transition-all duration-500 transform backdrop-blur-lg",
        "hover:scale-[1.02] border border-white/10",
        "perspective-1000 backface-hidden overflow-hidden",
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
      )}
    >
      <div className="relative w-full h-full bg-gradient-to-br from-violet-300/10 to-blue-300/5">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
          {/* Left side - Player Image and Basic Info */}
          <div className="space-y-8">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-300/20 to-transparent mix-blend-overlay" />
              <img
                src={player.imageUrl}
                alt={player.name}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="special-font text-3xl font-bold text-white">
                      {player.name}
                    </h2>
                    <p className="text-blue-50/80 font-general uppercase text-sm mt-1">
                      {player.role}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-violet-300/20 text-violet-300 rounded-full text-sm font-general uppercase">
                    {player.rank}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={`https://flagcdn.com/w40/id.png`}
                    alt="Indonesia"
                    className="w-6 h-4 object-cover rounded"
                  />
                  <span className="text-blue-50/80 font-general uppercase text-sm">
                    {player.nationality}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="text-blue-50/60 text-sm font-general uppercase">
                    Primary
                  </h3>
                  <p className="text-white flex items-center font-general">
                    <Sword className="w-4 h-4 mr-2 text-violet-300" />
                    {player.gears.primary}
                  </p>
                </div>
                <div className="space-y-2 bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="text-blue-50/60 text-sm font-general uppercase">
                    Secondary
                  </h3>
                  <p className="text-white flex items-center font-general">
                    <Shield className="w-4 h-4 mr-2 text-violet-300" />
                    {player.gears.secondary}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="space-y-8">
            <PlayerStatsComponent stats={player.stats} />

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-blue-50/60 text-sm font-general uppercase mb-4">
                Specialization
              </h3>
              <div className="flex flex-wrap gap-3">
                {player.specialization.map((spec) => (
                  <span
                    key={spec}
                    className="px-4 py-2 bg-violet-300/10 text-violet-300 rounded-full text-sm flex items-center font-general uppercase"
                  >
                    <Target className="w-3 h-3 mr-2" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};