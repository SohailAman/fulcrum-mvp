"use client";

import { FC } from "react";
import Chart from "react-apexcharts";

// Define props for LineChart, similar to BoxPlotChart
interface ChartProps {
  type?:
    | "area"
    | "line"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap"
    | undefined;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
  chartHeading?: string | number; // Optional: Chart heading
  legend?: boolean;
  offsetY?: number;
  labels?: boolean;
  categoryLabels?: boolean;
  grid?: boolean;
  axisBorder?: boolean;
  categories?: string[];
  markerColor?: string[];
  fillColors?: string[];
  height?: number;
  width?: string | number;
  stepSize?: number;
  maxStep?: number;
  strokeWidth?: number;
  gradientStops?: number[];
  horizontalAlign?: "left" | "right" | "center" | undefined;
  legendPosition?: "left" | "top" | "right" | "bottom" | undefined;
}

// LineChart component using ApexCharts for line chart
export const ReportChart: FC<ChartProps> = ({
  type,
  series,
  strokeWidth = 2,
  chartHeading = "",
  legend = false,
  offsetY = 22,
  labels = true,
  categoryLabels = false,
  grid = true,
  axisBorder = true,
  categories,
  markerColor,
  fillColors,
  height = 255,
  width,
  stepSize = 100,
  maxStep = 400,
  gradientStops = [0, 70, 100],
  horizontalAlign,
  legendPosition,
}) => {
  // Options for ApexCharts, adjusted for line chart
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: type || "area",
      height,
      width: width || "auto",
      zoom: {
        enabled: false, // Disable zoom
      },
      toolbar: {
        show: false, // Hide Toolbar
      },
    },
    stroke: {
      curve: "smooth", // Add a smooth curve to the lines
      width: strokeWidth,
      colors: fillColors,
      fill: {
        colors: fillColors,
        opacity: 1,
      },
    },
    labels: categoryLabels ? categories : undefined,
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: type === "donut" ? "solid" : "gradient",
      colors: fillColors,
      gradient:
        type === "donut"
          ? undefined
          : {
              shadeIntensity: 1,
              opacityFrom: 0.05,
              opacityTo: 0.6,
              stops: gradientStops,
            },
    },
    legend: {
      show: legend, // show Legends
      itemMargin: {
        horizontal: 6.5,
      },
      offsetY: offsetY,
      position: legendPosition || "top",
      horizontalAlign: horizontalAlign || "right",
      markers: {
        fillColors: markerColor || ["#7F56D9", "#B692F6", "#53389E"],
        height: 8,
        width: 8,
      },
      labels: {
        colors: "#667085",
      },
      fontSize: categoryLabels ? "12px" : "14px",
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
      type: "category",
      categories: categories,
      tickPlacement: "left",
      labels: {
        show: labels,
      },
      axisBorder: {
        show: axisBorder,
        color: axisBorder ? "#EAECF0" : "transparent",
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0, // Adjust as needed based on your data
      stepSize: stepSize,
      max: maxStep, // Adjust as needed based on your data
      title: {
        text: "", // Set a title for the Y-axis
      },
      labels: {
        show: false,
        align: "left",
      },
    },
    tooltip: {
      marker: {
        fillColors: markerColor || ["#7F56D9", "#B692F6", "#53389E"],
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: grid,
        },
      },
    },
  };

  return (
    <div className="h-auto">
      {series && series.length > 0 ? (
        <Chart
          options={options}
          series={series}
          height={height}
          type={type || "area"}
        />
      ) : (
        <p className="text-[14px] font-medium text-[#253238]">
          No data found for {chartHeading}
        </p>
      )}
    </div>
  );
};
