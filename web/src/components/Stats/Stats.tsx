import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Clock5, ChevronDown } from "lucide-react";
import { IGameType, IOverallStats } from "@/types/player";
import StatCard from "./StatCard";
import { Button } from "../ui/button";
import { camel2title, gameTypes } from "@/utils/utils";
import Card from "../Card";

interface Props {
  overrallStats: IOverallStats[];
}

const Stats: React.FC<Props> = ({ overrallStats }) => {
  const [gameType, setGameType] = useState("rankedSolo");
  const currentStats = overrallStats.find((stat) => stat.gameType == gameType);
  if (!currentStats) return <p>Bug</p>;
  return (
    <Card className="p-4 col-span-3 row-span-2 @container">
      <div className="flex gap-4 mb-6 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2">
            <Button variant="outline" value={gameType}>
              {camel2title(gameType)} <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {gameTypes
              .filter(
                (gameTypeElt) => gameTypeElt != gameType && gameTypeElt != "all"
              )
              .map((gameTypeElt) => (
                <DropdownMenuItem
                  onClick={() => setGameType(gameTypeElt)}
                  key={gameTypeElt}
                >
                  {camel2title(gameTypeElt)}
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex gap-2 items-center">
          <Clock5 />
          <p className="text-sm">{currentStats.playTime}h playtime</p>
        </div>
      </div>
      <div className="grid   w-full gap-y-12 grid-cols-2 grid-rows-5 @[550px]:grid-cols-3 @[550px]:grid-rows-3 @[700px]:grid-cols-5 @[700px]:grid-rows-2">
        {Object.entries(currentStats)
          .slice(2)
          .map(([statName, statData]) => (
            <StatCard
              key={statName}
              statName={
                statName as keyof Omit<IOverallStats, "playTime" | "gameType">
              }
              value={statData}
            />
          ))}
      </div>
    </Card>
  );
};

export default Stats;
