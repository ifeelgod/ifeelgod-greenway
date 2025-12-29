import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sermons from './pages/Sermons';
import Ministries from './pages/Ministries';
import Contact from './pages/Contact';
import Give from './pages/Give';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-greenway-200 selection:text-greenway-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/give" element={<Give />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;