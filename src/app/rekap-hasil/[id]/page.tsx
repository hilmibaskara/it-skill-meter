"use client"
import Navbar from "@/src/components/Navbar";
import Tabs from "@/src/components/Tabs";
import { hasilData } from "@/src/data/hasilData";
import CardKomponenHasil from "@/src/components/CardKomponenHasil";

interface Params {
  params: {
    id: string;
  };
}

export default function RekapHasilPage({ params }: Params) {
  const { id } = params;

  // Find the data with the matching id
  const data = hasilData.find((item) => item.id === parseInt(id, 10));

  return (
    <div className="min-h-screen px-6 md:px-8 py-8 pt-28">
      <Navbar />
      {data ? (
        // Data is defined
        <div className="flex flex-row">
          <div className="w-1/3 text-center pr-4">
            <p className="text-gray-500">{data.date}</p>
            <p className="text-gray-500 mb-4">Level kamu di {data.title} adalah ...</p>
            <div className="flex justify-center mt-12">
              <img src="/icons/level-1.svg" alt="" className="w-96"/>
            </div>  
            <h1 className="text-5xl font-bold text-black mb-4 pt-8">
              {data.level}
            </h1>
            <div className="bg-white h-96 mt-12 rounded-xl shadow-lg mx-8">
              {/* Additional content */}
            </div>
          </div>
          <Tabs />
          <div className="w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
            {data.evaluation.map((item, index) => (
              <CardKomponenHasil key={index} item={item} />
            ))}
          </div>
        </div>
  
      ) : (
        // Data is not defined
        <div className="flex flex-col items-center justify-center h-96">
          <h1 className="text-3xl font-bold mb-4">Data Not Found</h1>
          <p className="text-gray-500 mb-8">
            The data you are looking for does not exist or is currently unavailable.
          </p>
          <img src="/icons/not-found.svg" alt="Not Found" className="w-64 mb-4"/>
          <a href="/dashboard" className="text-blue-500 underline">
            Go back to Dashboard
          </a>
        </div>
      )}
    </div>
  );
}
