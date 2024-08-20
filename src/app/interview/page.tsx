"use client";
import { useRouter } from "next/navigation";
import { roles, skills } from "@/data/rolesAndSkills";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();

  // Function to handle redirection on button click
  const handleRedirect = (id: number) => {
    router.push(`/interview/${id}`);
  };

  return (
    <div className="pb-8">
      <Navbar />
      <h1 className="flex justify-center text-4xl font-bold mb-8 pt-32 text-black">
        Pilih Karir IT Ambisimu!
      </h1>

      {/* Role-based Section */}
      <div className="px-8 lg:px-16">
        <h2 className="text-2xl font-bold text-black underline mb-4">Role-based</h2>
        <div className="grid grid-cols-4 gap-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleRedirect(role.id)}
              className="bg-white px-4 py-2 rounded-full text-black shadow hover:bg-gray-100"
            >
              {role.nama}
            </button>
          ))}
        </div>
        {/* Skill-based Section */}
        <h2 className="text-2xl font-bold text-black underline mb-4 pt-8">Skill-based</h2>
        <div className="grid grid-cols-4 gap-4">
          {skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => handleRedirect(skill.id)}
              className="bg-white px-4 py-2 rounded-full text-black shadow hover:bg-gray-100"
            >
              {skill.nama}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
