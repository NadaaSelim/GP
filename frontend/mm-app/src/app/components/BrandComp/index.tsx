import React from 'react';

interface BrandData {
    imageSrc: string;
    brandName: string;
    date: string;
}

interface BrandComponentProps {
    brandData: BrandData;
}

const BrandComponent: React.FC<BrandComponentProps> = ({ brandData }) => {
    const { imageSrc, brandName, date } = brandData;

    return (
        <div className="flex flex-row md:flex-col justify-between items-center w-[98%] md:w-full md:gap-10 mb-1">
            <div className="flex flex-row sm:flex-col justify-center items-end w-[82%] md:w-full sm:gap-5">
                <img
                    src={imageSrc}
                    alt={brandName}
                    className="w-[8%] md:h-auto sm:w-full mb-[7px] object-cover"
                />
                <div className="flex flex-row justify-start w-[35%] sm:w-full mt-[5px] ml-3.5 sm:ml-0 sm:mt-0">
                    <h5 className="text-[28.58px] font-semibold">
                        {brandName}
                    </h5>
                </div>
                <p className="ml-[30px] md:ml-5 text-gray-500 text-[22.82px] font-normal">
                    {date}
                </p>
            </div>
            <button className="w-[39px] px-[7px] rounded-[50%] bg-yellow-100">
                <img src="images/img_component_4.png" alt="Button Icon" />
            </button>
        </div>
    );

};

export default BrandComponent;
