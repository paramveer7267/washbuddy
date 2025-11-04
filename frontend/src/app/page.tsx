"use client";
import Link from "next/link";
import { motion as Motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-zinc-900 dark:to-black text-center font-sans px-4">
      {/* Title */}
      <Motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-extrabold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6"
      >
        WashBuddy
      </Motion.h1>

      {/* Subtitle */}
      <Motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl mb-10"
      >
        Schedule. Track. Relax. Your laundry, simplified. 🧺
      </Motion.p>

      {/* Login Button */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link href="/auth/login">
          <Motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-400 text-white font-semibold text-lg shadow-md hover:shadow-lg transition"
          >
            Login to WashBuddy
          </Motion.button>
        </Link>
      </Motion.div>
    </div>
  );
}
