import './styles/global.scss';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ReportForm from './pages/ReportForm/ReportForm';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import Contact from './components/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CookiesBanner from './components/CookiesBanner/CookiesBanner';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zgloszenie" element={<ReportForm />} />
        <Route path="/o-nas" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookiesBanner />
    </>
  );
}

export default App;
