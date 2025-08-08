import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className={`min-h-screen`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
