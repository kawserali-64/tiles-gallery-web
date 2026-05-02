import Image from "next/image";

const BannerPage = () => {
    return (
        <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] container mx-auto">

            <Image
                src="/tiles.png"
                alt="tiles"
                fill
                className="object-cover"
                priority
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* content */}
            <div className="absolute inset-0 flex items-center  text-white pl-6 md:pl-16 lg:pl-24">
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Discover Your Perfect Aesthetic
                    </h1>
                    <p className="mb-5">
                        Explore our premium collection of tiles <br /> for every style and space.
                    </p>
                    <button className="btn bg-[#824326] text-white">
                        Browser Now
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BannerPage;