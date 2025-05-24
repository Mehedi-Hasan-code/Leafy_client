import { Link, NavLink } from 'react-router-dom';
import Links from './Links';
import { CircleUser } from 'lucide-react';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { FaLeaf } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);

  // Close logout menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLogout && !event.target.closest('.profile-container')) {
        setShowLogout(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showLogout]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success('LogOut successful'))
      .catch((err) => console.log(err.message));
  };

  const toggleLogout = (e) => {
    e.stopPropagation();
    setShowLogout(!showLogout);
  };

  return (
    <div className="flex justify-between items-center p-0 w-11/12 mx-auto mt-4">
      {/* nav start */}
      <div className="nav:px-6 nav:py-4 rounded-full flex items-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn nav:hidden text-emerald-600 hover:text-emerald-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-xl z-1 mt-3 w-52 p-4 shadow-lg border border-emerald-100"
          >
            <Links />
          </ul>
        </div>
        <Link to="/" className="space-x-2 nav:space-x-1 hidden nav:block">
          <FaLeaf className="inline text-emerald-600" size={24} />
          <span className="font-bold text-2xl text-emerald-700">LEAFY</span>
        </Link>
      </div>
      {/* nav center */}
      <div className="hidden nav:flex bg-white rounded-full px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <ul className="menu-horizontal">
          <Links />
        </ul>
      </div>
      {/* nav end */}
      <div className="px-2 py-1 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
        {user ? (
          <div className="flex items-center gap-2">
            <div className="profile-container">
              {user.photoURL ? (
                <div className="relative">
                  <img
                    className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300"
                    src={user.photoURL}
                    onClick={toggleLogout}
                    data-tooltip-id="user-tooltip"
                    data-tooltip-content={user.displayName || 'User'}
                  />
                  <Tooltip id="user-tooltip" />
                  {showLogout && (
                    <div className="absolute right-0 mt-2 z-50">
                      <button
                        onClick={handleSignOut}
                        className="shadow-lg rounded-xl px-6 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative">
                  <div
                    className="bg-emerald-600 p-2 rounded-full cursor-pointer hover:bg-emerald-700 transition-colors duration-300"
                    onClick={toggleLogout}
                    data-tooltip-id="user-tooltip"
                    data-tooltip-content={user.displayName || 'User'}
                  >
                    <CircleUser size={28} className="text-white" />
                    <Tooltip id="user-tooltip" />
                  </div>
                  {showLogout && (
                    <div className="absolute right-0 mt-2 z-50">
                      <button
                        onClick={handleSignOut}
                        className="shadow-lg rounded-xl px-6 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-6">
            <ul className="flex gap-6">
              <li>
                <NavLink
                  to="/signin"
                  className="text-emerald-700 font-semibold hover:text-emerald-800 transition-colors duration-300"
                >
                  LogIn
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="text-emerald-700 font-semibold hover:text-emerald-800 transition-colors duration-300"
                >
                  SignUp
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
