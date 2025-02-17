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
        "w-full max-w-4xl mx-auto bg-gradient-to-br from-slate-900/90 to-slate-800/90",
        "rounded-xl shadow-2xl transition-all duration-500 transform backdrop-blur-lg",
        "hover:scale-[1.02] border border-white/10",
        "perspective-1000 backface-hidden",
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {/* Left side - Player Image and Basic Info */}
        <div className="space-y-6">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <img
              src={player.imageUrl}
              alt={player.name}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {player.name}
                  </h2>
                  <p className="text-gray-300">{player.role}</p>
                </div>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold">
                  {player.rank}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src={`https://flagcdn.com/w40/id.png`}
                  alt="Indonesia"
                  className="w-6 h-4 object-cover rounded"
                />
                <span className="text-gray-300">{player.nationality}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-gray-400 text-sm">Primary Weapon</h3>
                <p className="text-white flex items-center">
                  <Sword className="w-4 h-4 mr-2" />
                  {player.gears.primary}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-400 text-sm">Secondary</h3>
                <p className="text-white flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  {player.gears.secondary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Stats */}
        <div className="space-y-6">
          <PlayerStatsComponent stats={player.stats} />

          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-3">Specialization</h3>
            <div className="flex flex-wrap gap-2">
              {player.specialization.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm flex items-center"
                >
                  <Target className="w-3 h-3 mr-1.5" />
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
