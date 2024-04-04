import { IMatchStat } from "@/types/player";
import React from "react";

interface Props {
  matchStatData: IMatchStat;
  name: string;
  className?: string;
}
const MatchStat: React.FC<Props> = ({ matchStatData, name, className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <p className="font-bold">
        {matchStatData.total}
        <span>
          {"("}
          {matchStatData.perMinute}
          {")"}
          {name}
        </span>
      </p>
      <p className="text-sm">
        +{matchStatData.diffAt14}{" "}
        <span className="text-slate-400 font-bold">@14</span>
      </p>
    </div>
  );
};

export default MatchStat;
