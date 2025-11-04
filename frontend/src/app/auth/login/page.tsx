"use client";
import { motion as Motion } from "framer-motion";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-linear-to-br from-blue-50 via-blue-100 to-blue-200">
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/70 shadow-2xl rounded-3xl p-8 w-[90%] max-w-md border border-white/40"
      >
        {/* Logo / Title */}
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
              Schedule your laundry like a pro 👕🌀
            </p>
          </Link>
        </Motion.div>

        {/* Form */}
        <Motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-5"
        >
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

          <Motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-2 py-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-400 text-white font-semibold text-lg shadow-md hover:shadow-lg transition"
          >
            Login
          </Motion.button>

          <div className="text-center mt-3 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </div>
        </Motion.form>

        {/* Floating decorative icons */}
        <Motion.div
          className="absolute bottom-4 left-4 right-4 flex justify-between opacity-30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
        >
          <Motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-blue-500 text-2xl"
          >
            🧺
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

export default Login;
