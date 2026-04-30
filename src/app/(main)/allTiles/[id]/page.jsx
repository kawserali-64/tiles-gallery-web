import Image from 'next/image';

const PageTilesDetails = async ({ params }) => {

    // ⚠️ Next.js 15+ এ params async হতে পারে
    const { id } = await params;

    const res = await fetch('http://localhost:3000/data.json', {
        cache: 'no-store'
    });
    const tiles = await res.json();

    const tile = tiles.find(t => t.id === id);

    if (!tile) {
        return <h1>Tile not found</h1>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="max-w-xl mx-auto card shadow-md">

                <figure className="relative h-64 w-full">
                    <Image
                        src={tile.image}
                        alt={tile.title}
                        fill
                        className="object-cover"
                    />
                </figure>

                <div className="p-4">
                    <h2 className="text-2xl font-bold">{tile.title}</h2>
                    <p>{tile.description}</p>
                    <p>${tile.price}</p>
                </div>

            </div>
        </div>
    );
};

export default PageTilesDetails;