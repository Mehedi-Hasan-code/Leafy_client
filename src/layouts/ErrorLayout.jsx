import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const ErrorLayout = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark && 'dark bg-gray-600'}`}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ErrorLayout;
