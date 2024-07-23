import React, { useEffect, useState } from 'react';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  background: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: 'ICELAND',
    subtitle: 'EUROPE',
    description: '“As I flew north to begin my third circuit of Iceland in four years, I was slightly anxious. The number of visitors to Iceland has doubled in that period, and I feared this might mean a little less magic to go around. At the end of this trip, 6000km later, I\'m thrilled to report that the magic levels remain high. It\'s found in glorious football victories and Viking chants, kayaking among icebergs, sitting with puffins under the midnight sun and crunching across brand-new lava fields.”',
    quote: '– CAROLYN BAIN',
    background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/iceland.jpg',
  },
  {
    id: 2,
    title: 'CHINA',
    subtitle: 'ASIA',
    description: '“Its modern face is dazzling, but China is no one-trick pony. The world\'s oldest continuous civilisation isn\'t all smoked glass and brushed aluminium and while you won\'t be tripping over artefacts – three decades of round-the-clock development and rash town-planning have taken their toll – rich seams of antiquity await.”',
    quote: '– DAMIAN HARPER',
    background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/china.jpg',
  },
  {
    id: 3,
    title: 'USA',
    subtitle: 'NORTH AMERICA',
    description: '“When it comes to travel, America has always floored me with its staggering range of possibilities. Not many other countries have so much natural beauty – mountains, beaches, rainforest, deserts, canyons, glaciers – coupled with fascinating cities to explore, an unrivaled music scene and all the things that make travel so rewarding (friendly locals, great restaurants and farmers markets, and plenty of quirky surprises).”',
    quote: '– REGIS ST LOUIS',
    background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/usa.jpg',
  },
  {
    id: 4,
    title: 'PERU',
    subtitle: 'SOUTH AMERICA',
    description: '“For me, Peru is the molten core of South America, a distillation of the oldest traditions and the finest building, weaving and art made by the most sophisticated cultures on the continent. In Peru the wildest landscapes – from frozen Andean peaks to the deep Amazon – help us re-forge our connection to the natural world. It is also a cultural stew, where diverse peoples live side by side, negotiating modern life with humor and aplomb. Beyond that, the cuisine alone makes it worth the trip. Every return is rich and surprising.”',
    quote: '– CAROLYN MCCARTHY',
    background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/peru.jpg',
  },
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Adjust the interval time as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel relative h-screen overflow-hidden ">
      <div className="carousel__stage relative h-4/5">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`spinner__face absolute inset-0 flex transition-transform duration-1000 ${
              index === activeIndex ? 'translate-x-0' : index < activeIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
            style={{ backgroundImage: `url(${item.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="content w-3/10 flex flex-col justify-center items-center bg-opacity-50 bg-gray-800 p-10 text-white">
              <h1 className="text-4xl font-bold mb-4">
                {item.title}
                <br />
                <span className="text-2xl font-light">{item.subtitle}</span>
              </h1>
              <div className="content__main text-center">
                <p className="text-lg mb-4">{item.description}</p>
                <p className="text-sm">{item.quote}</p>
              </div>
              <h3 className="content__index absolute bottom-4 right-4 text-8xl font-bold opacity-10">
                {String(index + 1).padStart(2, '0')}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
