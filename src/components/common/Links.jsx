import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <>
      <li>
        <NavLink to='/home'>Home</NavLink>
      </li>
      <li>
        <NavLink to=''>Share a Garden Tip</NavLink>
      </li>
      <li>
        <NavLink to=''>Explore Gardeners</NavLink>
      </li>
      <li>
        <NavLink to=''>My Tips</NavLink>
      </li>
    </>
  );
};

export default Links;
