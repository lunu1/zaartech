import Contactphoto from "../assets/misbahAbout.jpg";
import Process from "../components/Process";
import transition from "../transition";
const AboutUs = () => {
  return (
    <div className="">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F5F3EF]" >
        {/* Contact Details Section */}
        <div className="flex flex-col justify-center p-10">
         <h1 className="text-2xl xl:text-5xl font-semibold py-3">About Us</h1>
         <p className="text-sm sm:text-lg">
        We believe that every space has a story to tell—let us help make yours a reality.
         </p>
       
         <p className="font-bold text-sm sm:text-lg">
         At Zaar Interiors, we specialize in bespoke fit-outs that seamlessly blend design, functionality, and personal style. From concept to completion, we manage every stage of the process, ensuring your vision is brought to life with precision and excellence.
         </p>
         <p className="text-sm sm:text-lg">
          Being an end to end full service design firm we assure that your homes are completed on time from conception to completion.
         </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={Contactphoto}
            alt="Contact Us"
            className=" shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
      <Process/>
    </div>
  );
};

export default transition(AboutUs);
