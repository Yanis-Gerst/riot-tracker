"use client";
import React, { useState } from "react";
import Card from "../Card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { camel2title, gameTypes } from "@/utils/utils";
import { IChampionStats } from "@/types/player";
import ChampionStats from "./ChampionStatsItem/ChampionStats";

interface Props {
  championsStats: IChampionStats[];
}

const ChampionsStats: React.FC<Props> = ({ championsStats }) => {
  const [gameType, setGameType] = useState("all");
  return (
    <Card className="pt-2">
      <div className="flex w-full items-center justify-between px-3 mb-2">
        <h2 className="font-bold text-gray-700">Champions Stats</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              {camel2title(gameType)} <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {gameTypes.map((gameTypeElt) => (
              <DropdownMenuItem
                key={gameTypeElt}
                onClick={() => setGameType(gameTypeElt)}
              >
                {camel2title(gameTypeElt)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-col">
        {championsStats.map((championStat) => (
          <ChampionStats key={championStat.name} championStats={championStat} />
        ))}
      </div>
    </Card>
  );
};

export default ChampionsStats;
