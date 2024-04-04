import iron from "../assets/rank/fer.png";
import bronze from "../assets/rank/bronze.png";
import silver from "../assets/rank/silver.png";
import gold from "../assets/rank/gold.png";
import platinium from "../assets/rank/platinium.png";
import diamond from "../assets/rank/diamond.png";
import master from "../assets/rank/master.png";
import grandMaster from "../assets/rank/grandMaster.png";
import challenger from "../assets/rank/challenger.png";
import { ITier } from "@/types/player";

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const rankImg = {
  iron,
  bronze,
  silver,
  gold,
  platinium,
  diamond,
  master,
  grandMaster,
  challenger,
};

export const getRankImage = (tier: ITier) => rankImg[tier];
