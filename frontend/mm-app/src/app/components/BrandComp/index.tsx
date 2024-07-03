import React from 'react';

interface BrandCompProps {
    brandName: string;
    onDelete: (brandName: string) => void;
    onClick: (brandName: string) => void;
}

const BrandComponent: React.FC<BrandCompProps> = ({ brandName, onDelete, onClick }) => {

    const handleDelete = async (): Promise<void> => {
        const apiUrl = `http://127.0.0.1:8000/brand/${brandName}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            onDelete(brandName);

            console.log(`Brand ${brandName} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting brand:', error);
        }
    };

    return (
        <div className="flex flex-row md:flex-col justify-between items-center w-[98%] md:w-full md:gap-10 mb-1" onClick={() => onClick(brandName)}>
            <div className="flex flex-row sm:flex-col justify-center items-end w-[82%] md:w-full sm:gap-5">
                <img
                    src={`images/${brandName}.png`} // Adjust image source path as per your structure
                    alt={brandName}
                    className="w-[8%] md:h-auto sm:w-full mb-[7px] object-cover"
                />
                <div className="flex flex-row justify-start w-[35%] sm:w-full mt-[5px] ml-3.5 sm:ml-0 sm:mt-0">
                    <h5 className="text-[28.58px] font-semibold">
                        {brandName}
                    </h5>
                </div>
                <p className="ml-[30px] md:ml-5 text-gray-500 text-[22.82px] font-normal">
                    {/* Add any additional information here */}
                </p>
            </div>
            <button className="w-[5%] mt-3 border-2 font-extrabold border-[#000] text-slate-50 rounded bg-red-500"
                    onClick={handleDelete}>
                X
            </button>
        </div>
    );
};

export default BrandComponent;
