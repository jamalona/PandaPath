
import { choices } from "../../../data/preferenceData"

const TripPref = () => {
  return (
    <>
      <form className="w-8/12 ml-auto mr-auto mt-20 pt-10 pb-20 h-fit bg-white">

        {choices.map((section, sectionIndex) => (

          <div key={sectionIndex} className="mb-20 ml-auto mr-auto w-4/5 pl-10 pr-10 border-2 pt-5 ">
            <h3 className="text-2xl">{section.part}</h3>
            <p className="text-lg">{section.note}</p>
            <div className="flex w-full items-center flex-wrap mx-5   justify-between">
              {section.card.map((choice, index) => (
                <div key={index} className="w-3/12 relative min-w-[31%] h-44 mb-5 ">

                  <label htmlFor={`${choice.title}-${index}`} className="absolute bottom-0 text-white  p-2  text-lg w-full h-full">
                    <img src={choice.imglink} alt={choice.title} className="w-full h-full object-cover rounded-2xl hover:opacity-75 transition-opacity duration-300" />

                    {/* Check if it's the 'travelstyle' section to render radio buttons instead of checkboxes */}
                    {section.part === "What's your preferred travel style?" ? (
                      <input
                        type="radio"
                        id={`${choice.title}-${index}`}
                        name="travelstyle"
                        className=" absolute top-5 right-5"
                      />
                    ) : (
                      <input
                        type="checkbox"
                        id={`${choice.title}-${index}`}
                        className="absolute top-5 right-5 "
                      />
                    )}
                    <span className="absolute bottom-0 text-white m-2 text-lg">
                      {choice.title}
                    </span>
                  </label>
                </div>

              ))}
            </div>
          </div>

        ))}


        <div className="w-4/5 ml-auto mr-auto pb-10 pl-10 pr-10 border-2 pt-5 ">
          <div className="mb-6">
            <label className="block text-2xl font-semiboldmb-2">When do you want to travel?</label>
            <input
              type="date"
              name="startDate"

              className="w-full border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-sm text-gray-500 mt-2">
              Trips to China need to be planned at least 2 weeks before departure, as accommodation and experiences book up quickly.
            </p>
          </div>

          {/* Desired Trip Length */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Desired trip length</label>
            <input
              type="number"
              name="tripLength"

              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              min="5"
              max="28"
            />
            <p className="text-sm text-gray-500 mt-2">On average, our customers travel to China for 12 days.</p>
          </div>

          {/* Number of Travelers */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-4">Who will be traveling?</label>

            {/* Adults */}
            <div className="mb-4">
              <label className="block 0 mb-1">Adults (Above 12)</label>
              <input
                type="number"
                name="adults"

                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="1"
              />
            </div>

            {/* Children */}
            <div className="mb-4">
              <label className="block  mb-1">Children (Ages 2-12)</label>
              <input
                type="number"
                name="children"

                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="0"
              />
            </div>

            {/* Infants */}
            <div className="mb-4">
              <label className="block  mb-1">Infants (Under 2)</label>
              <input
                type="number"
                name="infants"

                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="0"
              />
            </div>
          </div>
        </div>


      </form>
    </>
  );
};


export default TripPref


