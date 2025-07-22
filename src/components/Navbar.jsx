import { useState } from "react";
import { FaStore, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#2B2B2B] text-white px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <FaStore className="text-purple-500 text-2xl" />
          <Link
            to="/"
            className="font-bold text-lg hover:text-purple-400"
            onClick={closeMenu}
          >
            NFT Marketplace
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex items-center space-x-10">
            <li>
              <Link to="/marketplace" className="font-semibold hover:text-purple-400">
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/ranking" className="font-semibold hover:text-purple-400">
                Rankings
              </Link>
            </li>
            <li>
              <Link to="/wallet" className="font-semibold hover:text-purple-400">
                Connect a wallet
              </Link>
            </li>
          </ul>

          <Link to="/signup">
            <button className="bg-purple-500 text-white flex items-center gap-2 px-6 py-2 rounded-full hover:bg-purple-600">
              <FaUser />
              <span>Sign Up</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          <Link to="/marketplace" onClick={closeMenu} className="hover:text-purple-400 font-semibold">
            Marketplace
          </Link>
          <Link to="/ranking" onClick={closeMenu} className="hover:text-purple-400 font-semibold">
            Rankings
          </Link>
          <Link to="/wallet" onClick={closeMenu} className="hover:text-purple-400 font-semibold">
            Connect a wallet
          </Link>
          <Link to="/signup" onClick={closeMenu}>
            <button className="bg-purple-500 text-white flex items-center gap-2 px-4 py-2 rounded-full hover:bg-purple-600 w-full justify-center">
              <FaUser />
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
