import React from 'react';
import { ArrowRight, Calendar, Clock, MapPin, PlayCircle } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://yt3.googleusercontent.com/ytc/AIdro_ldreQY2jYbC8dDZ-LMI0jPTnkD3xcQw6nWTC_GytbTSA=s900-c-k-c0x00ffffff-no-rj" 
            alt="The Greenway Church Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-stone-900/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg">
            Welcome Home to<br />
            <span className="text-greenway-500">Greenway</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
            A place where you can belong before you believe. Join a community passionate about faith, hope, and love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/about">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">Plan A Visit</Button>
            </Link>
            <Link to="/sermons">
              <Button variant="white" size="lg" className="w-full sm:w-auto gap-2">
                <PlayCircle size={20} /> Watch Online
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Service Info Strip */}
      <section className="bg-greenway-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-greenway-800">
            <div className="p-4 flex flex-col items-center gap-2">
              <Clock className="h-8 w-8 text-greenway-400 mb-2" />
              <h3 className="text-xl font-serif font-semibold">Service Times</h3>
              <p className="text-greenway-100">Sunday School 9:15 AM</p>
              <p className="text-greenway-100">Morning Worship 10:30 AM</p>
            </div>
            <div className="p-4 flex flex-col items-center gap-2">
              <MapPin className="h-8 w-8 text-greenway-400 mb-2" />
              <h3 className="text-xl font-serif font-semibold">Location</h3>
              <p className="text-greenway-100">1816 Delga Street,<br/>Ft. Worth, TX 76102</p>
            </div>
            <div className="p-4 flex flex-col items-center gap-2">
              <Calendar className="h-8 w-8 text-greenway-400 mb-2" />
              <h3 className="text-xl font-serif font-semibold">Bible Study</h3>
              <p className="text-greenway-100">Wednesdays at 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-greenway-100 rounded-tl-3xl -z-10"></div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASKzBQb9gTCIRT__WQsKjtj0TJbK_-YjFfw&s" 
                alt="The Greenway Church Graphic" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px] border border-stone-100"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-greenway-50 rounded-br-3xl -z-10"></div>
            </div>
            <div className="space-y-6">
              <span className="text-greenway-800 font-semibold tracking-wider uppercase text-sm">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                Loving God,<br />Loving People.
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                At The Greenway Church, we believe that life is better together. No matter where you are in your spiritual journey, you are welcome here. We are a community dedicated to authentic relationships, spiritual growth, and serving our city.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Our vision is to see our city renewed by the gospel, one life at a time. Come as you are, and discover a grace that changes everything.
              </p>
              <div className="pt-4">
                <Link to="/about">
                  <Button variant="outline" className="group">
                    Learn More About Us <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">There's a Place for You</h2>
            <p className="text-stone-600 text-lg">
              Get connected and find community through our various ministries designed for every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kids */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
              <img 
                src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/487484930_9758692474193623_3956114253956954344_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Kd327rJHt30Q7kNvwF0B4rV&_nc_oc=Adk17t4T35p9sJDUvC5hCV8nkRm7lAyXkFNuVHc8bzRO5xpi83DvrhuZHZ2LnilPsOdekJXUBoCuwGWqO5G3uFbq&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=m8JQSnM36QMOl1io1eHNjA&oh=00_AfmfEZQREyG9cNZYJkg1zqdvXGjM9Hy4elKWcY0n0Le8Eg&oe=69560326" 
                alt="Greenway Kids" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Greenway Kids</h3>
                <p className="text-stone-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Fun, safe, and faith-filled environments for infants through 5th grade.
                </p>
                <Link to="/ministries" className="text-greenway-400 font-medium text-sm flex items-center hover:text-greenway-300">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Youth */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
              <img 
                src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/73273552_2712435922152682_898102774267379712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3LoQyBulCEUQ7kNvwEMlaOL&_nc_oc=AdnHFKy9sPMUouu-3JorcsbKsvsDZ7_fbDBxFlutdOcaemhMWmo4BKwWGnukR41HvSjolo2YVEz4anqzR1I_3hZt&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FwSjSK-FhKP4tDTrj18Qwg&oh=00_Afm_A1s7JDJ3tytLVtrCQqkphDHGRjPYkeCppN2qwlKXcA&oe=6977B681" 
                alt="Youth Ministry" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Youth</h3>
                <p className="text-stone-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Middle and High School students gathering for worship, word, and small groups.
                </p>
                <Link to="/ministries" className="text-greenway-400 font-medium text-sm flex items-center hover:text-greenway-300">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Groups */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
              <img 
                src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/468910045_9074856979243846_7499131993998488982_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ly7xF4xwxkQQ7kNvwFf7blS&_nc_oc=Adn9Y8zf_2lJGm7rBoLVCgXapq_D2WihVNQVcCAjVbhXonIsuVE8KxLvBZuLGZTxy-yk5fHQWpLBbxJGNUwSxOFw&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7aa6pq1zl4yIbOXCvxqjbw&oh=00_AfkYexwl_ySYkjbw6HWljMJPSoifRWv9lzCVCBzTLXcP5Q&oe=6955FC65" 
                alt="Small Groups" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Community Groups</h3>
                <p className="text-stone-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Doing life together in homes across the city.
                </p>
                <Link to="/ministries" className="text-greenway-400 font-medium text-sm flex items-center hover:text-greenway-300">
                  Find a Group <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermon Hook */}
      <section className="py-20 bg-greenway-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-greenway-900 transform skew-x-12 translate-x-1/4 opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <span className="bg-greenway-700 text-greenway-100 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                Latest Message
              </span>
              <h2 className="text-4xl font-serif font-bold leading-tight">
                Walking in Wisdom:<br />
                <span className="text-greenway-300">The Book of Proverbs</span>
              </h2>
              <p className="text-greenway-100 text-lg max-w-lg">
                Catch up on this week's message from Apostle Myron Scott as we dive into practical wisdom for daily living.
              </p>
              <div className="flex gap-4 pt-2">
                <Link to="/sermons">
                  <Button variant="white">Watch Now</Button>
                </Link>
                <Link to="/sermons">
                   <Button variant="outline" className="border-white text-white hover:bg-white/10 focus:ring-white">All Sermons</Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-lg">
               <div className="aspect-video bg-stone-900 rounded-xl shadow-2xl overflow-hidden relative group cursor-pointer">
                  <img src="https://picsum.photos/id/180/800/450" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" alt="Sermon Series" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PlayCircle size={40} className="text-white ml-1" />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;