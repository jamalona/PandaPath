import { Link } from 'react-router-dom';
import { Itineraries } from '../../data/popularItinerary'

const ItenaryList = () => {

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };



  return (
    <>
      <div className="w-screen ">
        <h1 className="text-4xl text-center pb-9 mt-6">Popular Itineraries</h1>

        <div className='flex w-10/12 mx-auto flex-wrap'>
          {Itineraries.map((itenary, index) => (

            <div key={index} className='w-1/3 mb-10 relative h-450 group min-w-[30%] '>
              <Link to={itenary.path} key={index} onClick={handleLogoClick}>
                <img src={itenary.link} className=' w-96 h-60 -mb-8  transition-opacity duration-300 group-hover:opacity-70 rounded-t-md' />
                {/* Text Container */}
                <div className='bg-white w-96 p-5 h-56 shadow-lg rounded-t-2xl absolute bottom-0 hover:h-60 transition-all duration-300 '>
                  <h2 className='text-xl w-80'>{itenary.title}</h2>
                  <p className='mt-5'>{itenary.days}</p>
                  <p>{itenary.price}</p>  
                </div>
              </Link>
              <Link to="/tripform" onClick={handleLogoClick}>
              <button className='text-2xl absolute left-28 bottom-5 z-40 items-center ml-2 pl-5 pr-5 pt-1 pb-1 border-black border-2 rounded-lg hover:bg-slate-950 hover:text-white'>Request</button>
              </Link>
            </div>



          ))}

        </div>
      </div>
    </>
  )
}
export default ItenaryList