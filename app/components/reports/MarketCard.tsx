import Image from "next/image";
import React, { FC } from "react";

interface Props {
  className?: string;
  data: {
    icon: string;
    title: string;
    gain: string;
    num: string;
  };
}
const MarketCard: FC<Props> = ({ className, data }) => {
  return (
    <div
      className={`border border-light rounded-[4px] p-4 flex items-center justify-between gap-[6px]  bg-white ${className}`}
    >
      <div className="flex gap-4 items-center">
        <div className="size-8 relative">
          <Image src={data.icon} alt="icon" fill sizes="auto" />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-[16px] font-normal leading-normal text-black">
            {data.title}
          </h5>
          <p className="text-[14px] font-normal leading-normal text-[#838383]">
            {data.gain}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <h5 className="text-[16px] font-normal leading-normal text-black">
          {data.num}
        </h5>
        <div className="w-[60px] h-[19px] relative">
          <Image src={"/assets/svgs/chart.svg"} alt="icon" fill />
        </div>
      </div>
    </div>
  );
};

export { MarketCard };
