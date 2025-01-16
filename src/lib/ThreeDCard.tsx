import React from 'react';
import './ThreeDCard.css';
const ThreeDCard: React.FC = () => {
  return (
    <div className="w-80 h-48 perspective-1000">
      <div className="w-full h-full bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-6 hover:shadow-2xl">
        <div className="p-4">
          <h2 className="text-xl font-bold">3D Card</h2>
          <p>This is a 3D card effect with a shadow using Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
}

export default ThreeDCard;