import { FaTools, FaChair, FaChalkboardTeacher, FaHammer, FaCubes, FaDraftingCompass } from "react-icons/fa";

const ServicesRow = () => {
  const services = [
    { icon: <FaTools size={40} />, name: "Woodwork" },
    { icon: <FaChair size={40} />, name: "Furnishing" },
    { icon: <FaChalkboardTeacher size={40} />, name: "Consultation" },
    { icon: <FaHammer size={40} />, name: "Installation" },
    { icon: <FaCubes size={40} />, name: "Partitioning" },
    { icon: <FaDraftingCompass size={40} />, name: "Planning" },
  ];

  return (
    <div className="flex justify-between items-center flex-wrap p-10 px-48 mt-9">
    {services.map((service, index) => (
      <div
        key={index}
        className="group flex flex-col items-center text-center hover:cursor-pointer"
      >
        <div className="relative">
          <div className="p-4 rounded-full bg-transparent group-hover:bg-blue-100 group-hover:scale-150 transition-all duration-300 ease-in-out">
            <span className="text-grey">{service.icon}</span>
          </div>
        </div>
        <p className="mt-8 text-xl font-semibold text-black">{service.name}</p>
      </div>
    ))}
  </div>
  );
};

export default ServicesRow;
