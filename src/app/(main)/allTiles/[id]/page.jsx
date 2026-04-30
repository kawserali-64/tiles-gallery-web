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
            <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden">

                {/* Image */}
                <figure className="relative h-[400px] w-full">
                    <Image
                        src={tile.image}
                        alt={tile.title}
                        fill
                        className="object-cover"
                    />
                </figure>

                <div className="p-6 space-y-4">

                    <h2 className="text-3xl font-bold">{tile.title}</h2>

                    <p className="text-gray-600 leading-relaxed">
                        {tile.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4">

                        <div className="p-3 bg-gray-100 rounded-lg">
                            <p className="font-semibold">Category</p>
                            <p>{tile.category}</p>
                        </div>

                        <div className="p-3 bg-gray-100 rounded-lg">
                            <p className="font-semibold">Material</p>
                            <p>{tile.material}</p>
                        </div>

                        <div className="p-3 bg-gray-100 rounded-lg">
                            <p className="font-semibold">Dimensions</p>
                            <p>{tile.dimensions}</p>
                        </div>

                        <div className="p-3 bg-gray-100 rounded-lg">
                            <p className="font-semibold">Stock</p>
                            <p className={tile.inStock ? "text-green-600" : "text-red-600"}>
                                {tile.inStock ? "Available" : "Out of Stock"}
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center justify-between mt-6">

                        <p className="text-2xl font-bold text-primary">
                            ${tile.price} {tile.currency}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PageTilesDetails;