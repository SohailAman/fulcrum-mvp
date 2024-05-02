"use client";
import MultiRangeSlider from "multi-range-slider-react";
import { useState } from "react";

const RangeSliders = () => {
  // =========
  const [values, setValues] = useState({
    minValue: 0,
    maxValue: 5,
  });
  const handleInput = (data: { minValue: number; maxValue: number }) => {
    setValues(data);
  };
  // =========
  const [values2, setValues2] = useState({
    minValue: 2,
    maxValue: 9,
  });
  const handleInput2 = (data: { minValue: number; maxValue: number }) => {
    setValues2(data);
  };
  // =========
  const [values3, setValues3] = useState({
    minValue: 2,
    maxValue: 9,
  });
  const handleInput3 = (data: { minValue: number; maxValue: number }) => {
    setValues3(data);
  };
  // =========
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="h-[59px] flex flex-col w-full">
        <span className="text-[14px] text-gray-700 leading-[142%] font-medium">
          abc
        </span>
        <MultiRangeSlider
          className="!p-0 !border-0 !shadow-none mt-2.5 h-[33px] range-slider single"
          barInnerColor="#32A6F9"
          thumbLeftColor="transparent"
          thumbRightColor="#FFFFFF"
          canMinMaxValueSame
          min={0}
          max={10}
          step={1}
          labels={["1", "", "3", "", "5", "", "6", "", "8", "", "10"]}
          minValue={0}
          maxValue={values.maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
      <div className="h-[59px] flex flex-col w-full">
        <span className="text-[14px] text-gray-700 leading-[142%] font-medium">
          abc
        </span>
        <MultiRangeSlider
          className="!p-0 !border-0 !shadow-none mt-2.5 h-[33px] range-slider"
          barInnerColor="#32A6F9"
          thumbLeftColor="#FFFFFF"
          thumbRightColor="#FFFFFF"
          min={0}
          max={10}
          step={1}
          labels={["1", "", "3", "", "5", "", "6", "", "8", "", "10"]}
          minValue={values2.minValue}
          maxValue={values2.maxValue}
          onInput={(e) => {
            handleInput2(e);
          }}
        />
      </div>
      <div className="h-[59px] flex flex-col w-full">
        <span className="text-[14px] text-gray-700 leading-[142%] font-medium">
          abc
        </span>
        <MultiRangeSlider
          className="!p-0 !border-0 !shadow-none mt-2.5 h-[33px] range-slider"
          barInnerColor="#32A6F9"
          thumbLeftColor="#FFFFFF"
          thumbRightColor="#FFFFFF"
          min={0}
          max={10}
          step={1}
          labels={["1", "", "3", "", "5", "", "6", "", "8", "", "10"]}
          minValue={values3.minValue}
          maxValue={values3.maxValue}
          onInput={(e) => {
            handleInput3(e);
          }}
        />
      </div>
    </div>
  );
};

export { RangeSliders };
