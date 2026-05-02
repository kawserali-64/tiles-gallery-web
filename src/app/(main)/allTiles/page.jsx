'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AllTilesPage = () => {

    const [tiles, setTiles] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch('https://tiles-gallery-web.vercel.app/data.json')
            .then(res => res.json())
            .then(data => setTiles(data));
    }, []);

    const filteredTiles = tiles.filter(t =>
        t.category.toLowerCase().includes(query.toLowerCase()) ||
        t.title.toLowerCase().includes(query.toLowerCase())
    );

    const handleSearch = () => {
        setQuery(search); // 👈 button click e apply
    };

    return (
        <div className='container mx-auto mt-6 space-y-6'>

            {/* Header */}
            <div className='flex justify-between items-center'>
                <div className='space-y-2'>
                    <h1 className='font-bold text-2xl'>All Tiles</h1>
                    <p>Explore our complete collection of premium tiles.</p>

                    {/* SEARCH */}
                    <div className="flex gap-2 items-center">

                        <label className="input flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Search by title or category"
                                className="w-full"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </label>

                        {/* BUTTON */}
                        <button
                            className='btn bg-[#824326] text-white'
                            onClick={handleSearch}
                        >
                            Search
                        </button>

                    </div>
                </div>
            </div>

            {/* GRID */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

                {filteredTiles.map((t) => (
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
                            <p className="font-semibold text-xl">${t.price}</p>

                            <p className="text-sm text-gray-500">
                                Category: {t.category}
                            </p>

                            <Link href={`/allTiles/${t.id}`}>
                                <button className="btn btn-sm bg-[#824326] text-white mt-2">
                                    View Details
                                </button>
                            </Link>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default AllTilesPage;