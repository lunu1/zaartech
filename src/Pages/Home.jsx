import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/misbahHome1.jpg";
import img2 from "../assets/misbahHome2.webp";
import img3 from "../assets/misbahHome3.jpg";
import img4 from "../assets/misbahHome5.jpg";
import img5 from "../assets/misbahHome6.jpg";

const images = [img2, img4, img5];

const Home = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[50vh] sm:h-[70vh] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Image Carousel */}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="absolute h-full w-full object-cover brightness-50"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Single Centered Heading */}
      <h1 className="absolute text-white text-4xl sm:text-5xl shadow-md OPTIBakerDanmarkOne text-center ">
        Where Space Is Transformed To Sanctuary
      </h1>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#FAFAFA]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
