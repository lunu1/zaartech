
import React,{useRef} from "react";
import emailjs from 'emailjs-com';
import {motion} from "framer-motion";
import { div } from "framer-motion/client";

// import bg from "../../assets/images/bg2.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n45of9h', 'template_frvn48i', form.current, '1rM-h4pdTLDdX_Mj-')
      .then(
        () => {
         alert("Message sent  successfully");
        },
        (error) => {
          alert("Failed");
        },
      );
  };


  return (
   <div>
      <motion.div>
           
             {/* <motion.h1
                initial={{
                 opacity: 0,
                 y: 50,
               }}
               whileInView={{
                 opacity: 1,
                 y: 0,
               }}
               viewport={{ once: true, amount: 0.5 }} // Animates once, when 50% of the element is in view
               transition={{
                 duration: 1,
               }}
               className="font-redemption text-xl sm:text-xl sm:-mt-8"
               style={{ color: "#d40000" }}
             >
               Contact Us
             </motion.h1> */}
             <form ref={form} onSubmit={sendEmail} className="sm:space-y-6 mt-10 w-50 sm:w-full ">
               <div>
                 <label
                   htmlFor="name"
                   className="block text-sm font-medium text-gray-700"
                 >
                   Name
                 </label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   required
                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 />
               </div>
 
               <div>
                 <label
                   htmlFor="email"
                   className="block text-sm font-medium text-gray-700"
                 >
                   Email
                 </label>
                 <input
                   type="email"
                   id="email"
                   name="email"
                   required
                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 />
               </div>
 
               <div>
                 <label
                   htmlFor="message"
                   className="block text-sm font-medium text-gray-700"
                 >
                   Message
                 </label>
                 <textarea
                   id="message"
                   name="message"
                   rows="4"
                   required
                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 ></textarea>
               </div>
 
               <div>
                 <button
                   type="submit"
                   className="w-full flex justify-center py-2 px-4 mt-4 sm:mt-0 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                 >
                   Submit
                 </button>
               </div>
             </form>
           </motion.div>
   </div>
  );
};

export default Contact;
