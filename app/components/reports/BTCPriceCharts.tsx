import { seriesIndex, seriesPrice } from "@/app/constants/ReportPageContent";
import {
  ArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { ReportChart } from "./ReportChart";

const BTCPriceCharts = () => {
  return (
    <div className="flex lg:flex-1 max-lg:w-full max-lg:flex-col flex-wrap w-full gap-4">
      {/* chart */}
      <div className="border lg:flex-1 max-lg:w-full border-gray-200 rounded-lg pt-4 px-2 bg-white">
        <h4 className="ml-6 -mb-2.5 mr-4 text-[14px] leading-[200%] font-[500] text-gray-900 pb-5 border-b border-b-gray-200">
          BTC Price
        </h4>
        <ReportChart
          legend
          series={seriesPrice}
          chartHeading={""}
          categories={[
            "",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "",
          ]}
        />
      </div>
      {/* chart */}
      <div className="border border-gray-200 rounded-lg pt-4 lg:max-w-[231px] min-w-[231px] w-full flex flex-col justify-between bg-white">
        <div className="px-4">
          <div className="flex items-center gap-2 mb-6">
            <h5 className="text-[14px] text-gray-600 font-[500] leading-[171%] flex-1">
              Cryptocurrency Index
            </h5>
            <InformationCircleIcon className="text-[14px] size-[20px] text-gray-600" />
          </div>
          <h2 className="text-[36px] text-gray-900 font-[600] leading-[122%]">
            3.54
          </h2>
          <div className="flex gap-2">
            <span className="flex gap-1 items-center">
              <ArrowUpIcon className="text-[16px] size-[16px] text-green-700" />
              <span className="text-[14px] font-[500] leading-[142%] text-green-700">
                40%
              </span>
            </span>
            <p className="text-[14px] font-[500] leading-[142%] text-gray-500">
              vs last month
            </p>
          </div>
        </div>

        <ReportChart
          legend
          height={135}
          stepSize={25}
          maxStep={110}
          labels={false}
          axisBorder={false}
          grid={false}
          markerColor={["#12b76a"]}
          categories={["abc", "abc", "abc", "abc"]}
          series={seriesIndex}
          gradientStops={[0, 100]}
        />
      </div>
    </div>
  );
};

export { BTCPriceCharts };
