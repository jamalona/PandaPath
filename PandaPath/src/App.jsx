import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/ui/navbar'
import HomePage from './pages/Homepage';
import Footer from './components/ui/Footer';
import Itinerary1 from './pages/Itinerary1';
import Itinerary2 from './pages/Itinerary2';





function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/Expedition" element={<Itinerary1 />} />
      </Routes>
      <Routes>
        <Route path="/Guizhou" element={<Itinerary2 />} />
      </Routes>


      <Footer />

    </Router>
  )
}

export default App
