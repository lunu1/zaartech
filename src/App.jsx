import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Text from './components/Text';
import HomePage from './Pages/HomePage';
import { AnimatePresence } from 'framer-motion';
import { div } from 'framer-motion/client';
import ServicesRow from './components/ServiceRow';
import ServicePage from './Pages/Service';
import ContactUs from './Pages/Contact';
import Footer from './components/Footer';
import Line from './components/Line';
import AboutUs from './Pages/About';
import Process from './components/Process';
import Fitout from './Pages/Fitout';
import DesignProcess from './Pages/ServiceSimple';
import ComingSoon from './Pages/Comingsoon';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={<div><Home /><Line/></div>} />
        <Route path="/contact" element={<div><ContactUs/></div>} />
        <Route path="/about" element={<div><AboutUs /></div>} />
        <Route path="/services" element={<div><DesignProcess /></div>} />
        <Route path="/projects" element={<div><ComingSoon /></div>} />
      </Routes>
      </AnimatePresence>
      <Footer/>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
