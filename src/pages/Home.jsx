import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="text-center py-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">I build beautiful web experiences.</p>
    </motion.div>
  );
}

export default Home;
