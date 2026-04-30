// import Image from 'next/image';
// import React from 'react';


// const tiles = [
//   {
//     id: "tile_001",
//     title: "Ceramic Blue Tile",
//     description: "Premium ceramic tile with blue glaze finish",
//     image: "https://images.unsplash.com/photo-1582582429416-3c3e3e2a5f92?w=600",
//     category: "ceramic",
//     price: 45.99,
//   },
//   {
//     id: "tile_002",
//     title: "Marble White Tile",
//     description: "Elegant white marble tile for modern homes",
//     image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600",
//     category: "marble",
//     price: 65.50,
//   },
//   {
//     id: "tile_003",
//     title: "Wood Texture Tile",
//     description: "Natural wood style tile with smooth finish",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
//     category: "wood",
//     price: 39.99,
//   },
//   {
//     id: "tile_004",
//     title: "Terrazzo Grey Tile",
//     description: "Stylish terrazzo tile with grey pattern",
//     image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600",
//     category: "terrazzo",
//     price: 55.25,
//   }
// ];
// const FutureCard = () => {
//     return (
//         <div className='grid md:grid-cols-2 lg:grid-cols-4 container mx-auto'>
//             {tiles.map(t => {
//                 return <div key={t.id} className="card bg-base-100 w-96 shadow-sm">
//                     <figure className="px-10 pt-10 relative h-48 w-full">
//                         <Image
//                             src={t.image}
//                             alt={t.title}
//                             fill
//                             className="rounded-xl object-cover"
//                         />
//                     </figure>

//                 </div>
//             })}
//         </div>
//     );
// };

// export default FutureCard;