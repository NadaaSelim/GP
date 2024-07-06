import React, { useEffect, useState } from 'react';

interface CircleData {
  category: string;
  value: number;
}

interface CircleChartProps {
  data: CircleData[];
}

const CircleChart: React.FC<CircleChartProps> = ({ data }) => {
  // Calculate size based on value (adjust as needed for your specific scale)
  const calculateSize = (value: number) => {
    return 10 + value * 10; // Adjust multiplier as needed
  };

  const colorMap = ["pink", "purple", "blue", "yellow", "orange"];

  return (
    <div className="flex items-start justify-start">
      <div className="grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-full text-white flex items-center justify-center transition-transform transform hover:scale-105 cursor-pointer`}
            style={{
              width: calculateSize(item.value),
              height: calculateSize(item.value),
              backgroundColor: colorMap[index % colorMap.length],
              outline: '2px solid black', // Add outline with desired width and color
              border: '4px solid white',
            }}
            title={`${item.category}: ${item.value}`}
          >
            <span className="z-10 text-xs font-semibold">
              {item.category}
              <br />
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface AppProps {
  circleData: CircleData[];
}

const App = () => {
  const [data, setData] = useState<CircleData[]>([]);

  useEffect(() => {
    const retrieveDataFromLocalStorage = () => {
      const storedData = localStorage.getItem('WC');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        processData(parsedData);
      }
    };

    // Parse data and calculate total counts
    const processData = (data: any) => {
      const wordCounts: { [key: string]: number } = {};

      Object.entries(data).forEach(([word, platforms]) => {
        wordCounts[word] = Object.values(platforms as { [key: string]: number }).reduce((acc, val) => acc + val, 0);
      });

      const parsedData: CircleData[] = Object.entries(wordCounts).map(([word, count]) => ({
        category: word,
        value: count,
      }));

      setData(parsedData);
    };

    retrieveDataFromLocalStorage();
  }, []);

  return (
    <div className="border rounded-lg h-[40%] p-4 pb-0 bg-white mb-0">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1 mb-3">Most Associated Words</h5>
      <CircleChart data={data} />
    </div>
  );
};

export default App;
