
import { choices } from "../../../data/preferenceData"
import Traveldeets from "../../ui/traveldeets";
import BudgetSlider from "../../ui/budget";

const TripPref = () => {
  return (
    <>
      <form className="w-8/12 ml-auto mr-auto mt-20 pt-10 pb-20 h-fit bg-white">

        {choices.map((section, sectionIndex) => (

          <div key={sectionIndex} className="mb-20 ml-auto mr-auto w-4/5 pl-10 pr-10 border-2 pt-5 rounded-xl">
            <h3 className="text-2xl">{section.part}</h3>
            <p className="text-lg">{section.note}</p>
            <div className="flex w-full items-center flex-wrap mx-5   justify-between">
              {section.card.map((choice, index) => (
                <div key={index} className="w-3/12 relative min-w-[31%] h-44 mb-5 ">

                  <label htmlFor={`${choice.title}-${index}`} className="absolute bottom-0 text-white  p-2  text-lg w-full h-full">
                 

                    {/* Check if it's the 'travelstyle' section to render radio buttons instead of checkboxes */}
                    {section.part === "What's your preferred travel style?" ? (
                      <input
                        type="radio"
                        id={`${choice.title}-${index}`}
                        name="travelstyle"
                        className="peer absolute top-5 right-5 "
                      />
                    ) : (
                      <input
                        type="checkbox"
                        id={`${choice.title}-${index}`}
                        className="peer absolute top-5 right-5 "
                      />
                    )}
                       <img src={choice.imglink} alt={choice.title} className="w-full h-full object-cover shadow-xl rounded-2xl  transition-opacity duration-200 peer-checked:opacity-60" />
                    <span className="absolute bottom-0 text-white m-2 text-lg font-medium shadow-2xl ">
                      {choice.title}
                    </span>
                  </label>
                </div>

              ))}
            </div>
          </div>

        ))}
        <BudgetSlider/>

        <Traveldeets/>
        


      </form>
    </>
  );
};


export default TripPref


