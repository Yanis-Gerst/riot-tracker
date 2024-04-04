import React from "react";
import Card from "../Card";
import { IFriendPlayer } from "@/types/player";
import PlayerWithItem from "./PlayerWithItem";

interface Props {
  friendsPlayers: IFriendPlayer[];
}
const PlayedWithWidget: React.FC<Props> = ({ friendsPlayers }) => {
  return (
    <Card className="pt-2">
      <div className="px-3 pt-1 mb-2">
        <h2 className="font-bold text-gray-700">Recently played with</h2>
      </div>
      <div className="flex flex-col ">
        {friendsPlayers.map((friendPlayer) => (
          <PlayerWithItem key={friendPlayer.name} friendPlayer={friendPlayer} />
        ))}
      </div>
    </Card>
  );
};

export default PlayedWithWidget;
