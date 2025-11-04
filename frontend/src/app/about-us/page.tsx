"use client";

import { motion } from "framer-motion";
import { Shield, Zap, DollarSign, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            We go above and beyond to provide exceptional service
          </p>
          <p className="text-sm text-blue-100">
            Home <span className="text-white">/ About Us</span>
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-2"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
              WashBuddy
            </span>
          </motion.h2>
          <p className="text-gray-500 text-lg">
            We go above and beyond to provide exceptional laundry care and
            service quality.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
        >
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">6-Month Warranty</h3>
            <p className="text-gray-500">
              Every wash and dry service comes with a quality guarantee.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Same-Day Service</h3>
            <p className="text-gray-500">
              We provide express washing and delivery to fit your schedule.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-500">
              We offer affordable plans without compromising quality.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-500">
              Our experienced staff ensures top-quality care for your clothes.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
