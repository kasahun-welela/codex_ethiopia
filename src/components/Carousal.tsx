import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  quote: string;
  background: string;
}

const carouselItems = [
    {
      id: 1,
      title: 'Custom Website',
      description: 'Delivering unique and innovative website solutions tailored to your needs. Our team excels in creating websites that are visually appealing, functional, and user-friendly.',
      quote: 'Our mission is to empower businesses by providing innovative and reliable web solutions that enhance online presence and drive growth.',
      background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/iceland.jpg',
    },
    {
      id: 2,
      title: 'Custom Product',
      description: 'Creating user-friendly mobile applications to expand your business reach. Our solutions streamline operations, improve user experience, and drive growth.',
      quote: 'We aim to be the leading technology partner for businesses, renowned for excellence in web services and products by 2030.',
      background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/china.jpg',
    },
    {
      id: 3,
      title: 'Website Customization',
      description: 'If you buy a website from us, we will customize it for you to meet your exact specifications. Our customization services ensure that your website stands out and functions perfectly, tailored to your unique requirements and goals.',
      quote: 'We make sure your website is customized to fit your specific needs and requirements, ensuring a unique and effective online presence.',
      background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/usa.jpg',
    },
    {
      id: 4,
      title: 'Automation',
      description: 'Automation solutions to boost productivity and efficiency. We provide automated systems such as Telegram bots, third-party integrations, and custom Google Sheets scripts.',
      quote: 'We offer automation solutions with Telegram bots, Zapier, Make.com, and Google Sheets scripts to streamline your workflows.',
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
    <div className="h-screen">
      <div className="relative h-4/5">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`spinner__face absolute inset-0 flex transition-transform duration-1000 ${
              index === activeIndex ? 'translate-x-0' : index < activeIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
            style={{ backgroundImage: `url(${item.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="overlay absolute inset-0 bg-black opacity-50"></div>
            <div className="content relative w-full md:w-3/5 flex flex-col justify-center items-start p-10 text-white">
              <motion.h1 
                className="text-2xl md:text-8xl font-extrabold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {item.title}
              </motion.h1>
              <motion.div 
                className="content__main text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className="text-xl md:text-2xl mb-6 font-light leading-snug">{item.description}</p>
                <p className="text-lg md:text-xl mb-8 font-medium">{item.quote}</p>
              </motion.div>
              <div className="flex space-x-2 mt-4 mb-8">
                {carouselItems.map((_, dotIndex) => (
                  <motion.div
                    key={dotIndex}
                    className={`w-3 h-3 rounded-full ${
                      dotIndex === activeIndex ? 'bg-cyan-600' : 'bg-gray-400'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: dotIndex * 0.2 }}
                  />
                ))}
              </div>
              <motion.div 
                className="flex justify-start space-x-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Link
                  className="border rounded-full border-cyan-600 px-8 py-3 text-lg md:text-xl font-semibold hover:bg-white hover:text-black transition-colors duration-300"
                  to="/contactUs"
                >
                  Contact us
                </Link>
                <Link
                  className="border rounded-full border-cyan-600 px-8 py-3 text-lg md:text-xl font-semibold hover:bg-white hover:text-black transition-colors duration-300"
                  to="/about"
                >
                About Us
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full bottom-0 left-0 right-0 flex flex-col items-center">
        <div className="w-11/12 mx-auto md:w-3/5 -mt-20">
          <div className="shadow-2xl bg-gray-100 dark:bg-gray-900 rounded-3xl flex flex-col items-center gap-6 py-3 font-medium md:flex-row justify-around md:p-10">
            <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500 text-nowrap text-xl md:text-2xl rounded-full px-3">
              Website Development
            </h2>
            <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500 text-nowrap text-xl md:text-2xl rounded-full px-3">
              Custom Product
            </h2>
            <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500 text-xl md:text-2xl rounded-full px-3 text-nowrap">
              Website Customization
            </h2>
            <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500 text-xl md:text-2xl rounded-full px-3">
              Automation
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
