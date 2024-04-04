import { IRankData } from "@/types/player";
import { getRankImage } from "@/utils/api";
import { camel2title, romanize } from "@/utils/utils";
import Image from "next/image";
import React from "react";
import Card from "./Card";

type rankType = string;

interface Props {
  rankType: rankType;
  rankData: IRankData;
  className?: string;
}
const RankedCard: React.FC<Props> = ({ rankData, rankType, className }) => {
  const totalGame = rankData.win + rankData.lose;
  const winRate = (rankData.win / totalGame) * 100;
  return (
    <Card className={`p-3 ${className} min-w-[280px]`}>
      <h2 className="text-xl text-gray-700 mb-4 font-bold">
        {camel2title(rankType)}
      </h2>
      <div className="flex gap-2">
        <Image
          src={getRankImage(rankData.rank.tier)}
          width={64}
          height={64}
          alt="rank icon"
        />
        <div className="flex flex-col gap-1">
          <span className="flex gap-2 items-center capitalize">
            <p className="font-bold">
              {rankData.rank.tier + " "}
              {romanize(rankData.rank.division)}
            </p>
            <div className="w-[3px] h-[3px] rounded-full bg-slate-500" />
            <p className="text-slate-700 capitalize">{rankData.lp} LP</p>
          </span>
          <span className="flex gap-2 items-center">
            <p>
              {rankData.win}W{rankData.lose}L
            </p>
            <div className="w-[3px] h-[3px] rounded-full bg-slate-500" />
            <p
              className={`capitalize ${
                winRate > 50 ? "text-green-500" : "text-red-500"
              }`}
            >
              {winRate.toFixed(1)}%
            </p>
          </span>
          <div className="w-full flex">
            <div className="h-[1px] bg-green-500 basis-1/2" />
            <div className="h-[1px] bg-red-500 basis-1/2" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RankedCard;
