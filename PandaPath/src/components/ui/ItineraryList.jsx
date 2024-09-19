import img1 from '../../assets/images/tiantianpark.jpg'
import img2 from '../../assets/images/village.png'
import img3 from '../../assets/images/yellow-mountains.jpg'
import img4 from '../../assets/images/ancient-town2.jpg'
import img5 from '../../assets/images/xiandaming.webp'
import { Link} from 'react-router-dom';
const ItenaryList = () => {

  const Itenaries = [
    {
      link: img1,
      path:'/Expedition',
      title: '7-Day Aunthentic China Expedition',
      days: '7 days',
      price: 'from $1560 per person'
    },
    {
      link: img2,
      path:'/Guizhou',
      title: '9-Day Immersive China Minority Culture Tour',
      days: '9 days',
      price: 'from $1940 per person'
    },
    {
      link: img3,
      path:'',
      title: 'Remarkable cities & landscapes of china',
      days: '16 days',
      price: 'from $3060 per person'
    },
    {
      link: img4,
      path:'',
      title: '10-Day Highlights of Ancient China',
      days: '10 days',
      price: 'from $2100 per person'
    },
    {
      link: img5,
      path:'',
      title: '5-Day Cultural Journey through Beijing & Xi\'an',
      days: '5 days',
      price: 'from $980 per person'
    },
  ]
  return (
    <>
      <div className="w-screen ">
        <h1 className="text-4xl text-center pb-9 mt-6">Popular Itineraries</h1>

        <div className='flex w-4/5 ml-auto mr-auto flex-wrap'>
          {Itenaries.map((itenary, index) => (
            
              <div key={index} className='w-1/3 mb-10 relative h-450 group min-w-[31%]'>
                <Link to={itenary.path} key={index}>
                <img src={itenary.link} className=' w-96 h-60 -mb-8  transition-opacity duration-300 group-hover:opacity-70' />
                {/* Text Container */}
                <div className='bg-white w-96 p-5 h-56 shadow-lg rounded-t-2xl absolute bottom-0 hover:h-60 transition-all duration-300 '>
                  <h2 className='text-xl w-80'>{itenary.title}</h2>
                  <p className='mt-5'>{itenary.days}</p>
                  <p>{itenary.price}</p>

                  <button className='text-2xl absolute left-32 bottom-5 z-50 items-center pl-5 pr-5 pt-1 pb-1 border-black border-2 rounded-lg hover:bg-slate-950 hover:text-white'>Request</button>
                </div>
                </Link>
              </div>
              
          

          ))}

        </div>
      </div>
    </>
  )
}
export default ItenaryList