import { FaLeaf } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-emerald-50 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaLeaf className="text-emerald-600" size={24} />
              <span className="text-2xl font-bold text-emerald-700">LEAFY</span>
            </div>
            <p className="text-emerald-600">
              Your ultimate destination for gardening tips, inspiration, and
              community.
            </p>
          </div>
          <nav className="space-y-4">
            <h6 className="text-lg font-semibold text-emerald-800">Services</h6>
            <div className="space-y-2">
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Branding
              </a>
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Design
              </a>
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Marketing
              </a>
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Advertisement
              </a>
            </div>
          </nav>
          <nav className="space-y-4">
            <h6 className="text-lg font-semibold text-emerald-800">Company</h6>
            <div className="space-y-2">
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                About us
              </a>
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Contact
              </a>
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Jobs
              </a>
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Press kit
              </a>
            </div>
          </nav>
          <nav className="space-y-4">
            <h6 className="text-lg font-semibold text-emerald-800">Legal</h6>
            <div className="space-y-2">
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Terms of use
              </a>
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Privacy policy
              </a>
              <a className="block text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Cookie policy
              </a>
            </div>
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-emerald-200">
          <p className="text-center text-emerald-600">
            © {new Date().getFullYear()} LEAFY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
