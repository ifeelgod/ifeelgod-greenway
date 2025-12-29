import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const beliefs = [
    "The Bible is the inspired word of God.",
    "There is one God, eternally existent in three persons: Father, Son, and Holy Spirit.",
    "Salvation is by grace through faith in Jesus Christ.",
    "The Church is the body of Christ on earth.",
  ];

  const team = [
    { 
      name: "Apostle Myron Scott", 
      role: "Lead Pastor", 
      img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/129109910_3753207228075541_4968933358828469832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0te4WC8z5-QQ7kNvwEXFnt1&_nc_oc=AdlALocltCJtZyyW19lSRGUIzh5hCXZxASePxonqTU55uuXp-VguO_n5hbN94sUPedVqs4zCuCzwSO1wNTqkh1nz&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=tvAF5O1bSumPy6po6PiQjQ&oh=00_Afkk2xky3tb2L97__m1CZvsquN5s9XsFpBaYzBKZi0RNtA&oe=69779D13" 
    },
    { 
      name: "Apostle Linda Brown", 
      role: "Assistant Pastor", 
      img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/486624289_10030488970307146_4996446332144135506_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JZjU_SlZoqEQ7kNvwHijk5p&_nc_oc=Adn7HqH4BETydj8XdFRLdJ5lpOOjfp6_aWBV_g9tDScaEEaMyyrnUeY_oT8TrmQmg5GcPczATfdbD81kwRFBdayP&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-Yd3SMuJdoEqWXIMY9G-fg&oh=00_AfmmEn-spll24JwKn0H4VsNHxVP2pc9llbIItg2HuHeREQ&oe=695633A2" 
    },
    { 
      name: "Bishop James Brown", 
      role: "Administrative Pastor", 
      img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/468564403_10164509001119278_3360829751380388471_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9eae26&_nc_ohc=zLDixOAjFtwQ7kNvwE4tRgw&_nc_oc=AdlZZWAYTq1V0rRltRLNzl7KAuCVE3bFcWXK2Sgef9D2730jx65v33_H2bKVi5gZ0GG4cM0VdKK5y_eGmV-kEOzw&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=zgTeg0DeGT_OYtKcsvceMA&oh=00_AflgMCgpLIGC65Lj4xloSlYe7q7EOMggFUeMD-v_i4cVIQ&oe=69562EC3" 
    },
    { 
      name: "Lady Laurie Scott", 
      role: "Worship Leader", 
      img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/601853897_10234648848615951_491060883738919991_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Jaemc43vIM0Q7kNvwE-Ohco&_nc_oc=AdmQLkxF4buhyxWUTy_sVEB5ZwTGfHZTS-pPOhVkHN1wjeKIJD-lCk50JWuO0V_pQIx_8b_FHl9AuLB0I0l2Vmu5&_nc_zt=23&se=-1&_nc_ht=scontent-dfw5-2.xx&_nc_gid=g-UFqtsKVoOBoMebH2SAmQ&oh=00_Afn7BHqhQk-8XLQsc0Inj75Y8lCh26-Gebd7n4q2g52F1g&oe=69560D31" 
    },
    { 
      name: "Deacon Calvin Spoons", 
      role: "Senior Deacon", 
      img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/48359175_2154789684583978_3996824856883625984_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vPkt1f7NXbwQ7kNvwHdnS43&_nc_oc=Adk1ZZMIVjb15qcCZkMxNcr5bpl5PJ0g0E5CvfATRPIggaoFXevoOnjnVM1YD2fIO2LeDIeJex3NmrU5VQlBU-uE&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TFpWfA5vE10l4A1EFoDS6Q&oh=00_AfmYCLukwMWb518uSliXLkg7Fwy4FinlrT8zrR-UOlFftQ&oe=6977C4D0" 
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-stone-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Our Story & Beliefs</h1>
          <p className="text-xl text-stone-600">Get to know the heart behind The Greenway Church.</p>
        </div>
      </div>

      {/* History */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Rooted in History,<br/>Focused on the Future</h2>
            <p className="text-stone-600 leading-relaxed">
              Established in 1985, The Greenway Church began as a small bible study in a living room. Over the decades, we've grown into a vibrant community, but our core mission has remained the same: to be a beacon of hope in our city.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We are a multi-generational, multi-ethnic family that believes the gospel changes everything. We are committed to sound biblical teaching, passionate worship, and compassionate service.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
             <img 
              src="https://yt3.googleusercontent.com/ytc/AIdro_ldreQY2jYbC8dDZ-LMI0jPTnkD3xcQw6nWTC_GytbTSA=s900-c-k-c0x00ffffff-no-rj" 
              alt="The Greenway Church Building" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-greenway-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900">What We Believe</h2>
            <div className="w-20 h-1 bg-greenway-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((belief, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
                <CheckCircle2 className="text-greenway-600 flex-shrink-0 mt-1" />
                <p className="text-stone-700 font-medium">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900">Our Leadership</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member) => (
            <div key={member.name} className="group text-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-sm">
              <div className="relative mb-4 rounded-xl overflow-hidden aspect-[3/4] shadow-md">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-greenway-900/0 group-hover:bg-greenway-900/20 transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold text-stone-900">{member.name}</h3>
              <p className="text-greenway-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;