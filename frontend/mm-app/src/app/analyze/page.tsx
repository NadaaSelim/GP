"use client"
import React, { useState } from "react";
import { Img, Button, SelectBox, Sidebar1, Header } from "../components";
import { isAuth } from "../auth";

interface Brand {
  name: string;
  label: string;
  value: string;
  alt_names: string[];
}
type ApiResponse = {
  [key: string]: {
    positive: number;
    negative: number;
  };
};


let brands: Brand[] = [];

const platforms = [
  { label: "Elmenus", value: "elmenus" },
  { label: "Talabat", value: "Talabat" },
  { label: "Twitter", value: "twitter" }
];
const combineMonthlyReviews = (existingData:ApiResponse, newData:ApiResponse) => {
  const combinedData = { ...existingData };
  
  Object.keys(newData).forEach(month => {
    if (combinedData[month]) {
      combinedData[month].positive += newData[month].positive;
      combinedData[month].negative += newData[month].negative;
    } else {
      combinedData[month] = { ...newData[month] };
    }
  });

  return combinedData;
};

const getRequestByMonth = async (brand:string, platform:string, lang:string) => {
  const endpoint = `http://127.0.0.1:8000/predict/${lang}/${brand}/${platform}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log("API response:", result);
      const platformStorageKey = localStorage.getItem(`RBM-${platform}`);
      let existingPlatformData ={}
      if(platformStorageKey !=null)
         existingPlatformData = JSON.parse((platformStorageKey));
      const combinedPlatformData = combineMonthlyReviews(existingPlatformData, result);
      localStorage.setItem(`RBM-${platform}`, JSON.stringify(combinedPlatformData));


      const combinedStorageKey = `RBM`;
      const item = localStorage.getItem(combinedStorageKey)
      let existingCombinedData = {};

      if(item !=null)
           existingCombinedData = JSON.parse(item);
      const combinedData = combineMonthlyReviews(existingCombinedData, result);
      localStorage.setItem(combinedStorageKey, JSON.stringify(combinedData));
      
    } else {
      console.error("API error:", response.statusText);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};



const fetchData = async (brand:string, platform:string, lang:string) => {
  const endpoint = `http://127.0.0.1:8000/predict/${lang}/${brand}/${platform}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log("API response:", result);

      const storageKey = `os-sr-${platform}`;
      let data = localStorage.getItem(storageKey)
      
      let existingData =  { positive: 0, negative: 0 };
      let os_sr =   localStorage.getItem('os-sr')
      
      if(data != null){
        existingData = JSON.parse(data) 
}

      localStorage.setItem(storageKey, JSON.stringify({
        positive: existingData.positive + result.positive,
        negative: existingData.negative + result.negative,
        num_reviews:  result.num_reviews,
        created_at: result.created_at
      }));

      if(os_sr!=null){
        let os_sr_data = JSON.parse(os_sr)

      localStorage.setItem('os-sr', JSON.stringify({
        positive: os_sr_data.positive + result.positive,
        negative: os_sr_data.negative + result.negative,
        num_reviews: result.num_reviews,
        created_at: result.created_at
      }));}
    } else {
      console.error("API error:", response.statusText);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};


export default function AnalyzereviewsPage() {
  if (!isAuth()) {
    window.location.href = "../login";
    return;
  }

  const userString = localStorage.getItem('user');
  if (userString != null) {
    let user = JSON.parse(userString);
    brands = user.brands;
  }

  const transformedBrands = brands.map((brand) => ({
    value: brand.name,
    label: brand.name,
  }));

  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const handleAnalyzeClick = async () => {
    if (!selectedBrand || selectedPlatforms.length == 0) {
      alert("Please select a brand and at least one platform.");
      return;
    }
    localStorage.removeItem('os-rs');
    localStorage.removeItem('os-rs-Talabat');
    localStorage.removeItem('os-rs-Twitter');
    localStorage.removeItem('os-rs-Elmenus');
    localStorage.removeItem('RBM');
    localStorage.removeItem('RBM-Talabat');
    localStorage.removeItem('RBM-Twitter');
    localStorage.removeItem('RBM-Elmenus');

    selectedPlatforms.forEach(platform => {
      fetchData(selectedBrand, platform, 'en'); // English version
      fetchData(selectedBrand, platform, 'ar'); // Arabic version
      getRequestByMonth(selectedBrand,platform,'en')
      getRequestByMonth(selectedBrand,platform,'ar')

    });
    alert("Analysis Done!");
  };

  return (
    <div className="min-h-screen w-full bg-white-A700 relative">
      <div className="flex flex-row md:flex-col justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto md:gap-5 absolute">
        <Sidebar1 selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} className="w-[242px] min-h-screen top-0 bg-gray-100_03 !sticky overflow-hidden "/>
        <div className="flex flex-col justify-center items-center w-full mt-3 ml-[17%] pb-2 ">
          <Header />
          <div className="h-px mt-14 w-full md:ml-0 ml-[-40px] bg-blue_gray-100_02"></div>
          <div className="flex flex-col justify-between items-start w-full h-full bg-white-A700">
            <div className="flex flex-col justify-between items-start w-full h-full bg-white-A700 gap-10">
              <h1 className="mt-3 md:ml-0 !text-blue_gray-900_01 tracking-[0.50px] text-[40px] font-medium">
                Analyze Reviews
              </h1>
            </div>
            <div className="flex flex-row md:ml-0 sm:flex-col justify-start items-center w-[90%] mt-10 gap-20 ">
              <p className="w-[10%] pl-3 text-lg font-semibold tracking-[0.50px]">
                Brand
              </p>
              <SelectBox
                shape="round"
                indicator={<Img src="../images/img_polygon.svg" className="hover:border-blue-500" alt="Polygon"/>}
                name="selectabrand"
                placeholder="Select a Brand"
                options={transformedBrands}
                className="w-[59%] font-inter text-lg font-light border-black-900 border-[0.5px] border-solid ml-[10px] hover:border-blue-500"
                required
                onChange={(value: {label:string;value:string}) => setSelectedBrand(value.value)}
                />
            </div>
            <div className="flex flex-row md:ml-0 sm:flex-col justify-start items-center w-[90%] mt-10 gap-20 ">
              <p className="w-[10%] pl-3 text-lg font-semibold tracking-[0.50px]">
                Platforms
              </p>
              <SelectBox
                isMulti={true}
                shape="round"
                indicator={<Img src="../images/img_polygon.svg" alt="Polygon"/>}
                name="selectplatform"
                placeholder="Select Platforms"
                options={platforms}
                className="w-[59%] font-inter text-lg font-light border-black-900 border-[0.5px] border-solid ml-[10px] hover:border-blue-500"
                required
                onChange={(values: any[]) => setSelectedPlatforms(values.map((v: { value: any; }) => v.value))}
              />
            </div>
            <Button
              shape="round"
              className="mt-20 m-auto sm:px-5 tracking-[2.40px] font-extrabold w-[25%]"
              onClick={handleAnalyzeClick}
            >
              Analyze
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
