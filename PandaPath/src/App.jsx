import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/ui/navbar';
import HomePage from './pages/Homepage';
import Yourtrip from './pages/Yourtrip';
import Footer from './components/ui/Footer';
import Itinerary1 from './pages/Itinerary1';
import Itinerary2 from './pages/Itinerary2';
import LoginForm from './components/forms/LoginForm';
import TripForm from './pages/TripForm';
import SignUpForm from './components/forms/signUpForm';
import AgentsPage from './pages/agentsPage';
import RequestConfirmation from './pages/requestConfirmation'
import Agentcard from './components/ui/agentcard';
import { agents } from './data/agentsData';
import { StepperProvider } from './contexts/StepperContext'; // Import the provider


function App() {
const [token, setToken] = useState(false)

if(token){
  sessionStorage.setItem('token', JSON.stringify(token))
}

useEffect(()=>{
if (sessionStorage.getItem('token')){
  let data = JSON.parse(sessionStorage.getItem('token'))
  setToken(data)
}
},[])





  return (
    
    <StepperProvider> {/* Wrap the Router with the provider */}
    <div className="min-h-screen flex flex-col ">
    
      <Router >
        <Navbar token={token}/>
        <div className="mt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginForm setToken={setToken} />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/tripform" element={<TripForm />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/Expedition" element={<Itinerary1 />} />
          <Route path="/Guizhou" element={<Itinerary2 />} />
          <Route path="/confirmation" element={<RequestConfirmation />} />
          <Route path="/yourtrip" element={<Yourtrip/>} />
          
          {agents.map((agent) => (
          <Route
            key={agent.id}
            path={`/agents/${agent.id}`}
            element={<Agentcard {...agent} />}
          />
        ))}
        </Routes>
        </div>
        <Footer />
      </Router>
     </div>
    </StepperProvider>
  );
}

export default App;
