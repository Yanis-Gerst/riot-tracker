import { IPlayerGameData } from "@/types/player";
import React from "react";

interface Props {
  playersGameData: IPlayerGameData[];
  reverse?: boolean;
}
const PlayersWidget: React.FC<Props> = ({ playersGameData, reverse }) => {
  return (
    <div
      className={`flex flex-col gap-1 ${reverse ? "items-start" : "items-end"}`}
    >
      {playersGameData.map((playerGameData) => (
        <div
          key={playerGameData.summonerName}
          className={`max-w-[80px] flex gap-2 text-xs items-end ${
            reverse ? "flex-flow-reverse" : ""
          }`}
        >
          <p className="truncate">{playerGameData.summonerName}</p>
          <img
            src={playerGameData.championIconSrc}
            width={16}
            height={16}
            alt="champion Icon"
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default PlayersWidget;
