"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-7xl md:text-9xl font-extrabold text-[#003f78] drop-shadow-lg">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 max-w-md mt-3">
        The page you’re looking for might have been removed or doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 px-8 py-3 bg-[#003f78] text-white rounded-full font-semibold hover:bg-[#0257a5] transition-all shadow-md"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
