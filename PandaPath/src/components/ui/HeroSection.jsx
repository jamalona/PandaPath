//button should have a link. should take you to the log in page.
// import {Link} from 'react-router-dom';
import videoBg from '../../assets/videos/hero.mp4'

const HeroSection = () => {
  return (
    <div className="relative w-screen h-[60vh] overflow-hidden">
      <video autoPlay muted loop src={videoBg} className="absolute inset-0 w-full h-full object-cover"/>
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
        <p className="text-center text-2xl mb-4">Tailor Your China Adventure with Local Experts</p>
        <h1 className="text-150px mb-4">EXPLORE CHINA</h1>
        <button className="bg-red-800 text-white text-2xl px-3 py-14  rounded-full ">Plan Your Trip</button>
      </div>
    </div>
  )
}

export default HeroSection;