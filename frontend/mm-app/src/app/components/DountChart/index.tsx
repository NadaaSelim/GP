import React, { useState } from 'react';

interface DonutChartProps {
  size: number;
  strokeWidth: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ size, strokeWidth }) => {
  const data = [
    { label: 'Label 1', value: 60, color: '#4CAF50' },
    { label: 'Label 2', value: 40, color: '#2196F3' },
  ];

  const total = data.reduce((acc, { value }) => acc + value, 0);

  const [hoveredSegment, setHoveredSegment] = useState<{ label: string; percentage: number; value:number } | null>(null);

  let startAngle = -90;

  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        {data.map(({ value, color, label }, index) => {
          const percentage = (value / total) * 100;
          const angle = (percentage * 360) / 100;
          const endAngle = startAngle + angle;

          const outerRadius = size / 2 - strokeWidth / 2;
          const outerStartX = size / 2 + outerRadius * Math.cos((startAngle * Math.PI) / 180);
          const outerStartY = size / 2 + outerRadius * Math.sin((startAngle * Math.PI) / 180);
          const outerEndX = size / 2 + outerRadius * Math.cos((endAngle * Math.PI) / 180);
          const outerEndY = size / 2 + outerRadius * Math.sin((endAngle * Math.PI) / 180);

          const innerRadius = size / 4;
          const innerStartX = size / 2 + innerRadius * Math.cos((endAngle * Math.PI) / 180);
          const innerStartY = size / 2 + innerRadius * Math.sin((endAngle * Math.PI) / 180);
          const innerEndX = size / 2 + innerRadius * Math.cos((startAngle * Math.PI) / 180);
          const innerEndY = size / 2 + innerRadius * Math.sin((startAngle * Math.PI) / 180);

          const largeArcFlag = angle > 180 ? 1 : 0;

          const pathData = `
            M ${outerStartX.toFixed(2)} ${outerStartY.toFixed(2)}
            A ${outerRadius.toFixed(2)} ${outerRadius.toFixed(2)} 0 ${largeArcFlag} 1 ${outerEndX.toFixed(2)} ${outerEndY.toFixed(2)}
            L ${innerStartX.toFixed(2)} ${innerStartY.toFixed(2)}
            A ${innerRadius.toFixed(2)} ${innerRadius.toFixed(2)} 0 ${largeArcFlag} 0 ${innerEndX.toFixed(2)} ${innerEndY.toFixed(2)}
            Z
          `;

          startAngle = endAngle;

          return (
            <g
              key={index}
              onMouseEnter={() => setHoveredSegment({ label, percentage,value })}
              onMouseLeave={() => setHoveredSegment(null)}
            >
              <path d={pathData} fill={color} />
            </g>
          );
        })}
      </svg>
      {hoveredSegment && (
        <div className="absolute bg-white text-black p-2 block-3 rounded shadow" style={{ top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <p className="text-sm font-semibold">{hoveredSegment.label}: {hoveredSegment.percentage.toFixed(2)}%</p>
          <p className="text-sm font-semibold">Reviews: {hoveredSegment.value}</p>

        </div>
      )}
    </div>
  );
};


const App: React.FC = () => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">Overall Sentiment</h5>
      <div className="py-6">
        <DonutChart size={200} strokeWidth={50} />
      </div>
      <div className="flex justify-between items-center pt-5">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="lastDaysdropdown"
          data-dropdown-placement="bottom"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
          type="button"
        >
          Last 7 days
          <svg
            className="w-2.5 m-2.5 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Yesterday
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Today
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Last 7 days
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Last 30 days
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Last 90 days
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
        >
          Traffic analysis
          <svg
            className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
