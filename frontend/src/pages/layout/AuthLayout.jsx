// src/pages/layout/AuthLayout.jsx
import { motion } from "framer-motion";

const AuthLayout = ({
  title,
  highlight,
  subtitle,
  quote,
  image,
  overlayColor,
  height = "560px",
  children,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-4">
      <motion.div
        className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl"
        style={{ height }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section */}
        <div
          className="hidden lg:flex w-1/2 h-full relative bg-cover bg-center rounded-r-[80px] overflow-hidden"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div
            className={`absolute inset-0 ${overlayColor} flex flex-col justify-center px-10 text-white`}
          >
            <h1 className="text-3xl font-extrabold mb-4 leading-tight">
              {title}{" "}
              <span className="text-[#00A8E8] drop-shadow-md">{highlight}</span>
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">{subtitle}</p>
            {quote && (
              <p className="text-[#00A8E8] text-xs mt-6 italic">{quote}</p>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 sm:px-12 py-12">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-md"
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
