import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('Evaluasi');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full bg-white border-b-2">
      <div className="flex justify-between w-1/3 mx-auto">
        {['Evaluasi', 'Roadmap', 'Feedback'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab
                ? 'border-b-4 border-red-500 text-black'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === 'Evaluasi' && <div>Content for Evaluasi</div>}
        {activeTab === 'Roadmap' && <div>Content for Roadmap</div>}
        {activeTab === 'Feedback' && <div>Content for Feedback</div>}
      </div>
    </div>
  );
}
