import { choices } from "../../../data/preferenceData";
import { useStepperContext } from "../../../contexts/StepperContext";

const TripPref = () => {
  const { formData, setFormData } = useStepperContext();

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prevFormData) => {
      let updatedFormData = { ...prevFormData };

      if (type === "checkbox") {
        if (name === "regions") {
          if (checked && !updatedFormData.tripPreferences.regionToVisit.includes(value)) {
            updatedFormData.tripPreferences.regionToVisit.push(value);
          } else if (!checked) {
            updatedFormData.tripPreferences.regionToVisit = updatedFormData.tripPreferences.regionToVisit.filter(item => item !== value);
          }
        } else if (name === "interest") {
          if (checked && !updatedFormData.tripPreferences.interest.includes(value)) {
            updatedFormData.tripPreferences.interest.push(value);
          } else if (!checked) {
            updatedFormData.tripPreferences.interest = updatedFormData.tripPreferences.interest.filter(item => item !== value);
          }
        }
      } else if (type === "radio" && name === "travelStyle") {
        if (updatedFormData.tripPreferences.travelStyle !== value) {
          updatedFormData.tripPreferences.travelStyle = value;
        }
      }

      return updatedFormData;
    });
  };

  return (
    <>
      {choices.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-20 ml-auto mr-auto w-4/5 pl-10 pr-10 border-2 pt-5 rounded-xl mt-20 shadow-xl">
          <h3 className="text-2xl ml-2">{section.part}</h3>
          <p className="text-lg ml-2">{section.note}</p>
          <div className="flex w-full items-center flex-wrap justify-between">
            {section.card.map((choice, index) => (
              <div key={index} className="w-3/12 relative min-w-[31%] h-44 mb-5">
                <label htmlFor={`${section.name}-${index}`} className="absolute bottom-0 text-white p-2 text-lg w-full h-full">
                  {/* Render radio buttons for 'travel style' section, checkboxes otherwise */}
                  {section.name === "travelStyle" ? (
                    <input
                      type="radio"
                      id={`${section.name}-${index}`}
                      name={section.name}
                      value={choice.title}
                      onChange={handleChange}
                      checked={formData.tripPreferences.travelStyle === choice.title}
                      className="peer absolute top-5 right-5"
                      required
                    />
                  ) : (
                    <input
                      type="checkbox"
                      id={`${section.name}-${index}`}
                      name={section.name}
                      value={choice.title}
                      onChange={handleChange}
                      checked={
                        section.name === "regions"
                          ? formData.tripPreferences.regionToVisit.includes(choice.title)
                          : formData.tripPreferences.interest.includes(choice.title)
                      }
                      className="peer absolute top-5 right-5"
                    />
                  )}
                  <img src={choice.imglink} alt={choice.title} className="w-full h-full object-cover shadow-xl rounded-2xl transition-opacity duration-200 peer-checked:opacity-60" />
                  <span className="absolute bottom-0 text-white m-2 text-lg font-medium shadow-2xl">
                    {choice.title}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default TripPref
