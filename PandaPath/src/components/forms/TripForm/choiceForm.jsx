import { choices } from "../../../data/preferenceData";
import { useState } from "react";

const ChoiceForm = () => {
  const [formData, setFormData] = useState({
    regionToVisit: [], 
    travelStyle: "", 
    interest: [], 
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prevFormData) => {
      // Handle checkbox input
      if (type === "checkbox") {
        if (name === "regions") {
          // Toggle regionToVisit array
          const updatedRegionToVisit = checked
            ? [...prevFormData.regionToVisit, value]
            : prevFormData.regionToVisit.filter((item) => item !== value);

          return { ...prevFormData, regionToVisit: updatedRegionToVisit };
        } else if (name === "interest") {
          // Toggle interest array
          const updatedInterest = checked
            ? [...prevFormData.interest, value]
            : prevFormData.interest.filter((item) => item !== value);

          return { ...prevFormData, interest: updatedInterest };
        }
      }

      // Handle radio input for travelStyle
      if (type === "radio" && name === "travelStyle") {
        return { ...prevFormData, travelStyle: value };
      }

      return prevFormData; // Return state as-is if no changes are needed
    });
  };

  return (
    <>
      {choices.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-20 ml-auto mr-auto w-4/5 pl-10 pr-10 border-2 pt-5 rounded-xl shadow-xl">
          <h3 className="text-2xl ml-2">{section.part}</h3>
          <p className="text-lg ml-2">{section.note}</p>
          <div className="flex w-full items-center flex-wrap justify-between">
            {section.card.map((choice, index) => (
              <div key={index} className="w-3/12 relative min-w-[31%] h-44 mb-5">
                <label htmlFor={`${section.name}-${index}`} className="absolute bottom-0 text-white p-2 text-lg w-full h-full">
                  {/* Check if it's the 'travel style' section to render radio buttons instead of checkboxes */}
                  {section.name === "travelStyle" ? (
                    <input
                      type="radio"
                      id={`${section.name}-${index}`}
                      name={section.name} 
                      value={choice.title}
                      checked={formData.travelStyle === choice.title}
                      onChange={handleChange}
                      className="peer absolute top-5 right-5"
                    />
                  ) : (
                    <input
                      type="checkbox"
                      id={`${section.name}-${index}`}
                      name={section.name} 
                      value={choice.title}
                      checked={
                        section.name === "regions"
                          ? formData.regionToVisit.includes(choice.title)
                          : formData.interest.includes(choice.title)
                      }
                      onChange={handleChange}
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

export default ChoiceForm;
