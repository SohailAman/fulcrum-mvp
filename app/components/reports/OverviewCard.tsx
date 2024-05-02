import Image from "next/image";
import React, { FC } from "react";

interface Props {
  className?: string;
  data: {
    iconSrc: string;
    heading: string;
    sNo: string;
    description: string;
  };
}
const OverviewCard: FC<Props> = ({ className, data }) => {
  return (
    <div
      className={`border border-light rounded-lg p-4 flex flex-col items-start gap-[6px]  bg-white ${className}`}
    >
      <div className="w-[56px] h-[56px] border-8 border-[#F5F5FF] bg-[#EBEEFF] rounded-full flex items-center justify-center">
        <Image src={data.iconSrc} alt="alt" height={24} width={24} />
      </div>
      <div className="flex flex-col items-start gap-[8px]">
        <div className="flex w-full max-lg:flex-col lg:items-center justify-between">
          <h2 className="text-[20px] text-gray-900 leading-[150%] font-[600] text-nowrap">
            {data.heading}
          </h2>
          <h2 className="text-[20px] text-gray-900 leading-[150%] font-[600] text-nowrap">
            {data.sNo}
          </h2>
        </div>
        <p className="text-[16px] text-gray-500 leading-[150%] font-[400]">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export { OverviewCard };
