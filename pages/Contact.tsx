import React from 'react';
import Button from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        
        {/* Info Side */}
        <div className="bg-stone-900 text-white p-12 lg:p-24 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Get in Touch</h1>
          <p className="text-stone-300 text-lg mb-12 max-w-md">
            Have a question? Need prayer? We'd love to hear from you. Fill out the form or visit us this Sunday.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-greenway-800 p-3 rounded-lg">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Visit Us</h3>
                <p className="text-stone-400">1816 Delga Street,<br/>Ft. Worth, TX 76102</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-greenway-800 p-3 rounded-lg">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-stone-400">info@thegreenwaychurch.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-greenway-800 p-3 rounded-lg">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-stone-400">(817) 382-2101</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-stone-50 p-12 lg:p-24 flex items-center">
          <form className="w-full max-w-md mx-auto space-y-6 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Send a Message</h2>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-greenway-500 focus:border-greenway-500 outline-none transition-all"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-greenway-500 focus:border-greenway-500 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-greenway-500 focus:border-greenway-500 outline-none transition-all"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <Button className="w-full">Send Message</Button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;