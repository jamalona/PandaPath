import {itinerary} from "../../data/itineraryData"


const Itinerary2cards = () => {


  return (
    <>
      <div className="w-screen">
       
        <h2 className="text-4xl text-center pb-9 mt-6">Detailed Itinerary</h2>

        <div className="flex flex-col items-center">
          {itinerary.map((item, index) => (
            <div key={index} className="w-4/5 mb-8 p-6 bg-gray-100 shadow-lg rounded-md">
               {/*<img src={item.img}/>*/}
              <h3 className="text-2xl font-semibold mb-3">{`Day ${item.day}: ${item.title}`}</h3>
              <p className="mb-2 text-gray-600">{item.description}</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Meals:</strong> {item.meals.join(", ")}</p>
              <p><strong>Hotels:</strong> {item.hotels}</p>
            </div>
          ))}
        </div>
      </div>
    </>

  )

}
export default Itinerary2cards