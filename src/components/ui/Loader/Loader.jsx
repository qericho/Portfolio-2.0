import { motion, AnimatePresence } from "framer-motion";
import { PuffLoader } from "react-spinners";

const Loader = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <PuffLoader color="#ff0077" size={90} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
