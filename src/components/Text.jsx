import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Text = () => {
  const ref = useRef(null); // Reference to the element
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  return (
    <section id="about" className="text-black font-serif text-center ">
      <p className="mt-10 text-lightblue ">About Company</p>
      <motion.h1
        ref={ref} // Attach ref to the motion element
        initial={{ opacity: 0, y: 100 }} // Starting animation
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Trigger animation when in view
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-7xl text-center py-10 mx-7"
      >
        Experience the Best in Luxury and Comfort!{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="lightgreen"
          className="inline mx-2 h-20 w-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27l4.15 2.73-1.11-4.81L18 11.62l-4.92-.42L12 6.19l-1.08 5.01L6 11.62l2.96 3.57L7.85 20z"
          />
        </svg>
        Explore our exclusive, top-tier selection online.{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="lightgreen"
          className="inline mx-2 h-20 w-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27l4.15 2.73-1.11-4.81L18 11.62l-4.92-.42L12 6.19l-1.08 5.01L6 11.62l2.96 3.57L7.85 20z"
          />
        </svg>
        Indulge in elegance, quality, and sophistication today.
      </motion.h1>
    </section>
  );
};

export default Text;
