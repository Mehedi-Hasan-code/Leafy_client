import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-colors duration-300 ${
              isActive
                ? 'text-emerald-700 font-semibold bg-emerald-50'
                : 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/explore-gardeners"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-colors duration-300 ${
              isActive
                ? 'text-emerald-700 font-semibold bg-emerald-50'
                : 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`
          }
        >
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-tips"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-colors duration-300 ${
              isActive
                ? 'text-emerald-700 font-semibold bg-emerald-50'
                : 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`
          }
        >
          Browse Tips
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/share-a-garden-tip"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-colors duration-300 ${
              isActive
                ? 'text-emerald-700 font-semibold bg-emerald-50'
                : 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`
          }
        >
          Share a Garden Tip
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-tips"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-colors duration-300 ${
              isActive
                ? 'text-emerald-700 font-semibold bg-emerald-50'
                : 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
            }`
          }
        >
          My Tips
        </NavLink>
      </li>
    </>
  );
};

export default Links;
