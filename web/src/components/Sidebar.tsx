import React from "react";
import lolIcon from "../assets/lo-l-icon-flat-gold-1.svg";
import Image from "next/image";

const Sidebar: React.FC<{}> = () => {
  return (
    <aside className="hidden pt-8 w-[110px] border-r border-slate-200 min-h-screen md:block">
      <div className="w-[32px] h-[32px] bg-slate-200 mx-auto mb-10 rounded-lg"></div>
      <div className="bg-slate-200 w-1/2 h-[1px] mb-4"></div>
      <div className="flex flex-col gap-4 my-4 items-center">
        <div className="p-2 bg-[#F3EEE1] rounded-lg grid place-items-center w-fit">
          <Image src={lolIcon} alt="leauge of legends icon" />
        </div>
      </div>
      <div className="bg-slate-200 w-1/2 h-[1px] mb-4"></div>
    </aside>
  );
};

export default Sidebar;
