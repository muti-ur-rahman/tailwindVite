// App.jsx
import React, { useState } from 'react';

const App = () => {
  // State to track the selected color
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center transition-all duration-500 ${
        selectedColor && `bg-${selectedColor}-500`
      }`}
    >
      <h1 className="text-3xl font-bold text-black border mb-8">
        Selected Color: {selectedColor || 'None'}
      </h1>

      <div className="space-x-4">
        {/* Buttons without using .map */}
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
  );
};

export default App;
