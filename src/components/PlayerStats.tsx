import React from "react";
import {
  User,
  Target,
  Crosshair,
  Timer,
  Trophy,
  Bomb,
  Skull,
} from "lucide-react";
import type { PlayerStats as PlayerStatsType } from "../types/player";

interface PlayerStatsProps {
  stats: PlayerStatsType["stats"];
}

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: string;
}

const StatItem: React.FC<StatItemProps> = ({ 
  icon, 
  label, 
  value,
  color = "text-violet-300"
}) => (
  <div className="space-y-2 bg-white/5 rounded-lg p-4 backdrop-blur-sm">
    <p className="text-blue-50/60 text-sm font-general uppercase flex items-center">
      <span className={`mr-2 ${color}`}>{icon}</span>
      {label}
    </p>
    <p className="text-white font-general text-lg">{value}</p>
  </div>
);

export const PlayerStats: React.FC<PlayerStatsProps> = ({ stats }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white/5 rounded-lg p-6 backdrop-blur-sm">
        <h3 className="special-font text-2xl text-white uppercase">
          Player St<b>a</b>ts
        </h3>
        <User className="w-5 h-5 text-violet-300" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatItem
          icon={<Target className="w-4 h-4" />}
          label="Main Agent"
          value={stats.mostPlayedAgent}
        />
        <StatItem
          icon={<Crosshair className="w-4 h-4" />}
          label="KDA Ratio"
          value={stats.kda}
          color="text-yellow-300"
        />
        <StatItem
          icon={<Timer className="w-4 h-4" />}
          label="Matches"
          value={stats.matchesPlayed.toString()}
        />
        <StatItem
          icon={<Trophy className="w-4 h-4" />}
          label="Victories"
          value={stats.matchesWon.toString()}
          color="text-yellow-300"
        />
        <StatItem
          icon={<Bomb className="w-4 h-4" />}
          label="Damage"
          value={stats.totalDamage.toLocaleString()}
        />
        <StatItem
          icon={<Skull className="w-4 h-4" />}
          label="Headshots"
          value={stats.headshotCount.toLocaleString()}
          color="text-yellow-300"
        />
      </div>
    </div>
  );
};