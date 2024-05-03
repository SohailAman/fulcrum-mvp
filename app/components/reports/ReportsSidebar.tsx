import Link from "next/link";
import React from "react";

interface sidebarItemsType {
  keyHeading: string;
  subItems?: { label: string }[];
}

const sidebarItems: sidebarItemsType[] = [
  {
    keyHeading: "Interactive Rating",
    subItems: [
      { label: "Graphs and Charts" },
      { label: "Key Metrics Display" },
      { label: "Historical Rating Trends" },
      { label: "Sector Comparison" },
    ],
  },
  {
    keyHeading: "Technology Stack",
  },
  {
    keyHeading: "Detailed Rating Analysis",
    subItems: [
      { label: "Textual Analysis" },
      { label: "Market Demand and Liquidity" },
      { label: "Regulatory Compliance" },
    ],
  },
  {
    keyHeading: "Comparative Analysis Tools",
    subItems: [{ label: "Benchmarking Tool" }, { label: "Scenario Analysis" }],
  },
];

const ReportsSidebar = () => {
  return (
    <div className="w-[312px] px-4 py-24 !sticky top-0 max-lg:hidden">
      {sidebarItems.map((item, itemIndex) => (
        <React.Fragment key={itemIndex}>
          <h3 className="py-2 px-3 text-[16px] leading-[150%] font-[400] capitalize text-neutral-900">
            {item.keyHeading}
          </h3>
          {item?.subItems && (
            <ul className="p-0 m-0 list-none">
              {item?.subItems?.map((subItem, index) => (
                <li key={index}>
                  <Link
                    href={"#"}
                    className={`block py-2 pl-12 pr-3 text-[16px] leading-[150%] font-[400] capitalize text-neutral-900 border rounded-[4px] ${
                      itemIndex === 0 && index === 0
                        ? "border-light bg-gradient-to-r from-[#fbfbfd] to-[#e4e7f8]"
                        : "border-transparent"
                    }`}
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ReportsSidebar;
