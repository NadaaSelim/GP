import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import ApexCharts from "apexcharts"; // Import ApexCharts library

// Dynamic import for Next.js
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart: React.FC = () => {
  const chartRef = useRef<any>(null);
  const [data, setData] = useState<{ category: string; twitter: number; talabat: number; elmenus: number }[]>([]);

  useEffect(() => {
    // Retrieve and process data from localStorage
    const retrieveDataFromLocalStorage = () => {
      const storedData = localStorage.getItem('WC');
      if (storedData) {
        const parsedData = JSON.parse(storedData);

        const formattedData = Object.entries(parsedData).map(([word, platforms]) => {
          const platformCounts = platforms as { [key: string]: number };
          return {
            category: word,
            twitter: platformCounts["Twitter"] || 0,
            talabat: platformCounts["Talabat"] || 0,
            elmenus: platformCounts["Elmenus"] || 0,
          };
        });
    
        setData(formattedData);
      }
    };

    retrieveDataFromLocalStorage();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const categories = data.map(item => item.category); // Extract categories from data

      // Prepare series data for Twitter, Talabat, and Elmenus
      const series = [
        {
          name: "Twitter",
          data: data.map(item => item.twitter),
        },
        {
          name: "Talabat",
          data: data.map(item => item.talabat),
        },
        {
          name: "Elmenus",
          data: data.map(item => item.elmenus),
        },
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
        colors: ["#000", "#FFA500", "#D30000"], // Twitter (black), Talabat (orange), Elmenus (red)
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
          max: 100, 
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
            colors: ["#000", "#FFA500", "#D30000"], // Twitter (black), Talabat (orange), Elmenus (red)
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
    <div className="border rounded-lg p-4 pb-0 bg-white mb-0">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">Word Count</h5>
      <h6 className="text-base mt-2 mb-4 font-normal text-gray-500 dark:text-gray-400 pb-1">
        Know frequency of most associated words across platforms
      </h6>
      <div ref={chartRef} />
    </div>
  );
};

export default BarChart;
