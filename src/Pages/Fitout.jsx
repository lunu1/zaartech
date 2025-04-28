import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

const ParallaxCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Custom Interior Design",
      description: "Transforming spaces with innovative designs that reflect your style and needs. We specialize in creating functional and aesthetic interiors for homes and businesses. Our expert team brings your vision to life with attention to detail and a commitment to quality.",
      images: [
        "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa-lamp_105762-2257.jpg",
        "https://img.freepik.com/free-photo/luxury-bedroom-interior-design_105762-1756.jpg",
        "https://img.freepik.com/free-photo/elegant-modern-office-space_105762-1904.jpg"
      ],
      days: "5 Days",
    },
    {
      id: 2,
      title: "Bespoke Furniture",
      description: "Crafting custom furniture that blends seamlessly with your space. We design and build high-quality, unique pieces that enhance your interior and meet your functional needs, all tailored to your preferences.",
      images: [
        "https://img.freepik.com/free-photo/modern-custom-wooden-dining-table_105762-2205.jpg",
        "https://img.freepik.com/free-photo/luxury-sofa-furniture-modern-living-room_105762-2204.jpg"
      ],
      days: "3 Days",
    },
    {
      id: 3,
      title: "Complete Renovation",
      description: "From concept to completion, we offer full renovation services that transform old or outdated spaces into modern, functional areas. Our team ensures a seamless process with high-quality craftsmanship and attention to detail.",
      images: [
        "https://img.freepik.com/free-photo/modern-renovated-living-room_105762-2109.jpg",
        "https://img.freepik.com/free-photo/modern-kitchen-renovation_105762-1987.jpg"
      ],
      days: "10 Days",
    },
    {
      id: 4,
      title: "Electrical & Mechanical Installation",
      description: "Ensuring your space is equipped with the latest in electrical and mechanical systems. We specialize in efficient installations that are safe, reliable, and seamlessly integrate into your interior design.",
      images: [
        "https://img.freepik.com/free-photo/electrical-wiring-installer_105762-2123.jpg",
        "https://img.freepik.com/free-photo/modern-mechanical-installation_105762-2156.jpg"
      ],
      days: "4 Days",
    },
    {
      id: 5,
      title: "Flooring & Wall Treatment",
      description: "Enhance the aesthetic and durability of your space with our flooring and wall treatment services. We offer a variety of materials and finishes, from hardwood to tiles, to give your interiors a polished, cohesive look.",
      images: [
        "https://img.freepik.com/free-photo/modern-tile-flooring_105762-1920.jpg",
        "https://img.freepik.com/free-photo/luxury-wall-design_105762-1775.jpg"
      ],
      days: "7 Days",
    },
    {
      id: 6,
      title: "Textile & Bathroom Fitouts",
      description: "Elevate your home or office with custom textile solutions and stylish bathroom fitouts. Our team works with you to create a functional and aesthetically pleasing environment, from fabric choices to luxurious bathroom designs.",
      images: [
        "https://img.freepik.com/free-photo/luxury-bathroom-interior_105762-1864.jpg",
        "https://img.freepik.com/free-photo/modern-textile-decor_105762-1960.jpg"
      ],
      days: "5 Days",
    },
    {
      id: 7,
      title: "Outdoor Living Spaces",
      description: "Transform your outdoor area into a beautiful and functional living space with our expert design and installation services. Whether it’s a patio, garden, or balcony, we create inviting spaces perfect for relaxation and entertaining.",
      images: [
        "https://img.freepik.com/free-photo/outdoor-patio-furniture-design_105762-2018.jpg",
        "https://img.freepik.com/free-photo/modern-garden-landscape_105762-2083.jpg"
      ],
      days: "6 Days",
    },
  ];
  

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setCurrentImageIndex(0);
  };
  const handleCloseModal = () => setSelectedCard(null);
  const handleEnquiryClick = () => navigate("/contact");

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedCard.images.length);
  };
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedCard.images.length) % selectedCard.images.length);
  };

  return (
    <div className="py-6 flex flex-col items-center">
      <motion.h1
        className="text-3xl font-bold mb-10 text-grey text-center uppercase"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Services
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg w-80 h-96 flex flex-col transition-transform transform hover:scale-105"
          >
            <div className="overflow-hidden h-3/5">
              <img
                src={card.images[0]}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
              <button
                onClick={() => handleOpenModal(card)}
                className="bg-grey text-white py-2 px-4 mt-2 rounded-lg hover:bg-green-600"
              >
                More Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl relative overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Image Slider */}
              <div className="relative">
                <motion.img
                  key={currentImageIndex}
                  src={selectedCard.images[currentImageIndex]}
                  alt={selectedCard.title}
                  className="w-full h-48 object-cover md:h-96"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedCard.images.map((_, index) => (
                    <span key={index} className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`} />
                  ))}
                </div>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 text-3xl rounded-full"
                >
                  <IoMdArrowDropleftCircle />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 text-3xl rounded-full"
                >
                  <IoMdArrowDroprightCircle />
                </button>
              </div>

              <div className="p-4 md:p-6 space-y-4">
                {/* <h3 className="text-lg md:text-xl font-semibold text-gray-800">Itinerary:</h3> */}
                <ul className="list-disc list-inside space-y-2">
            
                    <motion.p
                      
                      className="text-gray-700 hover:text-red-500 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {selectedCard.description}
                    </motion.p>
                
                </ul>
              </div>

              <div className="bg-gray-100 px-4 md:px-6 py-4 gap-5 flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={handleEnquiryClick}
                  className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Enquiry
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ParallaxCards;
