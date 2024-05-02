import Image from "next/image";
import React, { FC } from "react";

interface Props {
  className?: string;
  data: {
    image: string;
    title: string;
    description: string;
  };
}

const MarketOverviewCard: FC<Props> = ({ data, className }) => {
  return (
    <div
      className={`rounded-lg overflow-hidden min-h-[282px] relative w-full border border-light ${className}`}
    >
      <Image src={data.image} alt="icon" fill sizes="auto" />

      <div className="p-6 backdrop-blur-[12px] h-[137px] border-t border-t-[#9c9c9c] flex flex-col gap-2 w-full absolute bottom-0 left-0 right-0 z-10">
        <h3 className="text-[20px] leading-[120%] font-bold text-[#333]">
          {data.title}
        </h3>
        <p className="text-[16px] leading-[120%] font-normal text-[#333]">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export { MarketOverviewCard };
