import { ISeasonRank, ITierData } from "@/types/player";
import { getRankImage } from "@/utils/api";
import Image from "next/image";
import React from "react";

interface Props {
  rankData: ISeasonRank;
}
const SeasonBadge: React.FC<Props> = ({ rankData }) => {
  return (
    <div className="flex gap-1 px-2 items-center bg-white rounded text-sm font-bold text-slate-500">
      <Image
        src={getRankImage(rankData.rank.tier)}
        width={24}
        height={24}
        alt="rank Icon"
        className="mr-2"
      />
      <p>S{rankData.season}</p>
      <p className="capitalize ">{rankData.rank.tier}</p>
    </div>
  );
};

export default SeasonBadge;
