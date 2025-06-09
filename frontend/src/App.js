import './styles/global.scss';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ReportForm from './pages/ReportForm/ReportForm'; // <--- nasz formularz
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zgloszenie" element={<ReportForm />} />
        <Route path="/o-nas" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
