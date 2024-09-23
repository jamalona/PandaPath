import { itinerary1 } from "../../data/itineraryData1";
import pan from "../../assets/images/wildlife.jpg"

const Itinerary1cards = () => {
  return (
    <>
      <div className="w-9/12 mx-auto">
        <div className="flex">

          <div className="w-8/12">
            <h2 className="text-4xl text-center pb-9 mt-6">Detailed Itinerary</h2>
            <div className="flex flex-col items-start">
              {itinerary1.map((item, index) => (
                <div key={index} className="w-full mb-8 p-6 bg-gray-100 shadow-lg rounded-md">
                  <img src={item.link} alt={`Day ${item.day} itinerary`} className="mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{`Day ${item.day}: ${item.title}`}</h3>
                  <p className="mb-2 text-gray-600">{item.description}</p>
                  <p>
                    <strong>Location:</strong> {item.location}
                  </p>
                  <p>
                    <strong>Meals:</strong> {item.meals.join(", ")}
                  </p>
                  <p>
                    <strong>Hotels:</strong> {item.hotels}
                  </p>
                </div>
              ))}
            </div>
          </div>


          <div className="w-4/12 fixed top-56 right-16 h-[60lvh] mb-8 p-6 bg-gray-100 shadow-2xl rounded-md">
            <h3 className="text-xl font-semibold mb-4">Your Travel Agent</h3>
            <img
              src={pan}
              alt="Agent Profile"
              className="mb-4 rounded-full w-28 h-28 mx-auto"
            />
            <h4 className="text-center text-2xl font-semibold">John Carter</h4>
            <p className="text-center text-gray-600">Senior Travel Consultant</p>
            <p className="mt-4 text-gray-700">
              John has over 15 years of experience in planning unforgettable vacations around the
              globe. His expertise ranges from luxury escapes to off-the-beaten-path adventures.
              He's passionate about crafting tailor-made itineraries that fit your unique style.
            </p>
            <div className="mt-6">
              <p>
                <strong>Email:</strong> johndoe@example.com
              </p>
              <p>
                <strong>Phone:</strong> +1 555 123 4567
              </p>
              <p>
                <strong>Office Hours:</strong> Mon - Fri, 9am - 6pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itinerary1cards;
