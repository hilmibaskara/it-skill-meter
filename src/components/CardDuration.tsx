'use client'
import { useState } from 'react';

interface CardDurationProps {
  onNext: (selectedLanguage: string, selectedDuration: string) => void;
  onBack: () => void;
  language: string;
  duration: string;
}

export default function CardDuration({
  onNext,
  onBack,
  language: initialLanguage,
  duration: initialDuration,
}: CardDurationProps) {
  const [language, setLanguage] = useState(initialLanguage);
  const [duration, setDuration] = useState(initialDuration);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDuration(e.target.value);
  };

  const handleNextClick = () => {
    // Ensure the language and duration are selected before proceeding
    if (language && duration) {
      onNext(language, duration);
    } else {
      // Optionally, show an error or a message if not selected
      alert("Please select both language and duration.");
    }
  };

  return (
    <div className='h-screen pt-[120px]'>
      <div className="bg-white w-[459px] h-[335px] mx-auto p-7 rounded-xl">
        <div className="flex flex-col">
          <p>Pilih Bahasa Interview</p>
          <select
            className="mt-2 p-2 border rounded-md"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="" disabled>
              Pilih Bahasa
            </option>
            <option value="indonesia">Indonesia</option>
            <option value="english">English</option>
            <option value="japanese">Japanese</option>
          </select>

          <p className="mt-4">Durasi</p>
          <select
            className="mt-2 p-2 border rounded-md"
            value={duration}
            onChange={handleDurationChange}
          >
            <option value="" disabled>
              Pilih Durasi (menit)
            </option>
            <option value="30">30 Menit</option>
            <option value="45">45 Menit</option>
            <option value="60">60 Menit</option>
          </select>
        </div>

        <div className="mt-[50px]">
          <hr className="my-4 border-black" />
          <div className="flex flex-row justify-between">
            <button
              onClick={onBack}
              className="m-2 rounded-md border border-[#7f7f7f] px-4 py-2 text-[#7f7f7f]"
            >
              Batal
            </button>
            <button
              onClick={handleNextClick}
              className="m-2 rounded-md bg-[#e6545f] text-white px-4 py-2"
            >
              Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
