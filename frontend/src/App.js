import './styles/global.scss';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ReportForm from './pages/ReportForm/ReportForm'; // <--- nasz formularz

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zgloszenie" element={<ReportForm />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
