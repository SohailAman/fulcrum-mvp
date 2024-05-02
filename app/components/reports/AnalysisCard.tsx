import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  className?: string;
  data: {
    title: string;
    analysis: string;
  };
}
const AnalysisCard: FC<Props> = ({ className, data }) => {
  return (
    <div
      className={`border border-light rounded-lg p-4 flex flex-col items-start justify-between min-h-[121px] bg-white ${className}`}
    >
      <div className="flex-1 flex items-start gap-2">
        <h5 className="text-[12px] text-gray-600 font-[500] leading-normal text-balance">
          {data.title}
        </h5>
        <InformationCircleIcon className="text-[20px] size-[20px] text-gray-600" />
      </div>
      <h5 className="text-[20px] text-[#191919] font-[600] leading-[150%]">
        {data.analysis}
      </h5>
    </div>
  );
};

export { AnalysisCard };
