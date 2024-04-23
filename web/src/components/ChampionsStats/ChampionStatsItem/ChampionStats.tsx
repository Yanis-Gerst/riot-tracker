import { IChampionStats } from "@/types/player";
import React from "react";

interface Props {
  championStats: IChampionStats;
}

const ChampionStats: React.FC<Props> = ({ championStats }) => {
  return (
    <div className="flex px-3 py-2 basis-full flex-row flex-nowrap justify-between text-sm border-t border-slate-200">
      <div className="flex gap-2">
        <img
          className="mr-2 rounded-full w-[40px] h-[40px]"
          src={championStats.championIconSrc}
          width={40}
          height={40}
        />
        <div className="flex flex-col font-bold">
          <p className=" text-gray-700 text-base">{championStats.name}</p>
          <p className="text-xs">
            <span
              className={`${
                championStats.lpGain > 0 ? "text-green-500" : "text-red-500"
              } `}
            >
              +{championStats.lpGain + " "}
            </span>{" "}
            LP
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-base">
          {championStats.kda.kill} | {championStats.kda.death} |{" "}
          {championStats.kda.assists}
        </p>
        <p>
          {`${
            (parseInt(championStats.kda.kill) +
              parseInt(championStats.kda.assists)) /
            parseInt(championStats.kda.death)
          }
          `}{" "}
          <span className="text-slate-400 font-bold">KDA</span>
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p
          className={`${
            championStats.winRate > 50 ? "text-green-500" : "text-red-500"
          } font-bold`}
        >
          {championStats.winRate}%
        </p>
        <p className="text-slate-500">{championStats.numberOfGames} played</p>
      </div>
    </div>
  );
};

export default ChampionStats;
