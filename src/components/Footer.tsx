import { Facebook, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4 hover:opacity-90 transition">
              <img
                src="/Karigor logo new png.png"
                alt="Karigor Digital Ltd"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Copyright © 2012-2022 All rights reserved by Karigor Digital Ltd.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Link</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition">Our Diary</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Say Hello</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@karigor.com.bd</li>
              <li>Phone: +88 01937 516329</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
}

export default Footer;
