import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/ui/navbar'
import HomePage from './pages/Homepage';
import Footer from './components/ui/Footer';





function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer/>
      
    </Router>
  )
}

export default App
