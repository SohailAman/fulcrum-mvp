import Image from "next/image";
import React, { FC } from "react";

interface Props {
  className?: string;
  imageClassName?: string;
  data: {
    image: string;
    subtitle: string;
    title: string;
  };
}

const RatingsAnalysisCard: FC<Props> = ({
  data,
  className,
  imageClassName,
}) => {
  return (
    <div
      className={`group rounded-lg cursor-grab overflow-hidden shadow-card min-h-[191px] relative w-full border border-light hover:-translate-y-2 transition-all ease-out duration-300 ${className}`}
    >
      <h5 className="text-[12px] text-gray-600 font-medium leading-normal">
        {data?.subtitle}
      </h5>
      <h5 className="text-[16px] text-gray-800 font-bold leading-normal">
        {data?.title}
      </h5>
      <div
        className={`absolute group-hover:opacity-100 group-hover:translate-y-0 md:translate-y-2 md:opacity-0 transition-all ease-out duration-300 ${imageClassName}`}
      >
        <Image alt="image" src={data?.image} fill sizes="auto" />
      </div>
    </div>
  );
};

export { RatingsAnalysisCard };
