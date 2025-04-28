import Contactphoto from "../assets/Contact.jpg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Contact from "../components/Contact.jsx";

const ContactUs = () => {
  return (
    <div className="pt-10 sm:p-14 bg-[#F5F3EF]">
      <div className="sm:max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Contact Details Section */}
        <div className="flex flex-col justify-center space-y-8 px-10 sm:px-20 ">
      {/* Project Enquiries Section */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <h3 className="text-xl font-semibold text-gray-700">Project Enquiries</h3>
          
      
        <p className="text-lg text-gray-600 mb-6">
          Have a project in mind? Reach out to us to discuss how we can bring your vision to life.
        </p>
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-gray-700" />
          <p className="text-gray-600">055 534 3589</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-gray-700" />
          <p className="text-gray-600">zartech24@gmail.com</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-700 py-5">
            office
          </h1>
        </div>
       
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-gray-700" />
          <p className="text-gray-600 ">
            Office 904<br />  Saheel 2, Al Nahda 1 <br />  Dubai, United Arab Emirates
          </p>
        </div>
      </section>

      {/* Office Section */}
    <Contact/>

   
    </div>
        {/* Image Section */}
        <div className="flex items-end justify-end flex-col gap-5">
        <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.545760431228!2d55.357977376235716!3d25.285861528102135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d40c1965935%3A0xafcb0cec58a5201b!2sSaheel%20Tower%202!5e0!3m2!1sen!2sin!4v1739345297195!5m2!1sen!2sin"
                    width="100%"
                    
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="sm:h-[600px]"
                  ></iframe>

   {/* Social Media Section */}
   <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Follow Us</h3>
        <div className="flex space-x-6 pb-10 sm:pb-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-700 text-2xl" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-700 text-2xl" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-700 text-2xl" />
          </a>
        </div>
      </section>

        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;