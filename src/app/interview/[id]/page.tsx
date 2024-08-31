'use client'

import { useState } from "react";
import Navbar from "@/src/components/Navbar";
import CardDuration from "@/src/components/CardDuration";
import CardInstruction from "@/src/components/CardInstruction";
import InterviewDetail from "@/src/components/InterviewDetail";
import { roles, skills } from "@/src/data/rolesAndSkills";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [currentStep, setCurrentStep] = useState<"none" | "instruction" | "duration" | "interview">("none");
  const [language, setLanguage] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  // Combine roles and skills data
  const combinedData = [...roles, ...skills];

  // Find data by id
  const data = combinedData.find((item) => item.id === parseInt(id as string));

  // Handle data not found
  if (!data) {
    return (
      <div>
        <Navbar />
        <h1 className="text-center text-2xl mt-32">Data tidak ditemukan</h1>
      </div>
    );
  }

  // Handlers for navigating between steps
  const handleStart = () => {
    setCurrentStep("instruction");
  };

  const handleNextFromInstruction = () => {
    setCurrentStep("duration");
  };

  const handleNextFromDuration = (selectedLanguage: string, selectedDuration: string) => {
    setLanguage(selectedLanguage);
    setDuration(selectedDuration);
    setCurrentStep("interview");
  };

  const handleBack = () => {
    if (currentStep === "interview") {
      setCurrentStep("duration");
    } else if (currentStep === "duration") {
      setCurrentStep("instruction");
    } else if (currentStep === "instruction") {
      setCurrentStep("none");
    }
  };

  // Render based on the current step
  if (currentStep === "instruction") {
    return <CardInstruction onNext={handleNextFromInstruction} onBack={handleBack} />;
  }

  if (currentStep === "duration") {
    return (
      <CardDuration
        language={language}
        duration={duration}
        onNext={handleNextFromDuration}
        onBack={handleBack}
      />
    );
  }

  if (currentStep === "interview") {
    return (
      <InterviewDetail />
    );
  }

  // Default render for the initial step
  return (
    <div className="pt-32 md:h-screen">
      <Navbar />
      <div className="flex flex-col px-12 md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 mb-8 gap-x-4">
          <h1 className="text-4xl md:text-6xl mb-4 text-black font-bold">
            {data.nama}
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-6">
            {data.deskripsi}
          </p>
          <button
            onClick={handleStart}
            className="bg-primary-red text-white px-6 py-3 rounded-xl font-semibold w-24 text-center"
          >
            Mulai
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
          <img src="/icons/desk-started.svg" alt="Icon" className="w-72" />
        </div>
      </div>
    </div>
  );
}
