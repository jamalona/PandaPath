// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/ui/navbar';
import HomePage from './pages/Homepage';
import Footer from './components/ui/Footer';
import Itinerary1 from './pages/Itinerary1';
import Itinerary2 from './pages/Itinerary2';
import LoginForm from './components/forms/LoginForm';
import TripForm from './pages/TripForm';
import ContactDetails from './components/forms/TripForm/ContactDetails';
import SignUpForm from './components/forms/signUpForm';
import { StepperProvider } from './contexts/StepperContext'; // Import the provider

function App() {
  return (
    <StepperProvider> {/* Wrap the Router with the provider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/tripform" element={<TripForm />} />
          <Route path="/Expedition" element={<Itinerary1 />} />
          <Route path="/Guizhou" element={<Itinerary2 />} />
          <Route path="/details" element={<ContactDetails />} />
        </Routes>
        <Footer />
      </Router>
    </StepperProvider>
  );
}

export default App;
