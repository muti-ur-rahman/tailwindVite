import { useState } from "react";
// import ClrApp from "./clrchange01";

function ClrApp() {
  const [color, setColor] = useState("");
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
      <div className="w-full duration-200" 
           style={{ backgroundColor: color }}>

        <div  className={`my-80 py-6  flex flex-col justify-center items-center transition-all duration-300 border-t-amber-600 
        ${ color ? colorClasses.color : 'bg-black'}`}>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            
            <button 
              onClick={() => setColor("red")} 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{ backgroundColor: "red" }}
              >
              Red
            </button>
            
            <button 
              onClick={() => setColor("yellow")} 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{ backgroundColor: "yellow" }}>
              Yellow
            </button>
            
            <button 
              onClick={() => setColor("blue")} 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              style={{ backgroundColor: "blue" }}>
              Blue
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ClrApp;
