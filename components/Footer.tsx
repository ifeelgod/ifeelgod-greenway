import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">The Greenway Church</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              A community dedicated to loving God, loving people, and serving the world. Join us on the journey of faith.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-greenway-500 transition-colors">Our Story</Link></li>
              <li><Link to="/sermons" className="hover:text-greenway-500 transition-colors">Watch Sermons</Link></li>
              <li><Link to="/ministries" className="hover:text-greenway-500 transition-colors">Ministries</Link></li>
              <li><Link to="/contact" className="hover:text-greenway-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Times</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="font-medium text-white">Sundays</span>
                <span>Sunday School: 9:15 AM</span>
                <span>Morning Worship: 10:30 AM</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">Wednesdays</span>
                <span>Bible Study: 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-greenway-500" />
                <span>1816 Delga Street,<br />Ft. Worth, TX 76102</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-greenway-500" />
                <span>(817) 382-2101</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-greenway-500" />
                <span>info@thegreenwaychurch.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} The Greenway Church. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;