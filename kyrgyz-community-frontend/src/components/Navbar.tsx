import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { key: "home", label: "Home", path: "/" },
    { key: "events", label: "Events", path: "/events" },
    { key: "resources", label: "Resources", path: "/resources" },
    { key: "about", label: "About", path: "/about" },
    { key: "admin", label: "Admin", path: "/admin" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://static.wixstatic.com/media/98c256_031af4a38b2e485d97bdd8602fccff2c~mv2.jpg/v1/fill/w_234,h_274,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/98c256_031af4a38b2e485d97bdd8602fccff2c~mv2.jpg"
            alt="Union KG"
            className="w-10 h-10 rounded shadow-md object-cover"
          />
          <span className="font-extrabold text-xl text-gray-900 tracking-wide">
            Union KG
          </span>
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium text-gray-700 hover:text-red-600 transition duration-300
                ${isActive ? "text-red-600" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-600 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
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
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
