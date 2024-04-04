import ChampionsStats from "@/components/ChampionsStats";
import MatchHistory from "@/components/MatchHistory";
import PlayedWithWIdget from "@/components/PlayedWithWIdget";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IChampionStats, IPlayerData } from "@/types/player";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";

interface Props {
  accountData: IPlayerData;
}
const OverviewLayout: React.FC<Props> = ({ accountData }) => {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="bg-white mb-2">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="championsPools">Champions Pools</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="flex flex-col @[1022px]:flex-row gap-2 w-full">
          <div className="flex flex-col @[700px]:grid @[700px]:grid-rows-1 @[700px]:grid-cols-2 w-full gap-2 @[1022px]:flex @[1022px]:flex-col @[1022px]:basis-1/3 min-w-[330px]">
            <ChampionsStats championsStats={accountData.championsStats} />
            <PlayedWithWIdget friendsPlayers={accountData.friendsPlayers} />
          </div>
          <div className="flex flex-col basis-2/3">
            <MatchHistory matchData={accountData.matchHistory[0]} />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="championsPools">Champions</TabsContent>
    </Tabs>
  );
};

export default OverviewLayout;
