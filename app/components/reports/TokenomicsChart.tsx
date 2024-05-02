"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
const ReportChart = dynamic(() => import("./ReportChart"), {
  ssr: false,
});
const TokenomicsChart = () => {
  return (
    <div className="flex-1 flex-col flex gap-6 p-4 border border-gray-200 rounded-lg bg-white">
      <div className="flex-1 flex items-center gap-2">
        <h5 className="text-[14px] text-gray-600 font-[500] leading-[171%] flex-1">
          Tokenomics
        </h5>
        <InformationCircleIcon className="text-[14px] size-[20px] text-gray-600" />
      </div>
      <ReportChart
        type="donut"
        legend
        width={261}
        height={292}
        labels={false}
        axisBorder={false}
        grid={false}
        markerColor={["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D"]}
        fillColors={["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D"]}
        categoryLabels
        categories={[
          "product 1",
          "product 2",
          "product 3",
          "product 4",
          "product 5",
        ]}
        offsetY={0}
        strokeWidth={0}
        series={[44, 55, 41, 17, 15]}
        legendPosition="bottom"
        horizontalAlign="left"
      />
    </div>
  );
};

export { TokenomicsChart };
