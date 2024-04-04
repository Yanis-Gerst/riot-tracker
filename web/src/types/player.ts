export type IGameType = "rankedSolo" | "rankedFlex" | "normalDraft" | "all";
export type ITier =
  | "iron"
  | "bronze"
  | "silver"
  | "gold"
  | "platinium"
  | "diamond"
  | "master"
  | "grandMaster"
  | "challenger";

export type ISummoner = {
  icon: string;
  level: number;
  name: string;
};

export type IMatchStat = {
  perMinute: number;
  total: number;
  diffAt14: number;
};

export type IKda = {
  kill: string;
  death: string;
  assists: string;
};

export type IFriendPlayer = {
  name: string;
  icon: string;
  win: number;
  lose: number;
};

export type IChampionStats = {
  championIconSrc: string;
  name: string;
  lpGain: number;
  kda: IKda;
  winRate: number;
  numberOfGames: number;
};

export type ISeasonRank = {
  season: string;
  rank: ITierData;
};

export type IOverallStats = {
  gameType: IGameType;
  playTime: number;
  averageKDA: IKda;
  averageGoldMin: number;
  goldDiff: number;
  xpDiff: number;
  csDiff: number;
  averageCsMin: number;
  visionScore: number;
  damagePerMin: number;
  soloKill: number;
  mainChampions: string[]; // Remplacer "any[]" par le type approprié pour mainChampions
};

export type IPlayerGameData = {
  champion: string;
  championIconSrc: string;
  summonerName: string;
};

export type IMatchHistory = {
  isWin: boolean;
  gameType: string;
  date: string;
  gameDuration: number;
  championPlay: string;
  championIconSrc: string;
  summoners: string[]; // Remplacer "string[]" par le type approprié pour summoners
  runes: string[];
  averageKDA: IKda; // Remplacer "any" par le type approprié pour averageKDA
  cs: IMatchStat; // Remplacer "any" par le type approprié pour cs
  vision: IMatchStat; // Remplacer "any" par le type approprié pour vision
  items: string[]; // Remplacer "any[]" par le type approprié pour items
  blueTeam: any[]; // Remplacer "any[]" par le type approprié pour blueTeam
  redTeam: any[]; // Remplacer "any[]" par le type approprié pour redTeam
};

export type IRankData = {
  lp: number;
  win: number;
  lose: number;
  rank: ITierData;
};

export type ITierData = {
  division: number;
  tier: ITier;
};

export type IPlayerData = {
  player: ISummoner;
  currentRank: {
    rankedSolo: IRankData;
    rankedFlex: IRankData;
  };
  seasonsRank: ISeasonRank[];
  overallStats: IOverallStats[];
  matchHistory: IMatchHistory[];
  championsStats: IChampionStats[];
  friendsPlayers: IFriendPlayer[];
};
