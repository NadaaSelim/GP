import React from 'react';

const SentimentComp = () => {
  return (
    <div className="w-[45%]  bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
        <dl>
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Sentiment Score</dt>
          <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-white">6/10</dd>
        </dl>
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
            </svg>
            Positive 3%
          </span>
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
        <svg viewBox="0 0 500 200" width="100%" height="100%">
          <g transform="translate(40,10)">
            {/* X-Axis */}
            <line x1="0" y1="150" x2="400" y2="150" stroke="black"/>
            {Array.from({ length: 12 }, (_, i) => (
              <text key={i} x={i * 30} y="165">{i + 1}</text>
            ))}

            {/* Y-Axis */}
            <line x1="0" y1="0" x2="400" y2="0" stroke="gray" strokeDasharray="4"/>
            <line x1="0" y1="50" x2="400" y2="50" stroke="gray" strokeDasharray="4"/>
            <line x1="0" y1="100" x2="400" y2="100" stroke="gray" strokeDasharray="4"/>
            
            <text x="-30" y="5">150</text>
            <text x="-30" y="55">100</text>
            <text x="-30" y="103">50</text>

            {/* Bars */}
            {[
              { positive: 20, negative: -30 },
              { positive: 50, negative: -20 },
              { positive: 30, negative: -50 },
              { positive: 40, negative: -10 },
              { positive: 70, negative: -60 },
              { positive: 60, negative: -40 },
              { positive: 80, negative: -50 },
              { positive: 90, negative: -70 },
              { positive: 100, negative: -80 },
              { positive: 110, negative: -90 },
              { positive: 120, negative: -100 },
              { positive: 130, negative: -110 },
            ].map((bar, i) => (
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
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button"
          >
            Last 12 months
            <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
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
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          >
            Revenue Report
            <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SentimentComp;
