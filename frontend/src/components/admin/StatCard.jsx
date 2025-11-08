import { motion } from "framer-motion";

const StatCard = ({ title, value, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 bg-white dark:bg-[#132B5E] rounded-2xl shadow-md hover:shadow-lg transition"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-gray-600 dark:text-gray-300 text-sm">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-semibold text-[#0A1F44] dark:text-white">{value}</p>
    </motion.div>
  );
};

export default StatCard;
