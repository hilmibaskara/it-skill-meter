'use client'
import React from "react";

interface CardInstructionProps {
  onNext: () => void;
  onBack: () => void;
}

export default function CardInstruction({ onNext, onBack }: CardInstructionProps) {
  return (
    <div className="h-screen pt-[120px]">


    <div className="bg-white w-[645px] h-[542px] mx-auto p-7 rounded-xl">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Instruksi</h2>
        <ul className="list-decimal list-inside space-y-2 text-lg">
          <li>Lorep ipsum</li>
          <li>Lorep Ipsum</li>
          <li>Lorep ipsum</li>
          <li>Lorep Ipsum</li>
        </ul>
      </div>
      <div className="mt-[240px]">
        <hr className="my-4 border-black" />
        <div className="flex flex-row justify-between">
          <button
            onClick={onBack}
            className="m-2 rounded-md border border-[#7f7f7f] px-4 py-2 text-[#7f7f7f]"
            >
            Batal
          </button>
          <button
            onClick={onNext}
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
