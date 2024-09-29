import React, { useState } from 'react';
// Corrected import statement


function Colorchange() {
  const [selectedColor, setSelectedColor] = useState('');

  // Color options mapped to Tailwind background classes
  const colorClasses = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  };

  return (
    <>
      <div className="fixed flex-auto w-full bg-black">
        <div
          className={`my-80 py-6  flex flex-col justify-center items-center transition-all duration-300 border-t-amber-600 ${
            selectedColor ? colorClasses[selectedColor] : 'bg-black'
          }`}
        >
          <h1 className="text-3xl font-bold text-white border-none mb-8 p-2">
            Selected Color: {selectedColor || 'None'}
          </h1>

          <div className="space-x-4">
            <button
              onClick={() => setSelectedColor('red')}
              className="bg-red-500 text-black border py-2 px-4 rounded hover:bg-red-700 transition"
            >
              Red
            </button>

            <button
              onClick={() => setSelectedColor('blue')}
              className="bg-blue-500 text-black border py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Blue
            </button>

            <button
              onClick={() => setSelectedColor('green')}
              className="bg-green-500 text-black border py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Green
            </button>

            <button
              onClick={() => setSelectedColor('yellow')}
              className="bg-yellow-500 text-black border py-2 px-4 rounded hover:bg-yellow-700 transition"
            >
              Yellow
            </button>

            <button
              onClick={() => setSelectedColor('orange')}
              className="bg-orange-500 text-black border py-2 px-4 rounded hover:bg-orange-700 transition"
            >
              Orange
            </button>

            <button
              onClick={() => setSelectedColor('purple')}
              className="bg-purple-500 text-black border py-2 px-4 rounded hover:bg-purple-700 transition"
            >
              Purple
            </button>

            <button
              onClick={() => setSelectedColor('pink')}
              className="bg-pink-500 text-black border py-2 px-4 rounded hover:bg-pink-700 transition"
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Colorchange;
