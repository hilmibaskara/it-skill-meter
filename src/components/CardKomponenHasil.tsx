// components/EvaluationCard.tsx
import Image from "next/image";

// Function to fetch the icon based on title_id
interface KomponenItem {
  id: number;
  nama: string;
  icon: string;
}

interface ItemProps {
  title_id: number;
  title: string;
  score: number;
  deskripsi: string;
}

interface CardKomponenHasilProps {
  item: ItemProps;
}

const getIconById = (id: number): string | null => {
  const komponen = [
    {
      id: 1,
      nama: "Pemahaman dan Pengetahuan Teknis",
      icon: "/icons/knowledge.svg",
    },
    { id: 2, nama: "Keterampilan Komunikasi", icon: "/icons/komunikasi.svg" },
    { id: 3, nama: "Kreativitas dan Inovasi", icon: "/icons/creativity.svg" },
    { id: 4, nama: "Pemecahan Masalah", icon: "/icons/pemecahan-masalah.svg" },
    { id: 5, nama: "Penggunaan Waktu", icon: "/icons/penggunaan-waktu.svg" },
    {
      id: 6,
      nama: "Kepercayaan Diri dan Sikap",
      icon: "/icons/kepercayaan-diri.svg",
    },
  ];

  const komponenItem = komponen.find((item) => item.id === id);
  return komponenItem ? komponenItem.icon : null;
};

export default function CardKomponenHasil({ item }: CardKomponenHasilProps) {
  return (
    <div className="bg-white p-4 h-64 shadow-lg rounded-xl relative flex flex-col space-y-4">
      {/* Title card */}
      <div className="flex justify-between items-center">
        <div className="flex flex-row">
          <div className="w-12 h-12 bg-gray-100 rounded-full p-2 mr-4">
            <Image
              src={getIconById(item.title_id) || '/icons/default.svg'}
              alt={item.title}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-black flex items-center">{item.title}</h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-8 h-8 text-center">
            <div
              className="absolute inset-0 rounded-full bg-red-100 flex items-center justify-center"
              style={{
                backgroundImage: `conic-gradient(red ${item.score}%, #f3f4f6 ${item.score}%)`,
              }}
            >
              <span className="text-xl font-bold text-red-900">
                {item.score}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 ">{item.deskripsi}</p>
    </div>
  );
}
