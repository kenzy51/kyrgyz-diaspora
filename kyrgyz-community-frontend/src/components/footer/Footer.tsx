import { motion } from "framer-motion";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Union KG NY
          </h2>
          <p className="text-sm leading-relaxed">
            Preserving Kyrgyz culture, supporting our community, and creating
            unity across the U.S.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-red-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-red-500 transition">
                Events
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-red-500 transition">
                Resources
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-500 transition">
                About Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <EnvironmentOutlined className="text-red-500" /> 1829 East 13th
              Street, Brooklyn, NY 11229
            </li>
            <li className="flex items-center gap-2">
              <PhoneOutlined className="text-red-500" /> +1 (929) 325-9094
            </li>
            <li className="flex items-center gap-2">
              <MailOutlined className="text-red-500" /> unionkgny@gmail.com
            </li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FacebookOutlined />
            </a>
            <a
              href="https://www.instagram.com/union.kg.nystate/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <InstagramOutlined />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <YoutubeOutlined />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Union KG NY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
