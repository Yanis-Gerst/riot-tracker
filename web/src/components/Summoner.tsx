import { ISummoner } from "@/types/player";
import Image from "next/image";
import React from "react";

interface Props {
  summonerData: ISummoner;
}
const Summoner: React.FC<Props> = ({ summonerData }) => {
  return (
    <div className="flex gap-4">
      <img
        src={summonerData.icon}
        width={128}
        height={128}
        alt="Player Icon"
        className="rounded-full"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{summonerData.name}</h1>
        <p className="text-slate-500 text-xs font-bold">Ladder Rank: 1%</p>
      </div>
    </div>
  );
};

export default Summoner;
