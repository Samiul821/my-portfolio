import { motion } from "framer-motion";

const OverlayLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-opacity-60 backdrop-blur-md flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center space-y-4"
      >
        {/* Emoji or Logo */}
        <motion.span
          className="text-4xl md:text-5xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🚀
        </motion.span>

        {/* Loading Text */}
        <motion.p
          className="text-xl md:text-2xl font-semibold text-indigo-400 tracking-widest"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default OverlayLoader;
