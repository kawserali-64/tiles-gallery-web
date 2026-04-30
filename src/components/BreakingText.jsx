import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
  {
    id: 1,
    text: "New Arrivals: Ceramic Blue Tile",
  },
  {
    id: 2,
    text: "Weekly Feature: Modern Geometric Patterns",
  },
  {
    id: 3,
    text: "Best Seller: Terrazzo Grey Tile",
  },
  {
    id: 4,
    text: "Limited Offer: 20% off on Wood Tiles",
  },
  {
    id: 5,
    text: "Trending: Marble White Collection",
  },
  {
    id: 6,
    text: "Join the Community & Share Your Space",
  },
];
const BreakingText = () => {
    return (
        <div className='container mx-auto bg-gray-800 py-3 text-white mt-6 md:mt-10'>
            <Marquee>
                {news.map(n=>{
                    return <span className='mx-6' key={n.id}>{n.text}</span>
                })}
            </Marquee>
        </div>
    );
};

export default BreakingText;