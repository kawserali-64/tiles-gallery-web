
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FutureCard = async () => {

  const res = await fetch('https://tiles-gallery-web.vercel.app/data.json');
  const tiles = await res.json();

  const featuredTiles = tiles.slice(0, 4);

  return (
    <div className='container mx-auto mt-3 space-y-3'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-2xl'>Featured Tiles</h1>
        <Link href={'/allTiles'}>View All</Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

        {featuredTiles.map((t) => (
          <div key={t.id} className="card bg-base-100 shadow-md">

            <figure className="relative h-48 w-full">
              <Image
                src={t.image}
                alt={t.title}
                fill
                className="object-cover rounded-t-xl"
              />
            </figure>

            <div className="p-4">
              <h2 className="font-bold">{t.title}</h2>
              
              <p className="font-semibold text-yellow-500">${t.price}/ <span className='text-gray-500'>{t.dimensions}</span></p>
              <Link href={`/allTiles/${t.id}`}>
                <button className="btn btn-sm mt-2">View Details</button>
              </Link>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default FutureCard;