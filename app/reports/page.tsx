import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
  Accordions,
  AnalysisCard,
  BTCPriceCharts,
  BenchmarkingSection,
  MarketCard,
  OverviewCard,
  RangeSliders,
  SectorChart,
  TokenomicsChart,
} from "../components";
import ReportsSidebar from "../components/reports/ReportsSidebar";
import {
  marketDemands,
  overviewData,
  scenarioAnalysis,
} from "../constants/ReportPageContent";

const Reports = () => {
  return (
    <>
      {/* Hero */}
      <div className="custom-container lg:px-8 mb-6 md:mt-6">
        <div className="h-[120px] w-full relative">
          <Image
            src={"/assets/images/home-hero.png"}
            className="object-cover max-md:hidden"
            sizes="auto"
            fill
            priority
            alt="hero"
          />
          <Image
            src={"/assets/images/hero-small.png"}
            className="object-cover md:hidden"
            sizes="auto"
            priority
            fill
            alt="hero"
          />
        </div>
      </div>

      {/* overview */}
      <div className="custom-container lg:px-8 px-6 py-6">
        <div className="max-w-[768px] mx-auto w-full md:text-center mb-8 px-2">
          <h6 className="text-[16px] text-dark-dull font-[600] leading-[150%] mb-3">
            Company Overview
          </h6>
          <h1 className="text-[36px] text-gray-900 font-[600] leading-[122%] tracking-[-0.72px] mb-[20px]">
            CryptoSecure Technologies
          </h1>
          <p className="text-[20px] text-gray-500 font-[400] leading-[150%]">
            Utilize a concise yet informative narrative about CryptoSecure,
            emphasizing their pioneering role in blockchain security
          </p>
        </div>

        <div className="flex gap-8 flex-wrap justify-center">
          {overviewData.map((data, index) => (
            <OverviewCard
              data={data}
              key={index}
              className="w-full sm:w-[80%] lg:w-[47.5%] xl:w-[31.5%]"
            />
          ))}
        </div>
      </div>

      {/* charts */}
      <div className="custom-container p-2 mt-4 mb-2 relative flex items-start max-lg:px-6">
        <ReportsSidebar />
        <div className="lg:flex-1 max-lg:w-full pt-[88px]">
          {/* Input */}
          <div className="flex items-center md:gap-6 gap-2 mb-[17px]">
            <div className="sm:flex-1 max-sm:w-[214px] border rounded-[8px] border-[#D0D5DD] sm:py-2.5 py-2 px-3 sm:px-[14px] flex items-center gap-2 bg-white">
              <MagnifyingGlassIcon className="size-[20px] text-gray-500" />
              <input
                type="text"
                placeholder="Deep-dive into on-chain ratings, research specific tokens, or analyze sectors"
                className="text-[16px] font-[400] leading-[150%] text-gray-500 flex-1 border-0 outline-none focus:outline-none truncate"
              />
            </div>
            <button className="inline-flex sm:px-4 sm:py-2.5 py-2 px-3 items-center gap-x-1 text-[14px] font-semibold text-gray-700 leading-[142%] border rounded-[8px] border-[#D0D5DD]">
              <div className="size-5 relative">
                <Image
                  src={"/assets/svgs/filter.svg"}
                  alt="filter"
                  sizes="auto"
                  fill
                />
              </div>
              <span>Filters</span>
            </button>
          </div>
          {/* heading */}
          <div className="flex lg:flex-1 gap-4 w-full mb-4">
            <Image
              src={"/assets/images/bitcoin.png"}
              alt="chart"
              width={58}
              height={58}
            />
            <h1 className="lg:text-[48px] text-[32px] font-[400] leading-[120%] text-black">
              Bitcoin<span className="font-bold">BTC</span>
            </h1>
          </div>
          {/* ==== */}
          <div className="flex gap-4 w-full flex-col">
            {/* charts */}

            <BTCPriceCharts />

            {/* Chart */}
            <SectorChart />
            {/**=======Mid Stack=====  */}
            <div className="w-full flex max-lg:flex-col gap-4">
              {/* -----leftPart----------- */}
              <div className="lg:max-w-[293px] w-full flex flex-col gap-4">
                {/* Chart */}
                <TokenomicsChart />
                {/* accordions */}
                <div className="flex-1 flex-col flex p-4 border border-gray-200 rounded-lg bg-white">
                  <div className="flex-1 flex items-center gap-2 mb-6">
                    <h5 className="text-[14px] text-gray-600 font-[500] leading-[171%] flex-1">
                      Textual Analysis
                    </h5>
                    <InformationCircleIcon className="text-[14px] size-[20px] text-gray-600" />
                  </div>
                  <Accordions />
                </div>
                {/* Market Demand */}
                <div className="flex-1">
                  <h5 className="text-[14px] text-gray-600 font-[500] leading-[171%] mb-2">
                    Market Demand
                  </h5>
                  <div className="flex flex-col gap-2">
                    {marketDemands.map((data, index) => (
                      <MarketCard data={data} key={index} />
                    ))}
                  </div>
                </div>
              </div>
              {/* -------- technology-stack ---------- */}
              <div className="lg:flex-1 max-lg:w-full px-4 max-lg:py-4 border border-gray-200 rounded-lg bg-white relative">
                <h4 className="text-[14px] leading-[200%] font-[500] text-gray-900 lg:absolute top-4 left-4">
                  Technology Stack
                </h4>
                <div className="w-full md:h-[1115px] max-md:hidden relative">
                  <Image
                    src={"/assets/svgs/technology-stack.svg"}
                    alt="technology-stack"
                    sizes="auto"
                    fill
                    loading="lazy"
                  />
                </div>
                <div className="w-full h-[836px] md:hidden relative -ml-4">
                  <Image
                    src={"/assets/svgs/stack-map-sm.svg"}
                    alt="technology-stack"
                    sizes="auto"
                    fill
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* world map */}
            <div className="p-4 pb-0 border border-gray-200 rounded-lg w-full flex flex-col gap-8 bg-white">
              <div className="flex flex-col gap-1">
                <h5 className="text-[15px] text-[#171725] font-[600] leading-[133%] flex-1">
                  Regulatory Compliance
                </h5>
                <p className="text-[12px] font-medium leading-[133%] text-[#999]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="relative w-full overflow-hidden md:h-[460px] h-[184px] md:-mb-6">
                <Image
                  src={"/assets/svgs/world-map.svg"}
                  alt="world-map"
                  className="md:scale-[1.15] block md:!inset-y-5"
                  fill
                  priority
                  sizes="auto"
                />
              </div>
            </div>

            {/*  Benchmarking Tool */}
            <BenchmarkingSection />

            {/* ----- */}
            <div className="p-4 pb-7 border border-gray-200 rounded-lg bg-white">
              <div className="w-full pb-5 border-b border-b-light">
                <h5 className="text-[15px] text-[#171725] font-[600] leading-[133%] lg:flex-1 max-lg:w-full">
                  Scenario Analysis
                </h5>
              </div>
              <div className="flex flex-wrap max-lg:flex-col-reverse lg w-full">
                <div className="lg:max-w-[540px] w-full flex gap-2 sm:justify-center lg:justify-start flex-wrap mt-6">
                  {scenarioAnalysis.map((data, index) => (
                    <AnalysisCard
                      data={data}
                      key={index}
                      className="max-w-[165px] max-sm:w-[133px]"
                    />
                  ))}
                </div>
                <div className="max-w-[370px] mx-auto w-full mt-6">
                  <RangeSliders />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
