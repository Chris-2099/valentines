'use client'
import { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Friend';
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesClicked, setYesClicked] = useState(false);

  // move location of no button when attempted click
  const handleNoClick = () => {
    setNoPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  // play video on yes click
  const handleYesClick = () => {
    setYesClicked(true);
  }

  return (
    <div className="flex h-screen items-center justify-center p-2 sm:p-4">

      {/* white box where content resides */}
      <div className="flex flex-col gap-y-2 sm:gap-y-6 bg-white h-[72vh] max-w-lg rounded-lg shadow-lg items-center justify-start overflow-hidden px-2 sm:px-8">

        {/* img */}
        <Image
          src="/logo.png"
          width={350}
          height={350}
          alt="Drawing of the dogs siting in front of a heart"
          className="p-2 sm:p-4 max-w-full h-auto"
        />

        {yesClicked ? (
          // celebration video once yes is clicked
          <video autoPlay controls className="w-full h-full rounded-lg p-4">
            <source src="/celebration.mp4" type="video/mp4" />
          </video>
        ) : (
        <>
          {/* the big question */}
            <h1 className="font-bold text-2xl sm:text-4xl font-serif p-4 sm:p-4 text-center break-words line-clamp-2 mb-6"> {name.toUpperCase()} WILL YOU BE MY VALENTINE? </h1> 

          {/* yes & no boxes */}
          <div className="flex flex-row w-full gap-12 justify-center items-center mt-16">
            <button 
              onClick={handleYesClick}
              className="bg-red-400 text-white font-semibold text-lg sm:text-3xl rounded-full w-28 h-12 sm:w-40 sm:h-16 transform active:scale-110 hover:scale-125 transition-transform"
            >
              YES
            </button>

            <button
              onClick={handleNoClick}
              style={{
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                transition: 'transform 0.3s ease',
              }}
              className="bg-gray-200 text-black font-semibold text-lg sm:text-3xl rounded-full w-28 h-12 sm:w-40 sm:h-16"
            >
              NO
            </button>
          </div>
        </>
        )}
        


      </div>
    </div>
  );
}