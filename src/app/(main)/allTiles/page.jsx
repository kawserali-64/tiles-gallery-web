import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllTilesPage = async () => {

    const res = await fetch('http://localhost:3000/data.json', {
        cache: 'no-store'
    });
    const tiles = await res.json();

    return (
        <div className='container mx-auto mt-6 space-y-6'>

            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-2xl'>All Tiles</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

                {tiles.map((t) => (
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
                            <p className="text-sm text-gray-500 truncate">
                                {t.description}
                            </p>
                            <p className="font-semibold">${t.price}</p>
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

export default AllTilesPage;