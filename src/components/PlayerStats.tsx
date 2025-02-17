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
}

const StatItem: React.FC<StatItemProps> = ({ icon, label, value }) => (
  <div className="space-y-2">
    <p className="text-gray-400 text-sm flex items-center">
      {icon}
      {label}
    </p>
    <p className="text-white font-semibold">{value}</p>
  </div>
);

export const PlayerStats: React.FC<PlayerStatsProps> = ({ stats }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Player Statistics</h3>
        <User className="w-5 h-5 text-blue-400" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <StatItem
          icon={<Target className="w-4 h-4 mr-2" />}
          label="Most Played Agent"
          value={stats.mostPlayedAgent}
        />
        <StatItem
          icon={<Crosshair className="w-4 h-4 mr-2" />}
          label="KDA Ratio"
          value={stats.kda}
        />
        <StatItem
          icon={<Timer className="w-4 h-4 mr-2" />}
          label="Matches Played"
          value={stats.matchesPlayed.toString()}
        />
        <StatItem
          icon={<Trophy className="w-4 h-4 mr-2" />}
          label="Matches Won"
          value={stats.matchesWon.toString()}
        />
        <StatItem
          icon={<Bomb className="w-4 h-4 mr-2" />}
          label="Total Damage"
          value={stats.totalDamage.toLocaleString()}
        />
        <StatItem
          icon={<Skull className="w-4 h-4 mr-2" />}
          label="Headshot Count"
          value={stats.headshotCount.toLocaleString()}
        />
      </div>
    </div>
  );
};
