"use client";
import { Transition } from "@headlessui/react";
import React, { CSSProperties, useEffect, useState } from "react";

interface ProgressBarProps {
  width?: string;
  height?: string;
  progress?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
}

const ProgressBar = ({
  width = "full",
  height = "6",
  progress = 0,
  color = "bg-blue-500",
  backgroundColor = "bg-gray-200",
  className = "",
}: ProgressBarProps) => {
  // TODO: need to add more features like transitions, tooltip to show percentage and label which will be controlled form parent
  const [progressStyle, setProgressStyle] = useState<CSSProperties>({
    width: "0%",
    height,
  });

  useEffect(() => {
    const updateProgress = () => {
      if (progress > 100) {
        setProgressStyle({
          width: "100%",
          height,
        });
      } else if (progress < 0) {
        setProgressStyle({
          width: "0%",
          height,
        });
      } else {
        setProgressStyle({
          width: `${progress}%`,
          height,
        });
      }
    };
    updateProgress();
  }, [height, progress]);

  return (
    <div
      className={`relative transition-all duration-300 rounded-[44px] ${className}`}
      style={{ height, backgroundColor }}
      role="progressbar"
    >
      <Transition
        show
        as={"div"}
        enterFrom="w-0"
        enterTo="w-full"
        enter="transition ease-out duration-600 delay-300"
        className={`transition ease-out duration-600 absolute left-0 top-0 rounded-[inherit]
        z-10`}
        style={{ ...progressStyle, backgroundColor: color }}
      />
    </div>
  );
};

export { ProgressBar };
