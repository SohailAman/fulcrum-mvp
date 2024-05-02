"use client";

import { seriesCaparison } from "@/app/constants/ReportPageContent";
import { ProgressBar } from "../common/ProgressBar/ProgressBar";
import dynamic from "next/dynamic";
const RadarChart = dynamic(() => import("./RadarChart"), {
  ssr: false,
});

const SectorChart = () => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg pt-4 w-full flex flex-wrap bg-white">
      {/* progress */}
      <div className="lg:max-w-[373.73px] w-full">
        <h5 className="text-[15px] text-[#171725] font-[600] leading-[133%] lg:flex-1 max-lg:w-full">
          Sector Comparison
        </h5>
        <p className="text-[12px] font-medium leading-[133%] text-[#999]">
          Lorem ipsum dolor sit amet
        </p>

        <div className="flex flex-col gap-6 mt-14 pb-12 px-5">
          {/* Progress */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="bg-[#06F] rounded-full w-[9px] h-[6px] block" />
                <p className="text-[12px] font-medium leading-[133%]">
                  Legend 1
                </p>
              </span>
              <p className="text-[12px] font-medium leading-[133%]">35%</p>
            </div>
            <ProgressBar
              backgroundColor="#EFEFFF"
              color="#06F"
              height="4.993px"
              progress={35}
            />
          </div>
          {/* Progress */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="bg-[#96C0FF] rounded-full w-[9px] h-[6px] block" />
                <p className="text-[12px] font-medium leading-[133%]">
                  Legend 2
                </p>
              </span>
              <p className="text-[12px] font-medium leading-[133%]">43%</p>
            </div>
            <ProgressBar
              backgroundColor="#EFEFFF"
              color="#96C0FF"
              height="4.993px"
              progress={43}
            />
          </div>
          {/* Progress */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="bg-[#CDD2FD] rounded-full w-[9px] h-[6px] block" />
                <p className="text-[12px] font-medium leading-[133%]">
                  Legend 1
                </p>
              </span>
              <p className="text-[12px] font-medium leading-[133%]">75%</p>
            </div>
            <ProgressBar
              backgroundColor="#EFEFFF"
              color="#CDD2FD"
              height="4.993px"
              progress={75}
            />
          </div>
        </div>
      </div>
      {/* Chart */}
      <div className="relative lg:h-[431px] lg:max-w-[514px] lg:min-w-[514px] max-lg:h-[251px] max-lg:w-full lg:overflow-hidden">
        <RadarChart
          className="max-lg:!scale-75"
          height={431}
          stepSize={5}
          maxStep={35}
          categories={["abc", "abc", "abc", "abc", "abc"]}
          series={seriesCaparison}
        />
      </div>
    </div>
  );
};

export { SectorChart };
