export interface PlayerStats {
  name: string;
  role: string;
  nationality: string;
  gears: {
    primary: string;
    secondary: string;
  };
  rank: string;
  specialization: string[];
  imageUrl: string;
  stats: {
    mostPlayedAgent: string;
    kda: string;
    matchesPlayed: number;
    matchesWon: number;
    totalDamage: number;
    headshotCount: number;
  };
  // Add these properties if they are relevant
  level?: string; // Optional if not all players have a level
  attack?: number; // Optional if not all players have an attack value
  defense?: number; // Optional if not all players have a defense value
  accuracy?: number; // Optional if not all players have an accuracy value
}
