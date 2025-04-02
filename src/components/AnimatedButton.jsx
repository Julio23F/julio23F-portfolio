import { motion } from "framer-motion";

const AnimatedButton = ({ content }) => {
  return (
    <motion.a
        href="https://drive.google.com/file/d/1YTSBXwiYP2Rfi5NlPB3aIEtVJ6WJdVRd/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block mt-8 bg-green-500 text-black font-bold px-6 py-3 rounded-full hover:bg-green-600 hover:text-white hover:border-none focus:outline-none overflow-hidden"
        style={{ zIndex: 15 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    
  );
};

export default AnimatedButton;
