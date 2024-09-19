import background from '../../assets/images/LiRiver.webp'

const Embark = () => {
  return(
    <div className="text-center relative w-screen  h-[40vh] overflow-hidden">
    <div>
      <p className="text-5xl pt-5">Ready to embark on your next<br/>
        <span className="text-col2">adventure? Connect with PandPath</span><br/>
        <span className="text-col3">today to start Planning your dream trip.</span>
      </p>
    </div>
    <button className="bg-slate-950 text-white text-2xl rounded-3xl px-5 py-3 mt-7 mb-7">Booking Now</button>
    <img src={background} className='object-cover w-screen absolute top-0 -z-20  opacity-30'/>
    </div>
  )

}

export default Embark;