import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
      </li>
      <li>
        <NavLink to="/browse-tips">Browse Tips</NavLink>
      </li>
      <li>
        <NavLink to="/share-a-garden-tip">Share a Garden Tip</NavLink>
      </li>
      <li>
        <NavLink to="/my-tips">My Tips</NavLink>
      </li>
    </>
  );
};

export default Links;
