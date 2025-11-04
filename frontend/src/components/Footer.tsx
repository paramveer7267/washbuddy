"use client";

import { motion as Motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-blue-50 to-blue-100 text-gray-700 pt-12 pb-6 border-t border-blue-200/50">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-3">
            WashBuddy
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Making laundry effortless. Schedule, wash, and relax — we’ll handle
            the rest 🧺.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-800">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-blue-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-800">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-blue-600 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-blue-600 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-600 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-800">
            Get in Touch
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            Email:{" "}
            <a
              href="mailto:support@washbuddy.com"
              className="text-blue-600 hover:underline"
            >
              support@washbuddy.com
            </a>
          </p>
          <p className="text-sm text-gray-600">Phone: +91 98765 43210</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:support@washbuddy.com"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </Motion.div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center border-t border-blue-200/50 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-600">WashBuddy</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
