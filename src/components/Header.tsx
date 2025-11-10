import { Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-teal-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="w-10 h-10 bg-cyan-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xl">ক</span>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">কারিগর</h1>
            <p className="text-cyan-400 text-xs">Karigor Digital Ltd.</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-cyan-400 transition">Home</Link>
          <a href="/" className="text-white hover:text-cyan-400 transition">Portfolio</a>
          <a href="/" className="text-white hover:text-cyan-400 transition">Our Diary</a>
          <Link to="/about" className="text-white hover:text-cyan-400 transition">About</Link>
          <Link to="/contact" className="text-white hover:text-cyan-400 transition">Contact</Link>
          <button className="text-white hover:text-cyan-400 transition">
            <Moon size={20} />
          </button>
        </nav>

        <Link to="/contact" className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition">
          GET QUOTE
        </Link>
      </div>
    </header>
  );
}

export default Header;
