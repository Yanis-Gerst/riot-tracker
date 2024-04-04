import { IOverallStats } from "@/types/player";
import Image from "next/image";
import React from "react";

interface Props {
  statName: keyof Omit<IOverallStats, "playTime" | "gameType">;
  value: any;
}

const displayStatName: Record<
  keyof Omit<IOverallStats, "playTime" | "gameType">,
  string
> = {
  averageKDA: "Average KD/A",
  averageGoldMin: "Average Gold/Min",
  goldDiff: "Gold Diff @14",
  xpDiff: "Xp Diff @14",
  csDiff: "CS Diff @14",
  averageCsMin: "Average CS/Min",
  visionScore: "Vision Score/Min",
  damagePerMin: "Average Damage/Min",
  soloKill: "Solo Kill",
  mainChampions: "Main Champions",
};
const StatCard: React.FC<Props> = ({ statName, value }) => {
  const isDiffStat = statName.includes("Diff");

  return (
    <div className="p-2 basis-1/5 flex flex-col gap-1 font-bold whitespace-nowrap">
      <p className="text-sm text-slate-800 ">{displayStatName[statName]}</p>
      {isDiffStat && typeof value === "number" ? (
        <p className={value > 0 ? "text-green-500" : "text-red-500"}>
          {value > 0 ? "+" : "-"}
          {value}
        </p>
      ) : statName === "averageKDA" ? (
        <p className="text-xs text-slate-500">
          {value.kill} | {value.death} | {value.assist}
        </p>
      ) : statName === "mainChampions" ? (
        <div className="flex gap-1">
          {value.map((championSrc: string) => (
            <img
              className="rounded-full"
              key={championSrc}
              src={championSrc}
              width={32}
              height={32}
              alt="championIcon"
            />
          ))}
        </div>
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
};

export default StatCard;
