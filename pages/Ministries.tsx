import React from 'react';
import Button from '../components/Button';

const Ministries: React.FC = () => {
  const ministries = [
    {
      id: 'kids',
      name: 'Greenway Kids',
      description: 'We believe in raising up the next generation to know and love Jesus. Join us for Sunday School at 9:15 AM and Children\'s Church during Morning Worship at 10:30 AM.',
      image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/487484930_9758692474193623_3956114253956954344_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Kd327rJHt30Q7kNvwF0B4rV&_nc_oc=Adk17t4T35p9sJDUvC5hCV8nkRm7lAyXkFNuVHc8bzRO5xpi83DvrhuZHZ2LnilPsOdekJXUBoCuwGWqO5G3uFbq&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=m8JQSnM36QMOl1io1eHNjA&oh=00_AfmfEZQREyG9cNZYJkg1zqdvXGjM9Hy4elKWcY0n0Le8Eg&oe=69560326',
    },
    {
      id: 'youth',
      name: 'Youth (The Way)',
      description: 'The Way is our student ministry for grades 6-12. We meet Wednesdays at 7:00 PM for high-energy worship, relevant teaching, and small group discussion.',
      image: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/73273552_2712435922152682_898102774267379712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3LoQyBulCEUQ7kNvwEMlaOL&_nc_oc=AdnHFKy9sPMUouu-3JorcsbKsvsDZ7_fbDBxFlutdOcaemhMWmo4BKwWGnukR41HvSjolo2YVEz4anqzR1I_3hZt&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FwSjSK-FhKP4tDTrj18Qwg&oh=00_Afm_A1s7JDJ3tytLVtrCQqkphDHGRjPYkeCppN2qwlKXcA&oe=6977B681',
    },
    {
      id: 'womens-fellowship',
      name: "Women's Fellowship",
      description: "A community of women dedicated to spiritual growth, prayer, and supporting one another. Join us for our regular gatherings and events.",
      image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/509007759_24122389657397332_3371214219091784161_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=4g5OLXnr6mgQ7kNvwFs2OR_&_nc_oc=AdlgldG7mrYvcNeX6nKkLHq5psQAzkvx7j0oyDpVhBcvfR5Lm5i8JOMR_mghXP4nb90vpIB_rSOidCEnNH_hlKdi&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=YL_M-Yp_3NgEKM45ejMR_Q&oh=00_AfkHrGC_WK3HOm-w7fvym6ACQSO1XsJCW-Ve9naR6b-c1w&oe=69562141",
    },
    {
      id: 'mens-fellowship',
      name: "Men's Fellowship",
      description: "Strengthening men to be leaders in their homes, church, and community. We gather to sharpen one another through fellowship and the Word.",
      image: "https://scontent-dfw5-3.xx.fbcdn.net/v/t39.30808-6/507520333_24088975457405419_7248655340225161883_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=CqnXL3TM79oQ7kNvwGoralE&_nc_oc=AdnvP1BGyUymI39USkiv4TisWpCDemwfWlcOv4VAHacY1cX0TPUnrGaBlkb6TRYI7omK2_254I2szBHnlP1PYKb3&_nc_zt=23&_nc_ht=scontent-dfw5-3.xx&_nc_gid=NpNMQQfbthS7mtv_Asp0hQ&oh=00_Afl8fsRImTFoR-gUL0tTRCoweWUhgk0Dyr5dUIswo_NNpQ&oe=69560DD2",
    },
    {
      id: 'outreach',
      name: 'Local Outreach',
      description: 'We partner with local food banks and shelters to serve our neighbors. Join us every second Saturday as we serve the city.',
      image: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/90495923_3031353886927549_8692669084438888448_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Qyi7tnSwxCwQ7kNvwHyEoO0&_nc_oc=AdnZXD4MAz97JlYHc9cJU8nGUgWEK5uaOAtq_8Xr4xNeawyvIDYV_W3Lk7kG7fYuuvbpqzDnjcNSEv2dJKO5293L&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6QGCGibq_NkHkGIfX7Sa5A&oh=00_Afm7-_ZtvcGnl6yDSiwdW83JywAjo0oWYAxxSktJPr03jw&oe=6977A4A6',
    },
    {
      id: 'worship',
      name: 'Worship & Creative',
      description: 'Are you a musician, vocalist, or tech enthusiast? We are always looking for people to join our team to help lead our congregation in worship.',
      image: 'https://scontent-dfw6-1.xx.fbcdn.net/v/t39.30808-6/487740998_9758692327526971_8648948124026641785_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Evss9oIZlV4Q7kNvwHy1vvd&_nc_oc=Adlz8xfItXXTar7u73uUxFBSxBIYuClJfo-CBvTgC6IoC8PtnDCgUb-JtQ3OpuHbpb2D8hOmesnKhLrXG5DkqliR&_nc_zt=23&_nc_ht=scontent-dfw6-1.xx&_nc_gid=XwuShABiNVRi3jpdE6DzXw&oh=00_AfmmK5JNZENhQE7vUxjUzxp5yckDTLOjDOcGc4ws7ahMzg&oe=69561272',
    }
  ];

  return (
    <div className="pt-20">
       <div className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Ministries</h1>
          <p className="text-xl text-stone-300">Ways to connect, serve, and grow.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {ministries.map((min, index) => (
          <div key={min.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="flex-1 w-full">
              <img 
                src={min.image} 
                alt={min.name} 
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-stone-900">{min.name}</h2>
              <p className="text-lg text-stone-600 leading-relaxed">{min.description}</p>
              <Button variant="outline">Get Involved</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ministries;