import Image from 'next/image';

const InformationPage = () => {
    return (
        <div className="bg-[#f5f5f5] py-20 container mx-auto mt-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 px-6">

                <div className="space-y-5 border-r border-gray-300 pr-8">
                    <h2 className="text-xl font-semibold tracking-wide">
                        PRODUCT BROCHURES
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-sm">
                        Explore our complete collection of premium ceramic and porcelain tiles.
                        Our brochures showcase detailed designs, textures, and specifications to
                        help you choose the perfect match for your home or commercial space.
                        Download now and get inspired to design with confidence.
                    </p>

                    <button className="flex items-center gap-2 text-sm font-medium tracking-widest border-b border-black w-fit pb-1 hover:gap-3 transition-all">
                        DOWNLOAD BROCHURE →
                    </button>
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/information.jpg"
                        alt="tiles"
                        width={800}
                        height={500}
                        className="object-cover"
                    />
                </div>

                <div className="space-y-5 border-l border-gray-300 pl-8">
                    <h2 className="text-xl font-semibold tracking-wide">
                        SHOWROOM LOCATIONS
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-sm">
                        Visit our exclusive showrooms to experience the texture, quality, and
                        elegance of our tiles in person. Our design experts are ready to help you
                        choose the perfect solution for your space. Find a nearby showroom and
                        bring your vision to life.
                    </p>

                    <button className="flex items-center gap-2 text-sm font-medium tracking-widest border-b border-black w-fit pb-1 hover:gap-3 transition-all">
                        FIND NEAREST SHOWROOM →
                    </button>
                </div>

            </div>
        </div>
    );
};

export default InformationPage;