import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Root = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDark && 'dark bg-gray-600'}`}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
