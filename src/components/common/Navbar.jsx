import { Link, NavLink } from 'react-router-dom';
import Links from './Links';
import { CircleUser } from 'lucide-react';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { FaLeaf } from 'react-icons/fa';

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
      <div className="lg:bg-white px-4 py-4 rounded-full flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52  p-2 shadow"
          >
            <Links />
          </ul>
        </div>
        <Link to="/" className="space-x-2 lg:space-x-1 hidden lg:block">
          <FaLeaf fill="green" className="inline" />
          <span className="font-bold text-green-700">LEAFY</span>
        </Link>
      </div>
      {/* nav center */}
      <div className="hidden lg:flex bg-white rounded-full px-3 py-3">
        <ul className="menu-horizontal">
          <Links />
        </ul>
      </div>
      {/* nav end */}
      <div className="px-3 py-3 bg-white rounded-full relative">
        {user ? (
          <div className="flex items-center gap-2">
            <div className="profile-container">
              {user.photoURL ? (
                <div>
                  <img
                    className="w-[34px] h-[34px] rounded-full object-cover cursor-pointer"
                    src={user.photoURL}
                    onClick={toggleLogout}
                    title={user.displayName || 'User'}
                  />
                  {showLogout && (
                    <button
                      onClick={handleSignOut}
                      className="absolute left-[50%] -translate-x-[50%] bottom-0 translate-y-[105%] mt-2 shadow-lg rounded-lg px-4 py-2 text-sm hover:bg-white hover:text-green-600 font-bold text-white bg-green-600"
                    >
                      Logout
                    </button>
                  )}
                </div>
              ) : (
                <div
                  className="bg-emerald-400 p-1 rounded-full cursor-pointer"
                  onClick={toggleLogout}
                  title={user.displayName || 'User'}
                >
                  <CircleUser size={28} className="text-white" />
                  {showLogout && (
                    <button
                      onClick={handleSignOut}
                      className="absolute left-[50%] -translate-x-[50%] bottom-0 translate-y-[105%] mt-2 shadow-lg rounded-lg px-4 py-2 text-sm hover:bg-white hover:text-green-600 font-bold text-white bg-green-600"
                    >
                      Logout
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <ul className="flex">
              <li className="flex">
                <NavLink to="/signin" className="">
                  LogIn
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" className="">
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
