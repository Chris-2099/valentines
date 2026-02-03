'use client'
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Friend';

  return (
    <div className="flex h-screen items-center justify-center p-4">

      {/* white box where content resides */}
      <div className="flex flex-col bg-white h-3/4 w-1/2 rounded-lg shadow-lg items-center justify-start">

        {/* img */}
        <Image
          src="/logo.png"
          width={350}
          height={350}
          alt="Drawing of the dogs siting in front of a heart"
          className="p-4"
        />

        {/* the big question */}
        <h1 className="font-bold text-4xl font-serif"> {name.toUpperCase()} WILL YOU BE MY VALENTINE? </h1>

        {/* yes & no(yes) boxes */}
        <div className="flex w-full h-1/2 border-2">

        </div>


      </div>
    </div>
  );
}