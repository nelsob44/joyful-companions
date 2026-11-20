import { useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/companions", label: "All Companions" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between border-b border-b-gray-400 py-4 mb-5 text-sm">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      <ul className="hidden items-start gap-5 font-medium md:flex">
        {navItems.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `nav-item${isActive ? " active" : ""}`
              }
            >
              <span>{label}</span>
              <hr className="nav-line" />
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile Photo"
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="cursor-pointer hover:text-black"
                >
                  My Appointments
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Register
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/* --- Mobile Menu --- */}
        <div
          className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to={"/"}>
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/companions"}>
              <p className="px-4 py-2 rounded inline-block">All Companions</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/about"}>
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/contact"}>
              <p className="px-4 py-2 rounded inline-block">Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
