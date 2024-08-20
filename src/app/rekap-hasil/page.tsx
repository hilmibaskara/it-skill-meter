"use client"
import { useState } from "react";
import CardRekapHasil from "@/components/CardRekapHasil";
import Navbar from "@/components/Navbar";
import { hasilData } from "@/data/hasilData";

export default function Home() {
  const [filter, setFilter] = useState("All"); // State for filtering

  // Filter data based on filter state
  const filteredData =
    filter === "All"
      ? hasilData
      : hasilData.filter(card => card.type === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <header className="text-center pb-4 pt-28">
        <h1 className="text-3xl font-bold text-black">Hasil Saya</h1>
        <nav className="flex justify-center space-x-8 mt-4">
          <button
            onClick={() => setFilter("All")}
            className={`${
              filter === "All" ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-black"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Role-based")}
            className={`${
              filter === "Role-based" ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-black"
            }`}
          >
            Role-based
          </button>
          <button
            onClick={() => setFilter("Skill-based")}
            className={`${
              filter === "Skill-based" ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-black"
            }`}
          >
            Skill-based
          </button>
        </nav>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-4 gap-8 px-6 md:px-12 pb-8">
        {filteredData.map((card, index) => (
          <CardRekapHasil
            key={index}
            id={card.id} // Pass id to the Card component
            title={card.title}
            type={card.type}
            date={card.date}
            level={card.level}
            overview={card.overview}
          />
        ))}
      </section>
    </div>
  );
}