import React, { useState } from "react";
import { WiStars } from "react-icons/wi";
import transition from "../transition";
import { BsStars } from "react-icons/bs";


const services = [
  {
    id: 1,
    title: "Custom Furniture",
    description: "We design and create custom furniture to perfectly suit your space.",
    points: [
      "High-quality materials",
      "Tailored designs",
      "Expert craftsmanship",
      "Affordable pricing",
      "Timely delivery",
      "Eco-friendly options",
    ],
    image: "bg12.jpg",
  },
  {
    id: 2,
    title: "Home Decor",
    description: "Transform your interiors with our curated home decor services.",
    points: [
      "Stylish accessories",
      "Modern aesthetics",
      "Affordable options",
      "Customized themes",
      "Unique designs",
      "Premium quality",
    ],
    image: "serviceone.jpg",
  },
  {
    id: 3,
    title: "Lighting Design",
    description: "Enhance your space with our bespoke lighting solutions.",
    points: [
      "Ambient lighting",
      "Energy-efficient",
      "Elegant designs",
      "Customized setups",
      "Smart lighting",
      "Mood-enhancing styles",
    ],
    image: "servicetwo.jpg",
  },
  {
    id: 4,
    title: "Wall Art",
    description: "Beautiful wall art that complements your interiors.",
    points: [
      "Unique designs",
      "Customizable options",
      "Adds personality",
      "Affordable pricing",
      "Wide variety",
      "Modern aesthetics",
    ],
    image: "servicethree.jpg",
  },
  {
    id: 5,
    title: "Space Planning",
    description: "Maximize your space with our expert planning services.",
    points: [
      "Optimized layouts",
      "Functional spaces",
      "Professional advice",
      "Custom designs",
      "Efficient use of space",
      "Innovative ideas",
    ],
    image: "servicefour.jpg",
  },
];

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="p-6 font-sans">
      <h3 className="text-center text-2xl font-semibold mb-8">Our Services</h3>

      {/* Buttons */}
      <div className="flex justify-center inset-0 gap-4 mb-8">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service)}
            className={`px-4 py-2 rounded-lg border-2 transition-all ${
              selectedService.id === service.id
                ? "bg-grey text-white border-grey"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 px-20">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Description */}
        <div className="w-full lg:w-1/2 text-center">
          <h4 className="text-3xl font-bold mb-4">{selectedService.title}</h4>
          <p className="text-gray-700 mb-4 text-lg">{selectedService.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            {selectedService.points.map((point, index) => (
              <div
                key={index}
                className="flex items-center justify-center text-lg"
              >

                <div className="flex w-64 gap-7">

                <BsStars className="text-grey"/>
                {point}
                </div>
                    
                <div className="">
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(ServicePage);
