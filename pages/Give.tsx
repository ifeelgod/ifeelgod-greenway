import React from 'react';
import Button from '../components/Button';
import { Heart, ShieldCheck } from 'lucide-react';

const Give: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-stone-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
           <Heart className="w-12 h-12 text-greenway-600 mx-auto mb-4" />
           <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Giving</h1>
           <p className="text-lg text-stone-600">
             Your generosity helps us continue our mission of loving God and loving people.
           </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 border-b border-gray-100">
             <div className="grid grid-cols-3 gap-4 mb-6">
                {['$25', '$50', '$100', '$250', '$500', 'Other'].map((amt) => (
                   <button key={amt} className="border-2 border-stone-100 py-3 rounded-lg font-bold text-stone-600 hover:border-greenway-500 hover:text-greenway-600 hover:bg-greenway-50 transition-all">
                      {amt}
                   </button>
                ))}
             </div>
             
             <div className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Fund</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white">
                     <option>Tithes & Offerings</option>
                     <option>Missions</option>
                     <option>Building Fund</option>
                  </select>
               </div>
               <Button className="w-full text-lg py-4">Give Now</Button>
             </div>
          </div>
          <div className="bg-stone-50 p-6 flex items-center justify-center text-stone-500 text-sm gap-2">
             <ShieldCheck size={16} />
             <span>Secure SSL Encrypted Payment</span>
          </div>
        </div>

        <div className="mt-12 text-center text-stone-500 text-sm">
           <p>For questions about giving, please contact info@thegreenwaychurch.com</p>
           <p className="mt-2">The Greenway Church is a 501(c)(3) non-profit organization.</p>
        </div>
      </div>
    </div>
  );
};

export default Give;