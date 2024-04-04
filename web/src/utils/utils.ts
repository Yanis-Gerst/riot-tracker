import { IGameType } from "@/types/player";

export const gameTypes: IGameType[] = [
  "rankedFlex",
  "rankedSolo",
  "normalDraft",
  "all",
];

export const camel2title = (camelCase: string) =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();

export function romanize(num: number) {
  if (isNaN(num)) return NaN;
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3;
  while (i--) roman = (key[+(digits.pop() as string) + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

export const calculateWinRate = (win: number, lose: number) => {
  if (lose === 0) return 100;
  return (win / lose) * 100;
};

export const getColorStyleOf = (rate: number) => {
  if (rate > 55) return "text-green-500";
  if (rate < 45) return "text-red-500";
  return "text-gray-500";
};

export const getDaysDiffWithToday = (date1: Date) => {
  console.log(date1);
  return Math.floor((Date.now() - date1.getTime()) / (24 * 3600 * 1000));
};
