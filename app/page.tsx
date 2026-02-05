'use client'
import { useState, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// content for page.tsx
function HomePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'insert-name';
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesClicked, setYesClicked] = useState(false);
  const [yesSize, setYesSize] = useState(1);

  // move location of no button when attempted click
  const handleNoClick = () => {
    setNoPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });

    // yes btn increases in size every attempt; full-screen possible
    setYesSize(yesSize+0.1);
  };

  // play video on yes click
  const handleYesClick = () => {
    setYesClicked(true);
  }

  return (
    <div className="flex h-screen items-center justify-center p-2 sm:p-4">

      {/* white box where content resides */}
      <div className="flex flex-col bg-white w-full max-w-2xl max-h-[90vh] gap-y-4 rounded-lg shadow-lg items-center justify-start">

        {/* img */}
        <Image
          src="/logo.svg"
          width={350}
          height={350}
          alt="Drawing of the dogs siting in front of a heart"
          className="p-2 sm:p-4"
        />

        {yesClicked ? (
          // celebration video once yes is clicked
          <>
            <p className="text-xl font-semibold"> POV: Me right now </p>
            <img 
              src="/celebration.gif"
              width={500}
              height={500}
              alt="Kid dancing"
              className="rounded-lg p-4"
            />
          </>
        ) : (
        <>
          {/* the big question */}
            <h1 className="font-bold text-3xl sm:text-4xl font-serif p-4 sm:p-4 text-center break-words line-clamp-2 mb-6">
              {name.toUpperCase()} WILL YOU BE MY VALENTINE?💕
            </h1> 

          {/* yes & no boxes */}
          <div className="flex flex-row w-full gap-12 justify-center items-center mt-16">
            <button 
              onClick={handleYesClick}
              style={{transform: `scale(${yesSize})`}}
              className="bg-red-500 text-white font-semibold text-2xl sm:text-3xl rounded-full w-28 h-12 sm:w-28 sm:h-12 transform active:scale-110 hover:cursor-pointer hover:scale-125 transition-transform"
            >
              YES
            </button>

            <button
              onClick={handleNoClick} // mobile
              onMouseEnter={handleNoClick}  // desktop
              style={{
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                transition: 'transform 0.3s ease',
              }}
              className="bg-gray-200 text-black font-semibold text-2xl sm:text-3xl rounded-full w-28 h-12 sm:w-28 sm:h-12 hover:cursor-pointer"
            >
              NO
            </button>
          </div>

          <p>'No' seems kinda fishy 😈</p>
        </>
        )}

      </div>
    </div>
  );
}

// page.tsx
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}