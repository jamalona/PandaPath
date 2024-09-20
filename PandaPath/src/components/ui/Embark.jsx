import { Link } from 'react-router-dom';
import background from '../../assets/images/Rivers.jpg'


const Embark = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  return(
    <div className="text-center relative w-screen  h-[45vh] overflow-hidden ">
    <div>
      <p className="text-5xl pt-28">Ready to embark on your next<br/>
        <span className="text-col2">adventure? Connect with PandPath</span><br/>
        <span className="text-col3">today to start Planning your dream trip.</span>
      </p>
    </div>
    <Link to="/tripform" onClick={handleClick}>
    <button className="bg-slate-950 text-white text-2xl rounded-3xl px-5 py-3 mt-7 mb-7">Booking Now</button>
    </Link>
    <img src={background} className='object-cover w-full absolute -top-36  -z-20  opacity-20 '/>
    </div>
  )

}

export default Embark;
