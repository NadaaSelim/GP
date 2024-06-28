import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import ApexCharts from "apexcharts"; // Import ApexCharts library

// Dynamic import for Next.js
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface BarChartProps {
  data: { category: string; twitter: number; facebook: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current) {
      const categories = data.map(item => item.category); // Extract categories from data

      // Prepare series data for Twitter and Facebook
      const series = [
        
        {
          name: "Facebook",
          data: data.map(item => item.facebook),
        },
        {
          name: "Twitter",
          data: data.map(item => item.twitter),
        }
      ];

      // Chart options configuration
      const chartOptions = {
        chart: {
          type: "bar",
          height: 250,
          stacked: true, // Enable stacked bars
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        colors: ["#1E90FF", "#000"], // Twitter (black) and Facebook (blue) colors
        series: series,
        xaxis: {
          categories: categories,
          labels: {
            style: {
              fontSize: "14px",
            },
          },
        },
        yaxis: {
          min: 0,
          max: 200, // my data range
          tickAmount: 5,
          labels: {
            formatter: function (val: number) {
              return val.toFixed(0);
            },
          },
          title: {
            text: "Counts",
            style: {
              fontSize: "14px",
              fontWeight: 600,
              color: "#333",
            },
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetY: 10,
          labels: {
            colors: ["#1E90FF", "#000"], // Twitter (black) and Facebook (blue) legend label colors
          },
        },
        tooltip: {
          y: {
            formatter: function (val: number) {
              return val.toFixed(0);
            },
          },
        },
      };

      const chart = new ApexCharts(chartRef.current, chartOptions);

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return (
    <div className="border rounded-lg  p-4 pb-0 bg-white mb-0">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">Word Count</h5>
        <h6 className="text-base mt-2 mb-4 font-normal text-gray-500 dark:text-gray-400 pb-1">Know frequency of most associated words across platforms</h6>
      <div ref={chartRef} />
    </div>
  );
};

export default BarChart;
