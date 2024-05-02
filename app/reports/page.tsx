import {
  ArrowUpIcon,
  MagnifyingGlassIcon,
  MinusIcon,
} from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import {
  Accordions,
  AnalysisCard,
  MarketCard,
  OverviewCard,
  ProgressBar,
  RadarChart,
  RangeSliders,
  ReportChart,
} from "../components";
import ReportsSidebar from "../components/reports/ReportsSidebar";
import {
  marketDemands,
  overviewData,
  scenarioAnalysis,
  seriesCaparison,
  seriesIndex,
  seriesPrice,
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
            fill
            alt="hero"
          />
          <Image
            src={"/assets/images/hero-small.png"}
            className="object-cover md:hidden"
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
                <Image src={"/assets/svgs/filter.svg"} alt="filter" fill />
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
            {/* Chart */}
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
                      <p className="text-[12px] font-medium leading-[133%]">
                        35%
                      </p>
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
                      <p className="text-[12px] font-medium leading-[133%]">
                        43%
                      </p>
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
                      <p className="text-[12px] font-medium leading-[133%]">
                        75%
                      </p>
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
            {/**=======Mid Stack=====  */}
            <div className="w-full flex max-lg:flex-col gap-4">
              {/* -----leftPart----------- */}
              <div className="lg:max-w-[293px] w-full flex flex-col gap-4">
                {/* Chart */}
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
                    markerColor={[
                      "#F94144",
                      "#F3722C",
                      "#F8961E",
                      "#F9C74F",
                      "#90BE6D",
                    ]}
                    fillColors={[
                      "#F94144",
                      "#F3722C",
                      "#F8961E",
                      "#F9C74F",
                      "#90BE6D",
                    ]}
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
                    fill
                    loading="lazy"
                  />
                </div>
                <div className="w-full h-[836px] md:hidden relative -ml-4">
                  <Image
                    src={"/assets/svgs/stack-map-sm.svg"}
                    alt="technology-stack"
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
                  sizes="auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/*  Benchmarking Tool */}
            <div className="p-4 border border-gray-200 rounded-lg w-full flex-col flex lg:flex-col items-center xl:items-stretch xl:flex-row justify-center xl:justify-between bg-white xl:max-h-[366px] lg:overflow-y-hidden max-lg:gap-4">
              <div className="lg:max-w-[321px] w-full">
                <h5 className="text-[15px] text-[#171725] font-[600] leading-[133%] flex-1">
                  Benchmarking Tool
                </h5>
                <p className="text-[12px] font-medium leading-[133%] text-[#999]">
                  Choose Companies to compare in the Radar
                </p>

                <ul className="list-none p-0 m-0 border-gray-200 border block mt-2">
                  {/* Head */}
                  <label
                    className="relative flex items-center gap-2 p-2 cursor-pointer bg-gray-50 border-b border-b-gray-200"
                    htmlFor="custom"
                  >
                    <input
                      type="checkbox"
                      className="peer relative appearance-none"
                      id="custom"
                      defaultChecked
                    />
                    <span className="flex items-center justify-center relative size-[13.7px] rounded-[4px] border border-[#D0D5DD] peer-checked:border-purple-600  text-transparent peer-checked:text-purple-600">
                      <MinusIcon className="text-inherit text-[9.35px]" />
                    </span>
                    Company
                  </label>
                  {/* Item */}
                  <li>
                    <label
                      className="relative flex items-center gap-2 px-2 py-2.5 cursor-pointer border-b border-b-gray-200"
                      htmlFor="custom"
                    >
                      <input
                        type="checkbox"
                        className="peer relative appearance-none"
                        id="custom"
                        defaultChecked
                      />
                      <span className="flex items-center justify-center relative size-[13.7px] rounded-[4px] border border-[#D0D5DD] peer-checked:border-purple-600  text-transparent peer-checked:text-purple-600">
                        <CheckIcon className="text-inherit text-[9.35px] size-[9.35px]" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/assets/images/placeholder-icon.png"}
                          alt="icon"
                          width={27.413}
                          height={27.413}
                          className="rounded-full"
                        />
                        <span>
                          <p className="text-[9.595px] font-[600] leading-[142.857%] text-gray-900">
                            Loreum
                          </p>
                          <p className="text-[9.595px] font-[500] leading-[142.857%] text-gray-500">
                            Loreum
                          </p>
                        </span>
                      </div>
                    </label>
                  </li>
                  {/* Item */}
                  <li>
                    <label
                      className="relative flex items-center gap-2 px-2 py-2.5 cursor-pointer border-b border-b-gray-200"
                      htmlFor="custom"
                    >
                      <input
                        type="checkbox"
                        className="peer relative appearance-none"
                        id="custom"
                        defaultChecked
                      />
                      <span className="flex items-center justify-center relative size-[13.7px] rounded-[4px] border border-[#D0D5DD] peer-checked:border-purple-600  text-transparent peer-checked:text-purple-600">
                        <CheckIcon className="text-inherit text-[9.35px] size-[9.35px]" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/assets/images/placeholder-icon.png"}
                          alt="icon"
                          width={27.413}
                          height={27.413}
                          className="rounded-full"
                        />
                        <span>
                          <p className="text-[9.595px] font-[600] leading-[142.857%] text-gray-900">
                            Loreum
                          </p>
                          <p className="text-[9.595px] font-[500] leading-[142.857%] text-gray-500">
                            Loreum
                          </p>
                        </span>
                      </div>
                    </label>
                  </li>
                  {/* Item */}
                  <li>
                    <label
                      className="relative flex items-center gap-2 px-2 py-2.5 cursor-pointer border-b border-b-gray-200"
                      htmlFor="custom"
                    >
                      <input
                        type="checkbox"
                        className="peer relative appearance-none"
                        id="custom"
                        defaultChecked
                      />
                      <span className="flex items-center justify-center relative size-[13.7px] rounded-[4px] border border-[#D0D5DD] peer-checked:border-purple-600  text-transparent peer-checked:text-purple-600">
                        <CheckIcon className="text-inherit text-[9.35px] size-[9.35px]" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/assets/images/placeholder-icon.png"}
                          alt="icon"
                          width={27.413}
                          height={27.413}
                          className="rounded-full"
                        />
                        <span>
                          <p className="text-[9.595px] font-[600] leading-[142.857%] text-gray-900">
                            Loreum
                          </p>
                          <p className="text-[9.595px] font-[500] leading-[142.857%] text-gray-500">
                            Loreum
                          </p>
                        </span>
                      </div>
                    </label>
                  </li>
                  {/* Item */}
                  <li>
                    <label
                      className="relative flex items-center gap-2 px-2 py-2.5 cursor-pointer border-b border-b-gray-200"
                      htmlFor="custom"
                    >
                      <input
                        type="checkbox"
                        className="peer relative appearance-none"
                        id="custom"
                      />
                      <span className="flex items-center justify-center relative size-[13.7px] rounded-[4px] border border-[#D0D5DD] peer-checked:border-purple-600  text-transparent peer-checked:text-purple-600">
                        <CheckIcon className="text-inherit text-[9.35px] size-[9.35px]" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/assets/images/placeholder-icon.png"}
                          alt="icon"
                          width={27.413}
                          height={27.413}
                          className="rounded-full"
                        />
                        <span>
                          <p className="text-[9.595px] font-[600] leading-[142.857%] text-gray-900">
                            Loreum
                          </p>
                          <p className="text-[9.595px] font-[500] leading-[142.857%] text-gray-500">
                            Loreum
                          </p>
                        </span>
                      </div>
                    </label>
                  </li>
                  {/* Item */}
                  <li>
                    <label
                      className="relative flex items-center gap-2 px-2 py-2.5 cursor-pointer"
                      htmlFor="custom"
                    >
                      <input
                        type="checkbox"
                        className="peer relative appearance-none"
                        id="custom"
                      />
                      <span className="flex items-center justify-center relative size-[13.7px] rounded-[4px] border border-[#D0D5DD] peer-checked:border-purple-600  text-transparent peer-checked:text-purple-600">
                        <CheckIcon className="text-inherit text-[9.35px] size-[9.35px]" />
                      </span>
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/assets/images/placeholder-icon.png"}
                          alt="icon"
                          width={27.413}
                          height={27.413}
                          className="rounded-full"
                        />
                        <span>
                          <p className="text-[9.595px] font-[600] leading-[142.857%] text-gray-900">
                            Loreum
                          </p>
                          <p className="text-[9.595px] font-[500] leading-[142.857%] text-gray-500">
                            Loreum
                          </p>
                        </span>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>

              {/* Chart */}
              <div className="flex-1 lg:h-[386px] lg:max-w-[386px] md:min-w-[386px] max-lg:h-[251px] max-lg:w-full lg:overflow-hidden">
                <RadarChart
                  className={"lg:!scale-110 max-lg:!scale-75"}
                  height={386}
                  stepSize={5}
                  maxStep={35}
                  categories={["abc", "abc", "abc", "abc", "abc"]}
                  series={seriesCaparison}
                />
              </div>

              <div className="flex flex-col gap-10 lg:max-w-[195px] w-full mr-4">
                {/* Progress */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="bg-[#06F] rounded-full w-[9px] h-[6px] block" />
                      <p className="text-[12px] font-medium leading-[133%]">
                        Legend 1
                      </p>
                    </span>
                    <p className="text-[12px] font-medium leading-[133%]">
                      35%
                    </p>
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
                    <p className="text-[12px] font-medium leading-[133%]">
                      43%
                    </p>
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
                    <p className="text-[12px] font-medium leading-[133%]">
                      75%
                    </p>
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
