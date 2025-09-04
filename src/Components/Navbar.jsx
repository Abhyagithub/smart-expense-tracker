import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isMenuOpen, isScrolled, isDarkMode, toggleMenu, toggleDarkMode }) => {
  const navigate = useNavigate();
  const menuItems = ['Dashboard', 'Summary', 'Expense', 'Category', 'Report'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-gradient-to-r from-blue-600 to-purple-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className={`text-2xl font-bold cursor-pointer ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}
            onClick={() => navigate('/')}
          >
            <i className="fas fa-chart-line mr-2"></i> ExpenseTracker
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap rounded ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Dark Mode + Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleDarkMode}>
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}></i>
            </button>

            <button
              onClick={() => navigate('/login')}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap border rounded ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600 border-gray-300 hover:border-blue-600'
                  : 'text-white hover:text-blue-200 border-white/30 hover:border-blue-200'
              }`}
            >
              Login
            </button>

            <button
              onClick={() => navigate('/register')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 cursor-pointer rounded"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={isScrolled ? 'text-gray-700' : 'text-white'}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  navigate(`/${item.toLowerCase()}`);
                  toggleMenu();
                }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left cursor-pointer rounded"
              >
                {item}
              </button>
            ))}
            <div className="border-t border-gray-200 pt-4 pb-3">
              <button onClick={() => navigate('/login')} className="block w-full px-3 py-2">
                Login
              </button>
              <button onClick={() => navigate('/register')} className="block w-full px-3 py-2">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
