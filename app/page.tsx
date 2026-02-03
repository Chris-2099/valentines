'use client'
import { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Friend';
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  // move location of no button when attempted click
  const handleNoClick = () => {
    setNoPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  // play video on yes click
  const handleYesClick = () => {
    
  }

  return (
    <div className="flex h-screen items-center justify-center p-4">

      {/* white box where content resides */}
      <div className="flex flex-col bg-white h-2/3 w-1/2 rounded-lg shadow-lg items-center justify-start">

        {/* img */}
        <Image
          src="/logo.png"
          width={350}
          height={350}
          alt="Drawing of the dogs siting in front of a heart"
          className="p-4 max-w-full h-auto"
        />

        {/* the big question */}
        <h1 className="font-bold text-4xl font-serif p-4 text-center line-clamp-2"> {name.toUpperCase()} WILL YOU BE MY VALENTINE? </h1>

        {/* yes & no(yes) boxes */}
        <div className="flex flex-row w-full gap-6 justify-center items-center h-25">
          <button 
            onClick={handleYesClick}
            className="bg-red-400 text-white font-semibold text-3xl rounded-full w-25 h-10 transform hover:scale-175 transition-transform"
          >
            YES
          </button>

          <button
            onClick={handleNoClick}
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              transition: 'transform 0.3s ease',
            }}
            className="bg-gray-200 text-black font-semibold text-3xl rounded-full w-25 h-10"
          >
            NO
          </button>
        </div>


      </div>
    </div>
  );
}