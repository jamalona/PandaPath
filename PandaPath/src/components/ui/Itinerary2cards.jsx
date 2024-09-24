import {itinerary} from "../../data/itineraryData"
import Agentcard from "./agentcard";
import { agents } from "../../data/agentsData";


const Itinerary2cards = () => {
  const secondAgent= agents[0]


  return (
    <>
    <div className="w-9/12 mx-auto">
      <div className="flex">

        <div className="w-8/12">
          <h2 className="text-4xl text-center pb-9 mt-6">Detailed Itinerary</h2>
          <div className="flex flex-col items-start">
            {itinerary.map((item, index) => (
              <div key={index} className="w-full mb-8 p-6 bg-gray-100 shadow-lg rounded-md">
                <img src={item.link} alt={`Day ${item.day} itinerary`} className="mb-4 " />
                <h3 className="text-2xl font-semibold mb-3">{`Day ${item.day}: ${item.title}`}</h3>
                <p className="mb-2 text-gray-600">{item.description}</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p>  <strong>Meals:</strong> {item.meals.join(", ")}</p>
                <p><strong>Hotels:</strong> {item.hotels}</p>
              </div>
            ))}
          </div>
        </div>
        <Agentcard
            name={secondAgent.name}
            title={secondAgent.title}
            description={secondAgent.description}
            email={secondAgent.email}
            phone={secondAgent.phone}
            officeHours={secondAgent.officeHours}
            image={secondAgent.image}
    />




      </div>
    </div>
  </>

  )

}
export default Itinerary2cards