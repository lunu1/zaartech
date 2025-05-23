import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return function TransitionWrapper(props) {
    return (
      <>
        <OgComponent {...props} />
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#F5F3EF] origin-bottom z-10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
        />
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#F5F3EF] origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
        />
      </>
    );
  };
};

export default transition;
