import { motion } from "framer-motion";
import { CameraIcon } from "@heroicons/react/24/solid";

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
        <p className="text-xl">Empowering Businesses with Smart Solutions</p>
      </motion.header>

      {/* ERP and Paybooks Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 bg-gray-50"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        {/* ERP Full Box */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-10 hover:shadow-2xl transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            School ERP System
          </h3>
          <p className="text-gray-700 mb-4">
            A robust, scalable, and fully customizable school ERP platform to
            simplify academic and administrative processes. From managing
            admissions, attendance, fee tracking, staff data, and real-time
            reporting — everything in one place. Empower schools and colleges
            with digital control and automation.
          </p>
          <div className="flex items-center gap-2 mt-4 text-purple-700">
            <CameraIcon className="h-6 w-6" />
            <a
              href="#"
              className="underline hover:text-purple-900"
            >
              View ERP Photos (Coming Soon)
            </a>
          </div>
        </motion.div>

        {/* Payroll Box */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">
            Paybooks Payroll
          </h3>
          <p className="text-gray-700 mb-2">
            A powerful cloud-based payroll and accounting software designed for
            businesses of all sizes. Handle employee salaries, tax deductions,
            payslips, compliance, and reporting with ease.
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-red-600 font-semibold mt-4"
          >
            🚧 Coming Soon...
          </motion.div>
        </motion.div>
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
