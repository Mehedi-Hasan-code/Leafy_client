import { Link, NavLink } from 'react-router-dom';
import Links from './Links';
import { CircleUser } from 'lucide-react';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { toast } from 'react-toastify';
import { FaLeaf } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { isDark, toggleTheme } = useTheme();
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
    <div className="flex justify-between items-center p-0 w-11/12 mx-auto py-6">
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
            {user ? (
              ''
            ) : (
              <>
                <li>
                  <NavLink
                    to="/signin"
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-full transition-colors duration-300 ${
                        isActive
                          ? 'text-white font-semibold bg-green-600'
                          : 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
                      }`
                    }
                  >
                    SignIn
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-full transition-colors duration-300 ${
                        isActive
                          ? 'text-white font-semibold bg-green-600'
                          : 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
                      }`
                    }
                  >
                    SignUp
                  </NavLink>
                </li>
              </>
            )}
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
      <div className="px-2 py-1 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-4 items-center">
        {/*  */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" checked={isDark} onChange={toggleTheme} />

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {/*  */}
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
                      <NavLink
                        onClick={handleSignOut}
                        className="shadow-lg rounded-xl px-6 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
                      >
                        Logout
                      </NavLink>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="hidden nav:flex gap-6 ">
            <ul className="flex gap-6">
              <li>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition-colors duration-300 ${
                      isActive
                        ? 'text-white font-semibold bg-green-600'
                        : 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
                    }`
                  }
                >
                  SignIn
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition-colors duration-300 ${
                      isActive
                        ? 'text-white font-semibold bg-green-600'
                        : 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
                    }`
                  }
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
