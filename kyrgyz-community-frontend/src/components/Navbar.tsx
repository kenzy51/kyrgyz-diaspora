import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import ReactCountryFlag from "react-country-flag";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { key: "home", label: t("home"), path: "/" },
    { key: "events", label: t("events"), path: "/events" },
    { key: "resources", label: t("resources"), path: "/resources" },
    { key: "about", label: t("about"), path: "/about" },
    { key: "createEvent", label: t("createEvent"), path: "/createEvent" },
  ];

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 "
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://static.wixstatic.com/media/98c256_031af4a38b2e485d97bdd8602fccff2c~mv2.jpg"
            alt="Union KG"
            className="w-10 h-10 rounded shadow-md object-cover"
          />
          <span className="font-extrabold text-xl text-gray-900 tracking-wide">
            {t("unionKg")}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium text-gray-700 hover:text-red-600 transition duration-300 ${
                  isActive ? "text-red-600" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Select
            onChange={(value) => changeLang(value)}
            defaultValue={i18n.language}
            className="border rounded px-2 py-1 text-gray-700"
            style={{ width: 60 }}
          >
            <Select.Option value="en">
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{ width: "24px", height: "24px" }}
              />
            </Select.Option>
            <Select.Option value="ru">
              <ReactCountryFlag
                countryCode="RU"
                svg
                style={{ width: "24px", height: "24px" }}
              />
            </Select.Option>
            <Select.Option value="kg">
              <ReactCountryFlag
                countryCode="KG"
                svg
                style={{ width: "24px", height: "24px" }}
              />
            </Select.Option>
          </Select>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-md border-t border-gray-200"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-medium text-gray-700 hover:text-red-600 transition ${
                      isActive ? "text-red-600" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Select
                onChange={(value) => changeLang(value)}
                defaultValue={i18n.language}
                className="border rounded px-2 py-1 text-gray-700"
                style={{ width: 60 }}
              >
                <Select.Option value="en">
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{ width: "24px", height: "24px" }}
                  />
                </Select.Option>
                <Select.Option value="ru">
                  <ReactCountryFlag
                    countryCode="RU"
                    svg
                    style={{ width: "24px", height: "24px" }}
                  />
                </Select.Option>
                <Select.Option value="kg">
                  <ReactCountryFlag
                    countryCode="KG"
                    svg
                    style={{ width: "24px", height: "24px" }}
                  />
                </Select.Option>
              </Select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
