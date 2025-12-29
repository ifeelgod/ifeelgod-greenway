import React from 'react';
import { Play, Download, Share2 } from 'lucide-react';
import type { Sermon } from '../types';

const Sermons: React.FC = () => {
  // Mock Data
  const sermons: Sermon[] = [
    {
      id: '1',
      title: 'The Beginning of Wisdom',
      series: 'Proverbs',
      speaker: 'Apostle Myron Scott',
      date: 'March 24, 2025',
      description: 'Understanding the fear of the Lord is the foundation of true wisdom.',
      thumbnail: 'https://picsum.photos/id/1/600/400'
    },
    {
      id: '2',
      title: 'Trust in the Lord',
      series: 'Proverbs',
      speaker: 'Apostle Myron Scott',
      date: 'March 17, 2025',
      description: 'Leaning not on our own understanding opens the door to divine guidance.',
      thumbnail: 'https://picsum.photos/id/10/600/400'
    },
    {
      id: '3',
      title: 'Guard Your Heart',
      series: 'Proverbs',
      speaker: 'Pastor Michael Chang',
      date: 'March 10, 2025',
      description: 'Why the condition of our heart determines the course of our life.',
      thumbnail: 'https://picsum.photos/id/16/600/400'
    },
    {
      id: '4',
      title: 'Generosity Unlocked',
      series: 'Kingdom Finance',
      speaker: 'Apostle Myron Scott',
      date: 'March 3, 2025',
      description: 'Living a life of open hands in a closed-fist world.',
      thumbnail: 'https://picsum.photos/id/24/600/400'
    },
  ];

  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <div className="bg-white border-b border-stone-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-2">Sermons</h1>
          <p className="text-stone-600">Watch or listen to recent messages.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative aspect-video group cursor-pointer">
                <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                     <Play className="ml-1 text-stone-900" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                   45:00
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-greenway-600 mb-2 uppercase tracking-wide">{sermon.series}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2 leading-tight">{sermon.title}</h3>
                <p className="text-sm text-stone-500 mb-4">{sermon.speaker} • {sermon.date}</p>
                <p className="text-stone-600 text-sm mb-6 flex-1">{sermon.description}</p>
                
                <div className="flex items-center justify-between border-t border-stone-100 pt-4 mt-auto">
                   <button className="flex items-center text-xs text-stone-500 hover:text-greenway-600 font-medium">
                      <Play size={14} className="mr-1" /> Watch
                   </button>
                   <button className="flex items-center text-xs text-stone-500 hover:text-greenway-600 font-medium">
                      <Download size={14} className="mr-1" /> Audio
                   </button>
                   <button className="flex items-center text-xs text-stone-500 hover:text-greenway-600 font-medium">
                      <Share2 size={14} className="mr-1" /> Share
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sermons;