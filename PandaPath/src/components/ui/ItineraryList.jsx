import img1 from '../../assets/images/tiantianpark.jpg'
import img2 from '../../assets/images/village.png'
import img3 from '../../assets/images/yellow-mountains.jpg'
import img4 from '../../assets/images/ancient-town.jpg'
import img5 from '../../assets/images/xiandaming.webp'
const ItenaryList = () => {

  const Itenaries = [
    {
      link: img1,
      title: '7-Day Aunthentic China Expedition',
      days: '7 days',
      price: 'from $1560 per person'
    },
    {
      link: img2,
      title: '9-Day Immersive China Minority Culture Tour',
      days: '9 days',
      price: 'from $1940 per person'
    },
    {
      link: img3,
      title: 'Remarkable cities & landscapes of china',
      days: '16 days',
      price: 'from $3060 per person'
    },
    {
      link: img4,
      title: '10-Day Highlights of Ancient China',
      days: '10 days',
      price: 'from $2100 per person'
    },
    {
      link: img5,
      title: '5-Day Cultural Journey through Beijing & Xi\'an',
      days: '5 days',
      price: 'from $980 per person'
    },
  ]
  return (
    <>
      <div className="w-screen">
        <h1 className="text-4xl text-center pb-9">Popular Itineraries</h1>

        <div>
          {Itenaries.map((itenary, index) => (
            <div key={index}>
              <img src={itenary.link} className=''/>
              <h2>{itenary.title}</h2>
              <p>{itenary.days}</p>
              <p>{itenary.price}</p>
              <button>Request</button>
            </div>

          ))}

        </div>
      </div>
    </>
  )
}
export default ItenaryList