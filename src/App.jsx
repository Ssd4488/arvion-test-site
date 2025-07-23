import { motion } from "framer-motion";

function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center py-16"
      >
        <h1 className="text-5xl font-bold mb-4 animate-bounce">
          ARVION TECHNOLOGIES
        </h1>
        <p className="text-xl">
          Empowering Businesses with Smart Solutions
        </p>
      </motion.header>

      {/* Services */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 bg-gray-50"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              School ERP
            </h3>
            <p className="text-gray-700">
              A complete solution for managing schools efficiently: student records, fees, staff management, and more.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Paybooks
            </h3>
            <p className="text-gray-700">
              Powerful business payroll and accounting software tailored for enterprises of all sizes.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-blue-700 text-white text-center py-4 mt-8"
      >
        © 2025 ARVION TECHNOLOGIES. All rights reserved.
      </motion.footer>
    </div>
  );
}

export default App;
