// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
