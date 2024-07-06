import React, { useState } from 'react';

interface DonutChartProps {
  size: number;
  strokeWidth: number;
}

interface donutData{
  label:string;value:number;color:string;
} 

const DonutChart: React.FC<DonutChartProps> = ({ size, strokeWidth }) => {
  // const data = [
  //   { label: 'Positive', value: 60, color: '#4CAF50' },
  //   { label: 'Negative', value: 40, color: 'red' },
  // ];
  const WCSR = localStorage.getItem("os-sr");
  let data:donutData[]=[]
  console.log(WCSR)
  if(WCSR!=null){
      let parsed = JSON.parse(WCSR);
      data.push(
        {label:"Positive",value:parsed.positive, color:"#4CAF50"},
        {label:"Negative",value:parsed.negative, color:"red"},
      )
  }
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
        <DonutChart size={300} strokeWidth={60} />
      </div>
      <div className="flex justify-between items-center pt-5">

      
      </div>
    </div>
  );
};

export default App;
