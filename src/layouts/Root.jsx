import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
