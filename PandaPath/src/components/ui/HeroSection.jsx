//button should have a link. should take you to the log in page.
// import {Link} from 'react-router-dom';
import videoBg from '../../assets/videos/hero.mp4'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  return (
    <div className="relative w-screen h-[63vh] overflow-hidden mt-20 text-center">
      <video autoPlay muted loop src={videoBg} className="absolute inset-0 w-full h-full object-cover" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
        <p className="text-center text-2xl mb-4">Tailor Your China Adventure with Local Experts</p>
        <h1 className="mb-4 text-[9vw]">EXPLORE CHINA</h1>

        <Link to="/tripform" onClick={handleClick}>
        <button className="bg-black opacity-70 border-white border-2 backdrop-blur-2xl text-white text-2xl px-3 py-14 shadow-2xl rounded-full hover:bg-slate-950 hover:border-black hover:opacity-100">Plan Your Trip</button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection;