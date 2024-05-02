"use client";

import { seriesCaparison } from "@/app/constants/ReportPageContent";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ProgressBar } from "../common/ProgressBar/ProgressBar";
import { RadarChart } from "./RadarChart";

const BenchmarkingSection = () => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg w-full flex-col flex lg:flex-col xl:items-stretch xl:flex-row justify-center xl:justify-between bg-white xl:max-h-[366px] lg:overflow-y-hidden max-lg:gap-4">
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
              htmlFor="custom2"
            >
              <input
                type="checkbox"
                className="peer relative appearance-none"
                id="custom2"
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
              htmlFor="custom3"
            >
              <input
                type="checkbox"
                className="peer relative appearance-none"
                id="custom3"
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
              htmlFor="custom4"
            >
              <input
                type="checkbox"
                className="peer relative appearance-none"
                id="custom4"
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
              htmlFor="custom5"
            >
              <input
                type="checkbox"
                className="peer relative appearance-none"
                id="custom5"
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
              htmlFor="custom6"
            >
              <input
                type="checkbox"
                className="peer relative appearance-none"
                id="custom6"
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
              <p className="text-[12px] font-medium leading-[133%]">Legend 1</p>
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
              <p className="text-[12px] font-medium leading-[133%]">Legend 2</p>
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
              <p className="text-[12px] font-medium leading-[133%]">Legend 1</p>
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
  );
};

export { BenchmarkingSection };
