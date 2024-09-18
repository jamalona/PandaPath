import aboutpic from '../../assets/images/about.webp'
import tourist from '../../assets/images/tourist.jpg'

const AboutUs = () => {
  return (
    <>
    <div className='relative'>
      <div className="flex items-start justify-evenly space-x-6 py-20">
        <div className="w-1/4">
          <h2 className="text-2xl font-bold mb-2">Personalized Expertise</h2>
          <p>
            Our local experts know the destination inside out and are passionate
            about creating truly unique trips just for you.
          </p>
        </div>
        <div className="w-1/4">
          <h2 className="text-2xl font-bold mb-2">Responsible Travel</h2>
          <p>
            We prioritize impactful travel, supporting local communities and
            preserving nature for an enriching experience.
          </p>
        </div>
        <div className="w-1/4">
          <h2 className="text-2xl font-bold mb-2">Tailor-Made Trips</h2>
          <p>
            Enjoy peace of mind with easy booking, flexible terms, and expert
            support—focus on your adventure while we handle the rest.
          </p>
        </div>
      </div>



      <div className="grid grid-cols-2 gap-6 items-start p-4">

        <h2 className="col-span-2 text-4xl">
          About <br /> Us
        </h2>


        <div className="w-96 col-start-2 row-start-2 justify-self-center">
          <img src={tourist} className="rounded-3xl" alt="Tourist" />
          <p className="text-gray-500 mt-2">
            At PandaPath, we believe that every journey is an opportunity for
            adventure, discovery, and unforgettable experiences.
          </p>
        </div>


        <div className="w-72 col-start-1 row-start-3 self-end justify-self-center">
          <img src={aboutpic} className="rounded-3xl" alt="About Us" />
        </div>
      </div>

      
      <p className="absolute text-gray-200 text-600px  -z-10 -bottom-96 -left-11 overflow-x-hidden w-screen">
    PandaPath
  </p>


      </div>


    </>
  )
}
export default AboutUs;