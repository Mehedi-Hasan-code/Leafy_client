import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';

const ErrorLayout = () => {
  return (
    <div className={`min-h-screen`}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ErrorLayout;
