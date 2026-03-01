import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Background from './Components/Background';
import About from './Components/About';
import Investigation from './Components/Investigation';
import Mission from './Components/Mission';
import HowItWorks from './Components/HowItWorks';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white relative font-sans selection:bg-accent-red/30 selection:text-white">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/investigation" element={<Investigation />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
