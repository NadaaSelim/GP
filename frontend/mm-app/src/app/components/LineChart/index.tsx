import React from "react";
import ApexCharts from "react-apexcharts";  // Likely named ApexCharts instead of Chart

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
  

  //colors : {cols: string[]};
}

const App: React.FC = () => {
  const options: ChartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["01", "02","03", "04", "05", "06", "07", "08", "09","10","11","12"],
    },
colors:["#1877F2","#000"]
    //colors: {cols: ["#00FF00"]}

  };

  const series: ChartData[] = [
    {
      name: "facebook",
      data: [30, 40, 145, 50, 200, 60, 70, 91,59, 37, 12, 31],
    },
    {
        name: "twitter",
        data: [0, 43, 12, 76, 59, 37, 12, 31,59, 37, 12, 31],
        
      },
  
  ];
  const series2: ChartData[] = [
      ];

  return (
    <div className="border rounded-lg w-[60%] h-[50%]  p-4 pb-0 bg-white mb-0">
      <div className="row">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
        Number of Reviews Per Platform</h5>

        <div className="mixed-chart">
          <ApexCharts options={options} series={series} type="line" width={600} height={210} />

        </div>
      </div>
    </div>
  );
};

export default App;
