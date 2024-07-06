import React, { useState, useEffect } from 'react';

type ApiResponse = {
  [key: string]: {
    positive: number;
    negative: number;
  };
};

type TransformedData = {
  positive: number;
  negative: number;
};

const monthNumbers: { [key: string]: number } = {
  "January": 1,
  "February": 2,
  "March": 3,
  "April": 4,
  "May": 5,
  "June": 6,
  "July": 7,
  "August": 8,
  "September": 9,
  "October": 10,
  "November": 11,
  "December": 12
};

let pos=0
let neg=0

const transformData = (data: ApiResponse): TransformedData[] => {
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const result = months.map(() => ({ positive: 0, negative: 0 }));
  for (const [month, values] of Object.entries(data)) {
    const index = months.indexOf(month);
    if (index !== -1) {
      result[index] = {
        positive: values.positive,
        negative: values.negative // Assuming negative values are stored directly
      };
      pos+=values.positive;
      neg+=values.negative;
    }
  }

  //sort data starting from August (index 7) to July (index 6)
  const sortedData = [
    ...result.slice(6), 
    ...result.slice(0, 6) 
  ];

  return sortedData;
};


const SentimentComp = () => {
  
  const [transformedData, setTransformedData] = useState<TransformedData[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem("RBM");
      if (storedData) {
        try {
          const parsedData: ApiResponse = JSON.parse(storedData);
          const data = transformData(parsedData);
          setTransformedData(data);
        } catch (error) {
          console.error("Error parsing local storage data:", error);
        }
      }
    };

    fetchData();
  }, []);

  const percentage = (pos-neg)/(pos+neg)
  const months = [
    "July", "August", "September", "October", "November", "December", // July to December
    "January", "February", "March", "April", "May", "June" // January to June
  ];

  return (
    <div className="w-[45%]  bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
        <dl>
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Sentiment Score</dt>
          <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-white">6/10</dd>
        </dl>
        <div>
         {percentage>=0 && <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
            </svg>
            Positive {Math.round(percentage*100)/100}
          </span>
          }
          {percentage<0 && <span className="bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-red-900 dark:text-red-300">
            <svg className="w-2.5 h-2.5 me-1.5 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
            </svg>
            Negative {Math.round(percentage*100)/100}
          </span>
          }
        </div>
      </div>

      <div className="grid grid-cols-2 py-3">
        <dl className="flex items-center">
          <dd className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></dd>
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Positive</dt>
        </dl>
        <dl className="flex items-center">
          <dd className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></dd>
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Negative</dt>
        </dl>
      </div>

      <div id="bar-chart">
        <svg viewBox="0 0 500 200" width="100%" height="50%">
          <g transform="translate(40,10)">
            {/* X-Axis */}
            <line x1="0" y1="150" x2="400" y2="150" stroke="black"/>
            {months.map((month, i) => (
              <text key={i} x={i * 30} y="165">{monthNumbers[month]}</text> 
            ))}
            {/* Y-Axis */}
            <line x1="0" y1="0" x2="400" y2="0" stroke="gray" strokeDasharray="4"/>
            <line x1="0" y1="75" x2="400" y2="75" stroke="gray" strokeDasharray="4"/>
            <line x1="0" y1="130" x2="400" y2="130" stroke="gray" strokeDasharray="4"/>
            
            <text x="-30" y="5">100</text>
            <text x="-30" y="75">50</text>
            <text x="-30" y="133">10</text>

            {/* Bars */}
            {transformedData.map((bar, i) => (
              <g key={i} transform={`translate(${i * 30}, 0)`}>
                <rect
                  x="0"
                  y={150 - bar.positive}
                  width="10"
                  rx="2" 
                  height={bar.positive}
                  fill="green"
                />
                <rect
                  x="10"
                  y={150 - Math.abs(bar.negative)}
                  width="10"
                  rx="2" 
                  height={Math.abs(bar.negative)}
                  fill="red"
                />
              </g>
            ))}
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 6 months</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last year</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SentimentComp;
