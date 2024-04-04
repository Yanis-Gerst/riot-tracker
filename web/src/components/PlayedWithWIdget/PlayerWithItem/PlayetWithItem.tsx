import { IFriendPlayer } from "@/types/player";
import { calculateWinRate, getColorStyleOf } from "@/utils/utils";
import React from "react";

interface Props {
  friendPlayer: IFriendPlayer;
}
const PlayetWithItem: React.FC<Props> = ({ friendPlayer }) => {
  const winRate = calculateWinRate(friendPlayer.win, friendPlayer.lose);

  return (
    <div className="flex justify-between border-t border-slate-200 px-3 py-2 ">
      <div className="flex gap-2 items-center">
        <img
          src={friendPlayer.icon}
          alt="player icon"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="font-bold text-gray-700">{friendPlayer.name}</p>
      </div>
      <div className="flex flex-col font-bold items-end">
        <p className={getColorStyleOf(winRate)}>{winRate}% WR</p>
        <p>
          {friendPlayer.win}W {friendPlayer.lose}L
        </p>
      </div>
    </div>
  );
};

export default PlayetWithItem;
