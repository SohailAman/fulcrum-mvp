import Image from "next/image";
import { MarketOverviewCard, RatingsAnalysisCard } from "./components";
import {
  marketOverviewData,
  ratingsAnalysisData,
  regulatoryInsightData,
} from "./constants/HomepageContent";

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <div className="bg-white py-20">
        <div className="max-w-[960px] max-lg:px-8 mx-auto w-full text-center">
          <h6 className="text-[16px] text-blue-600 font-[600] leading-[150%] mb-3">
            Welcome to Fulcrum4
          </h6>
          <h1 className="lg:text-[48px] text-[32px] text-gray-900 font-[600] leading-[125%] tracking-[-0.96px] mb-[20px]">
            Your Trusted Partner in Navigating the Blockchain Rating Landscape
          </h1>
        </div>
      </div>

      <div className="custom-container lg:px-8 px-6 lg:py-20 py-10 flex flex-col lg:gap-16 gap-6">
        <div className="flex flex-col gap-5">
          <h2 className="lg:text-[36px] text-[24px] font-semibold leading-[122.222%] text-gray-900">
            Market Overview
          </h2>
          <p className="lg:text-[20px] text-[16px] text-gray-500 leading-[150%] font-[400]">
            Snapshot of Current Trends and Performance in the Blockchain Space
          </p>
        </div>
        <div className="flex gap-8 justify-center max-xl:flex-wrap">
          {marketOverviewData.map((market, index) => (
            <MarketOverviewCard
              data={market}
              key={index}
              className="max-w-[386px]"
            />
          ))}
        </div>
        <button className="w-auto lg:ms-auto max-lg:mx-auto bg-[#1D2353] px-[20px] py-[12px] rounded-lg shadow-dull text-[16px] font-semibold leading-[150%] text-white">
          View all posts
        </button>
      </div>
      {/* cards */}
      <div className="custom-container lg:px-8 flex max-lg:flex-col gap-10">
        {/* left */}
        <div className="lg:max-w-[452px] max-lg:px-6 w-full lg:py-24 py-10 relative">
          <span className="absolute bottom-0 left-[-120px] h-full lg:w-[calc(100%+122px)] w-full bg-white -z-10" />
          <h3 className="lg:text-[36px] text-[24px] text-gray-900 font-semibold leading-[122%] tracking-[-0.72px] mb-5">
            Latest Rating Actions
          </h3>
          <p className="lg:text-[20px] text=[16px] text-gray-500 leading-[150%] font-[400]">
            Recent Developments and Updates on Blockchain Asset Ratings
          </p>

          <div className="flex flex-col w-full mt-10 gap-6">
            {/* card */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 w-full">
                <span className="relative size-[28px]">
                  <Image
                    src={"/assets/images/blockchain1.png"}
                    alt="icon"
                    fill
                    sizes="auto"
                  />
                </span>
                <h6 className="text-[18px] font-medium leading-[155%] text-gray-900">
                  DeFiCredit Inc.
                </h6>
              </div>
              <p className="text-[16px] text-gray-500 leading-[150%] font-[400] w-full">
                Upgraded from FA2 to FA1
              </p>
            </div>
            {/* card */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 w-full">
                <span className="relative size-[28px]">
                  <Image
                    src={"/assets/images/blockchain2.png"}
                    alt="icon"
                    fill
                    sizes="auto"
                  />
                </span>
                <h6 className="text-[18px] font-medium leading-[155%] text-gray-900">
                  RealToken Realty
                </h6>
              </div>
              <p className="text-[16px] text-gray-500 leading-[150%] font-[400] w-full">
                Downgraded from FRWA2 to FRWCA3
              </p>
            </div>
            {/* card */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 w-full">
                <span className="relative size-[28px]">
                  <Image
                    src={"/assets/images/blockchain3.png"}
                    alt="icon"
                    fill
                    sizes="auto"
                  />
                </span>
                <h6 className="text-[18px] font-medium leading-[155%] text-gray-900">
                  ChainBond Ltd
                </h6>
              </div>
              <p className="text-[16px] text-gray-500 leading-[150%] font-[400] w-full">
                Affirmed at FP1 with a revised positive outlook
              </p>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[836px] max-lg:px-6 justify-center w-full flex flex-col gap-10 lg:pl-8 lg:py-24 py-10">
          <div className="w-full max-w-[693px] max-lg:mx-auto flex flex-col gap-5">
            <h3 className="lg:text-[36px] text-[24px] text-gray-900 font-semibold leading-[122%] tracking-[-0.72px]">
              Ratings and Analysis Section
            </h3>
            <p className="lg:text-[20px] text=[16px] text-gray-500 leading-[150%] font-[400]">
              In-depth Evaluations and Expert Insights Across Blockchain Sectors
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap max-w-[693px] mx-auto w-full">
            <RatingsAnalysisCard
              data={ratingsAnalysisData[0]}
              className="md:max-w-[245px] w-full pl-6 pr-[23px] pt-[23px]"
              imageClassName="-bottom-12 right-0 h-[246px] w-[246px]"
            />
            <RatingsAnalysisCard
              data={ratingsAnalysisData[1]}
              className="md:max-w-[428px] w-full pl-6 pr-[102px] pt-[23px]"
              imageClassName="-bottom-10 right-0 h-[169px] w-[165px]"
            />
            <RatingsAnalysisCard
              data={ratingsAnalysisData[2]}
              className="md:max-w-[186px] w-full pl-6 pr-[9px] pt-[23px]"
              imageClassName="-bottom-8 right-0 h-[126px] w-[126px]"
            />
            <RatingsAnalysisCard
              data={ratingsAnalysisData[3]}
              className="md:max-w-[287px] w-full pl-6 pr-[14px] pt-[23px]"
              imageClassName="-bottom-9 right-0 h-[152px] w-[156px]"
            />
            <RatingsAnalysisCard
              data={ratingsAnalysisData[4]}
              className="md:max-w-[186px] w-full pl-6 pr-[17px] pt-[23px]"
              imageClassName="-bottom-5 right-0 h-[114px] w-[136px]"
            />
          </div>
        </div>
      </div>
      {/* bg */}
      <div className="bg-[#1D2353]">
        <div className="custom-container lg:px-8 px-6 py-20 flex flex-wrap gap-16">
          <div className="max-w-[362px] w-full flex flex-col gap-3">
            <h5 className="text-[16px] font-semibold leading-[150%] text-[#E1E4FE]">
              Sector Panels
            </h5>
            <h1 className="lg:text-[36px] text-[24px] font-semibold leading-[122%] tracking-[-0.72px] text-white">
              Deep Dives into Key Blockchain Sectors
            </h1>
          </div>

          <div className="max-w-[363px] w-full flex flex-col lg:gap-8 gap-6">
            <div className="w-full flex flex-col gap-3">
              <h5 className="text-[20px] font-semibold leading-[150%] text-[#fff]">
                Decentralized Finance (DeFi)
              </h5>
              <h1 className="text-[16px] font-normal leading-[150%] text-[#E1E4FE]">
                Reviews of yield farming protocols and AMMs
              </h1>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h5 className="text-[20px] font-semibold leading-[150%] text-[#fff]">
                Infrastructure
              </h5>
              <h1 className="text-[16px] font-normal leading-[150%] text-[#E1E4FE]">
                Detailed assessments of blockchain layers and interoperability
                protocols
              </h1>
            </div>
          </div>

          <div className="max-w-[363px] w-full flex flex-col gap-8">
            <div className="w-full flex flex-col gap-3">
              <h5 className="text-[20px] font-semibold leading-[150%] text-[#fff]">
                Non-Fungible Tokens (NFT)
              </h5>
              <h1 className="text-[16px] font-normal leading-[150%] text-[#E1E4FE]">
                Analyses of the burgeoning NFT marketplace
              </h1>
            </div>
            <div className="w-full flex flex-col gap-3">
              <h5 className="text-[20px] font-semibold leading-[150%] text-[#fff]">
                Stable coins
              </h5>
              <h1 className="text-[16px] font-normal leading-[150%] text-[#E1E4FE]">
                In-depth analysis of various types of stable coins
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* === */}
      <div className="custom-container lg:px-8 px-6 py-20 flex flex-col lg:gap-16 gap-8">
        <div className="max-w-[768px] mx-auto w-full flex justify-center items-center flex-col lg:gap-5 gap-2 text-center">
          <h2 className="lg:text-[36px] text-[24px] max-lg:max-w-[768px] max-lg:mx-auto w-full font-semibold leading-[122.222%] text-gray-900">
            Regulatory Insight Panels
          </h2>
          <p className="lg:text-[20px] text=[16px] text-gray-500 leading-[150%] font-[400]">
            Comprehensive Analysis of Global Regulatory Changes and Their Impact
            on Blockchain Assets
          </p>
        </div>

        <div className="flex lg:gap-8 gap6 flex-wrap justify-center">
          {regulatoryInsightData.map((data, index) => (
            <div
              className="w-full max-w-[384px] flex flex-col items-center text-center"
              key={index}
            >
              <div className="size-12 flex items-center justify-center rounded-full bg-[#EBEEFF] border-8 border-[#F5F5FF]">
                <Image
                  src={data.icon}
                  alt="icon"
                  height={24}
                  width={24}
                  sizes="auto"
                />
              </div>
              <h5 className="lg:text-[20px] text-[16px] font-semibold leading-[150%] text-gray-900 mt-5 mb-2">
                {data.title}
              </h5>
              <h1 className="lg:text-[16px] text-[14px] font-normal leading-[150%] text-gray-500">
                {data.description}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Home;
