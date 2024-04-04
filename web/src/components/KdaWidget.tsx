import { IKda } from "@/types/player";
import React from "react";

interface Props {
  kda: IKda;
}

const KdaWidget: React.FC<Props> = ({ kda }) => {
  return (
    <p>
      {kda.kill} | {kda.death} | {kda.assists}
    </p>
  );
};

export default KdaWidget;
