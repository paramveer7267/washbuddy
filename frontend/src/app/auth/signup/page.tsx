"use client";

import { motion as Motion } from "framer-motion";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-linear-to-br from-blue-50 via-blue-100 to-blue-200">
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/70  shadow-2xl rounded-3xl p-8 w-[90%] max-w-xl border border-white/40 relative"
      >
        {/* Title */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <Link href="/">
            <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              WashBuddy
            </h1>
            <p className="text-gray-600 mt-1 text-sm">
              Create your account and make laundry effortless 🧺
            </p>
          </Link>
        </Motion.div>

        {/* Signup Form */}
        <Motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-5"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="john_doe"
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Signup Button */}
          <Motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-2 py-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-400 text-white font-semibold text-lg shadow-md hover:shadow-lg transition"
          >
            Create Account
          </Motion.button>

          {/* Redirect to Login */}
          <div className="text-center mt-3 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </Link>
          </div>
        </Motion.form>

        {/* Decorative floating icons */}
        {/* Decorative floating icons */}
        <Motion.div
          className="absolute bottom-6 left-6 right-6 flex justify-between opacity-30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
        >
          <Motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-blue-500 text-2xl"
          >
            🧼
          </Motion.span>
          <Motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="text-blue-500 text-2xl"
          >
            🌀
          </Motion.span>
          <Motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2.8 }}
            className="text-blue-500 text-2xl"
          >
            👕
          </Motion.span>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default Signup;
