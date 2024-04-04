import { IMatchHistory } from "@/types/player";
import { camel2title, getDaysDiffWithToday } from "@/utils/utils";
import React from "react";
import KdaWidget from "../KdaWidget";
import MatchStat from "./MatchStat";
import { getRunesImg, rolesImg } from "@/utils/img";
import PlayersWidget from "./PlayersWidget";

interface Props {
  matchData: IMatchHistory;
}

const getStyleConfig = (isWin: boolean) => {
  if (isWin)
    return {
      bg: "bg-green-50",
      leftBoder: "border-green-300",
      label: "Win",
      labelColor: "text-green-500",
    };

  return {
    bg: "bg-red-50",
    leftBoder: "border-red-300",
    label: "Lose",
    labelColor: "text-green-500",
  };
};

const MatchHistory: React.FC<Props> = ({ matchData }) => {
  const matchDate = new Date(matchData.date);
  const styleConfig = getStyleConfig(matchData.isWin);
  return (
    <div
      className={`@container relative px-4 py-2 ${styleConfig.bg} border-l-8 ${styleConfig.leftBoder} pb-8 rounded`}
    >
      <div className="bg-gray-500 absolute left-0 top-0 bottom-0" />
      <div className="flex gap-2 items-center text-sm">
        <p className="font-bold">{camel2title(matchData.gameType)}</p>
        <p className={`${styleConfig.labelColor} font-bold`}>
          {styleConfig.label}
        </p>
        <p className="text-slate-400">{getDaysDiffWithToday(matchDate)}d ago</p>
        <p className="text-slate-400">{matchData.gameDuration}min</p>
      </div>
      <div className="flex gap-2 h-full items-center">
        <div className="flex gap-3 mr-6 items-center">
          <img
            src={matchData.championIconSrc}
            width={40}
            height={40}
            className="h-[40px] rounded-full"
            alt="champion Icon"
          />
          <div className="grid grid-rows-[repeat(2,16px)] grid-cols-[repeat(2,16px)] gap-1">
            <img
              src={matchData.summoners[0]}
              alt="f summoner icon"
              width={16}
              height={16}
            />
            <img
              src={getRunesImg(matchData.runes[0].toLowerCase())?.src}
              alt="primary rune"
              width={16}
              height={16}
            />
            <img
              src={matchData.summoners[1]}
              alt="d summoner icon"
              width={16}
              height={16}
            />

            <img
              src={getRunesImg(matchData.runes[1].toLowerCase())?.src}
              alt="secondary rune"
              width={16}
              height={16}
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-center">
            <KdaWidget kda={matchData.averageKDA} />
            <p className="text-sm">
              3.39 <span className="text-slate-400 font-bold">KDA</span>
            </p>
          </div>
          <MatchStat name="CS" matchStatData={matchData.cs} />
          <MatchStat
            name="Vision"
            matchStatData={matchData.vision}
            className="@[400px]:flex hidden"
          />
          <div className="flex flex-wrap w-[56px] gap-1 h-fit items-center hidden @[500px]:flex">
            {matchData.items.map((itemSrc) => (
              <img
                key={itemSrc}
                src={itemSrc}
                width={16}
                height={16}
                alt="item icon"
              />
            ))}
          </div>
          <div className="flex gap-2 hidden @sm:flex">
            <PlayersWidget playersGameData={matchData.redTeam} />
            <div className="flex flex-col gap-1">
              {rolesImg.map((roleImg) => (
                <img
                  key={roleImg.src}
                  src={roleImg.src}
                  width={16}
                  height={16}
                  alt="role icon"
                />
              ))}
            </div>
            <PlayersWidget playersGameData={matchData.blueTeam} reverse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchHistory;
