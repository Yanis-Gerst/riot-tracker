"use client";
import RankedCard from "@/components/RankedCard";
import SeasonBadge from "@/components/SeasonBadge";
import Stats from "@/components/Stats";
import Summoner from "@/components/Summoner";
import OverviewLayout from "@/layouts/OverviewLayout";
import { IPlayerData, IRankData } from "@/types/player";
import { fetcher } from "@/utils/api";
import { getApiUrl } from "@/utils/urlProvider";
import useSWR from "swr";

const getPlayerApiUrl = (params: string) => {
  const [riotId, tagline] = params.split("%3B");
  return `${getApiUrl()}/account/${riotId}/${tagline}`;
};

export default function Page({ params }: { params: { slug: string } }) {
  const {
    data: accountData,
    error,
    isLoading,
  } = useSWR<IPlayerData>(getPlayerApiUrl(params.slug), fetcher);

  if (isLoading) return <p>Load</p>;
  if (error || !accountData) return <p>Erreur</p>;

  return (
    <div className="pt-16 ml-1 mr-1 xs:ml-4 xs:mr-4 pb-32 @container md:ml-8 md:mr-8">
      <div className="flex gap-4 mb-12">
        {accountData.seasonsRank.map((rankData) => (
          <SeasonBadge key={rankData.season} rankData={rankData} />
        ))}
      </div>
      <div className="mb-20">
        <Summoner summonerData={accountData.player} />
      </div>

      <div className="flex flex-col gap-2 @[580px]:gap-0 @[580px]:grid @[580px]:gap-y-2   @[580px]:grid-rows-[reapeat(2,1fr)] @[580px]:grid-cols-2 mb-20 @[1022px]:grid-cols-[repeat(4,1fr)] @[1022px]:grid-rows-2 @[1022px]:gap-2">
        <RankedCard
          rankData={accountData.currentRank.rankedSolo}
          rankType="rankedSolo"
          className="@[1022px]:mr-0 @[580px]:mr-2"
        />
        <RankedCard
          rankData={accountData.currentRank.rankedFlex}
          rankType="rankedFlex"
          className="@[1022px]:order-last"
        />
        <Stats overrallStats={accountData.overallStats} />
      </div>
      <OverviewLayout accountData={accountData} />
    </div>
  );
}
