"use client"
import React, { useEffect, useState } from "react";
import { Img, Text } from "../components";
import { useRouter } from 'next/router';
import {isAuth} from "../auth";
interface BrandProps {
  name: string;
  alt_names: string[];
}

const Section: React.FC<{ brandName: string }> = ({ brandName }) => {
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [popupContent, setPopupContent] = useState<string>('');
  const [brandData, setBrandData] = useState<BrandProps[]>([]);

  
  const handleEditClick = (item: string) => {
    setPopupContent(`Enter New name for ${item}: <input type="text" id="newNameInput" style="padding:3px;border:2px solid black; margin-top:3px;border-radius:5px" />`);
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
    setPopupContent('');
  };

  const handleDeleteBrand = async(brandName: string,altName:string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/brand/${brandName}/${altName}`, {
          method: 'DELETE',
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log(`Altname ${altName} deleted successfully.`);
  } catch (error) {
      console.error('Error deleting brand:', error);
  }


    setBrandData(brandData.filter(brand => brand.name !== brandName));
  };

  const handlePopupConfirm = () => {
    // Example function to handle popup confirmation
  };

  const fetchBrandData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/brand/${brandName}/altnames`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const altnames = await response.json();
      setBrandaltnames(altnames.alt_names);

      return altnames;
    } catch (error) {
      console.error('Error fetching brand data:', error);
      return [];
    }
  };

  const [altnames, setBrandaltnames] = useState<string[]>([]);

  useEffect(() => {
    const fetchAndSetBrandaltnames = async () => {
      const altnames = await fetchBrandData();
      console.log(altnames);
    };
    fetchAndSetBrandaltnames();
  }, []);

  useEffect(() => {
    console.log("Updated brandData:", brandData);
  }, [brandData]);

  return (
    <div className="w-full h-full mt-5">
      <table className="w-full p-3 mb-4 text-sm text-left rtl:text-right text-black-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Alternative name
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {altnames.map((item: string, index: number) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item}
              </th>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleEditClick(item);
                  }}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteBrand(brandName,item);
                  }}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isPopupVisible && (
        <Popup
          content={popupContent}
          onClose={handlePopupClose}
          onConfirm={handlePopupConfirm}
        />
      )}
    </div>
  );
};

interface PopupProps {
  content: string;
  onClose: () => void;
  onConfirm: () => void;
}

const Popup: React.FC<PopupProps> = ({ content, onClose, onConfirm }) => {
  return (
    <div className="absolute left-[50%] top-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-slate-50 border-2 rounded p-4 shadow-lg">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="mr-2 bg-gray-200 px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ChooseBrandPage() {
  if(!isAuth()){
    window.location.href = "../login"; return;
  }

  const images = [
    { src: "images/img_target_dynamic_color.png", alt: "targetdynamic" },
  ];

  const [brandCount, setBrandCount] = useState(0);
  const queryParams = new URLSearchParams(window.location.search);
  const brandname = queryParams.get('brandname');  


  return (
    <div className="w-full h-full min-h-screen bg-indigo-200">
      <div className="flex flex-row items-center justify-center w-full h-full gap-[101px] p-[35px] mx-auto md:px-5 sm:p-5 border-black-900 border border-solid bg-gray-100_04 max-w-[70%] m:auto">
        <div className="inner-container flex flex-col items-center justify-center w-full md:w-full  md:m1-5">
          <h1 className="text-3xl font-bold">{brandname}</h1>
          {typeof brandname === 'string' && <Section brandName={brandname} />}
          <div className="flex flex-row justify-between items-start w-[98%] md:w-full">
            <Text size="md" as="p" className="flex mt-2.5 !text-indigo-900 !text-[13.16px]">
              <span className="text-gray-500">Showing </span>
              <span className="text-indigo-800">{brandCount % 6}</span>
              <span className="text-indigo-900"></span>
              <span className="text-gray-500">from</span>
              <span className="text-indigo-900">{brandCount} </span>
              <span className="text-gray-500">data</span>
            </Text>
            <div className="flex flex-row justify-between items-center x[16%] md:h-auto border-white-A700 border border-solid">
              <Img src="images/img_dropdown.svg" alt="dropdommoneone" className=" h-[30px] w-[30px]" />
              <div className="flex flex-col items-center justify-start h-[47px] w-[47px]">
                <Text
                  size="2xl"
                  as="p"
                  className="flex justify-center items-center h-[47px] w-[47px] !text-white-A700 !text-[16.92px] !font-normal bg-indigo-500 text-shadow-ts1 text-center rounded-[23px]"
                >
                  1
                </Text>
              </div>
              <Img src="ges/ImiLdropdown_gray_500.svg" alt="dropdoanThree" className="h-[30px] w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
