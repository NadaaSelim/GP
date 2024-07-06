import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";

interface ChartData {
  name: string;
  data: number[];
}

interface ChartOptions {
  chart: {
    id: string;
  };
  xaxis: {
    categories: string[];
  };
  colors: string[];
}

interface ApiResponse {
  [key: string]: {
    positive: number;
    negative: number;
  };
}

const monthMap: { [key: string]: string } = {
  "Aug": "August",
  "Sep": "September",
  "Oct": "October",
  "Nov": "November",
  "Dec": "December",
  "Jan": "January",
  "Feb": "February",
  "Mar": "March",
  "Apr": "April",
  "May": "May",
  "June": "June",
  "July": "July"
};

const months = [
  "Aug", "Sep", "Oct", "Nov", "Dec",
  "Jan", "Feb", "Mar", "Apr", "May", "June", "July"
];

const transformData = (data: ApiResponse): number[] => {
  const result = months.map(month => {
    const fullMonthName = monthMap[month];
    if (data[fullMonthName]) {
      return data[fullMonthName].positive + data[fullMonthName].negative;
    } else {
      return 0; // Handle missing data for the month
    }
  });
  return result;
};

const App: React.FC = () => {
  const [series, setSeries] = useState<ChartData[]>([
    { name: "Twitter", data: [] },
    { name: "Talabat", data: [] },
    { name: "Elmenus", data: [] }
  ]);

  const options: ChartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: months,
    },
    colors: ["#000", "#FFA500", "#D30000"]
  };

  useEffect(() => {
    const fetchData = () => {
      const twitterData = localStorage.getItem("RBM-Twitter");
      const talabatData = localStorage.getItem("RBM-Talabat");
      const elmenusData = localStorage.getItem("RBM-Elmenus");

      const twitterSeries = twitterData ? transformData(JSON.parse(twitterData)) : [];
      const talabatSeries = talabatData ? transformData(JSON.parse(talabatData)) : [];
      const elmenusSeries = elmenusData ? transformData(JSON.parse(elmenusData)) : [];

      setSeries([
        { name: "Twitter", data: twitterSeries },
        { name: "Talabat", data: talabatSeries },
        { name: "Elmenus", data: elmenusSeries }
      ]);
    };

    fetchData();
  }, []);

  return (
    <div className="border rounded-lg w-[60%] h-[50%] p-4 pb-0 bg-white mb-0">
      <div className="row">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
          Number of Reviews Per Platform
        </h5>
        <div className="mixed-chart">
          <ApexCharts options={options} series={series} type="line" width={600} height={210} />
        </div>
      </div>
    </div>
  );
};

export default App;
