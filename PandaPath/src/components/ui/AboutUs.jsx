import aboutpic from '../../assets/images/about.webp'
import tourist from '../../assets/images/tourist.jpg'

const AboutUs = () => {
  const sections = [
    {
      title: "Personalized Expertise",
      description: "Our local experts know the destination inside out and are passionate about creating truly unique trips just for you."
    },
    {
      title: "Responsible Travel",
      description: "We prioritize impactful travel, supporting local communities and preserving nature for an enriching experience."
    },
    {
      title: "Tailor-Made Trips",
      description: "Enjoy peace of mind with easy booking, flexible terms, and expert support—focus on your adventure while we handle the rest."
    }
  ];

  return (
    <>
      <div className='relative mb-0 bg-white -z-10 ml-0 w-screen'>
        <div className="flex items-start justify-evenly space-x-6 py-20">
          {sections.map((section, index) => (
            <div className="w-1/4" key={index}>
              <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
              <p>{section.description}</p>
            </div>
          ))}
        </div>


        <div className="grid grid-cols-2 gap-6 items-start p-4">

          <h2 className="col-span-2 text-5xl ml-20">
            About <br /> Us
          </h2>


          <div className="w-400 col-start-2 row-start-2 justify-self-center">
            <img src={tourist} className="rounded-3xl -mt-8" alt="Tourist" />
            <p className="text-gray-500 mt-2">
              At PandaPath, we believe that every journey is an opportunity for
              adventure, discovery, and unforgettable experiences.
            </p>
          </div>


          <div className="w-96 col-start-1 row-start-3 self-end justify-self-center">
            <img src={aboutpic} className="rounded-3xl -mt-8" alt="About Us" />
          </div>
        </div>


        <p className="absolute text-col text-600px pb-0 ml-0 pl-0 -z-10 -bottom-72 -left-10 overflow-x-auto max-w-102 ">
          PandaPath
        </p>


      </div>


    </>
  )
}
export default AboutUs;