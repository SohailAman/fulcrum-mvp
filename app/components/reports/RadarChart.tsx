"use client";
import { useDimensions } from "@/app/hooks/useDimensions";
import { FC, useEffect, useState } from "react";
import Chart from "react-apexcharts";

// Define props for LineChart, similar to BoxPlotChart
interface ChartProps {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
  chartHeading?: string | number; // Optional: Chart heading
  className?: string;
  legend?: boolean;
  categories?: string[];
  height?: number;
  stepSize?: number;
  maxStep?: number;
  stepMin?: number;
}

// LineChart component using ApexCharts for line chart
const RadarChart: FC<ChartProps> = ({
  series,
  chartHeading = "",
  className = "",
  legend = false,
  categories,
  height = 431,
  stepSize = 100,
  maxStep = 400,
  stepMin = 0,
}) => {
  const { width } = useDimensions();
  const [chartHeight, setChartHeight] = useState<string | number>(height);

  useEffect(() => {
    if (width > 998) {
      setChartHeight(height);
    } else {
      setChartHeight(221);
    }
  }, [height, width]);

  // Options for ApexCharts, adjusted for line chart
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radar",
      height: chartHeight,
      zoom: {
        enabled: false, // Disable zoom
      },
      toolbar: {
        show: false, // Hide Toolbar
      },
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: "#e9e9e9",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
    stroke: {
      width: 2,
    },

    fill: {
      opacity: 0.1,
    },
    legend: {
      show: legend, // show Legends
      position: "top",
      itemMargin: {
        horizontal: 6.5,
      },
      offsetY: 22,
      horizontalAlign: "right",
      markers: {
        fillColors: ["#7F56D9", "#B692F6", "#53389E"],
        height: 8,
        width: 8,
      },
      labels: {
        colors: "#667085",
      },
      fontSize: "14px",
      fontWeight: 400,
    },
    title: {
      text: String(chartHeading),
      align: "left",
      style: {
        color: "#101828", // Set title text color based on theme
        fontWeight: 500,
        fontSize: "14px",
        fontFamily: "inter",
      },
    },
    xaxis: {
      categories,
    },
    yaxis: {
      min: stepMin, // Adjust as needed based on your data
      stepSize,
      max: maxStep, // Adjust as needed based on your data
      title: {
        text: "", // Set a title for the Y-axis
      },
      labels: {
        show: false,
      },
    },
  };

  return (
    <div
      className={`radar-chart lg:scale-[1.3] lg:-mb-16 -mb-8 lg:mt-4 max-lg:w-full ${className}`}
    >
      {series && series.length > 0 ? (
        <Chart
          options={options}
          series={series}
          height={chartHeight}
          type="radar"
        />
      ) : (
        <p className="text-[14px] font-medium text-[#253238]">
          No data found for {chartHeading}
        </p>
      )}
    </div>
  );
};

export default RadarChart;
