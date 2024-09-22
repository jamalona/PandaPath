import { choices } from "../../../data/preferenceData";


const ChoiceForm = ({ formData, setFormData }) => {

  // const handleChange = (e) => {
  //   const { name, type, value, checked } = e.target;
  
  //   setFormData((prevFormData) => {
  //     const updatedRegionToVisit = prevFormData.regionToVisit;
  //     const updatedInterest = prevFormData.interest;
  
  //     if (type === "checkbox") {
  //       if (name === "regions") {
  //         const newRegionToVisit = checked
  //           ? [...updatedRegionToVisit, value]
  //           : updatedRegionToVisit.filter((item) => item !== value);
  
  //         return {
  //           ...prevFormData,
  //           regionToVisit: newRegionToVisit,
  //         };
  //       } else if (name === "interest") {
  //         const newInterest = checked
  //           ? [...updatedInterest, value]
  //           : updatedInterest.filter((item) => item !== value);
  
  //         return {
  //           ...prevFormData,
  //           interest: newInterest,
  //         };
  //       }
  //     }
  
  //     if (type === "radio" && name === "travelStyle") {
  //       // Only update if the value actually changes
  //       if (prevFormData.travelStyle !== value) {
  //         return {
  //           ...prevFormData,
  //           travelStyle: value,
  //         };
  //       }
  //     }
  
  //     return prevFormData;
  //   });
  // };
  
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
  
    setFormData((prevFormData) => {
      console.log(`Type: ${type}, Name: ${name}, Value: ${value}, Checked: ${checked}`);
  
      let updatedFormData = { ...prevFormData };
      if (type === "checkbox") {
        if (name === "regions") {
          if (checked && !updatedFormData.regionToVisit.includes(value)) {
            updatedFormData.regionToVisit.push(value);
          } else if (!checked) {
            updatedFormData.regionToVisit = updatedFormData.regionToVisit.filter(item => item !== value);
          }
        }
      } else if (type === "radio" && name === "travelStyle") {
        if (updatedFormData.travelStyle !== value) {
          updatedFormData.travelStyle = value;
        }
      }
      console.log(formData)
      console.log(2)
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
                  {/* Check if it's the 'travel style' section to render radio buttons instead of checkboxes */}
                  {section.name === "travelStyle" ? (
                    <input
                      type="radio"
                      id={`${section.name}-${index}`}
                      name={section.name} 
                      value={choice.title}
                      onChange={handleChange}
                      checked={formData.travelStyle === choice.title}
                      className="peer absolute top-5 right-5"
                      //required
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
                          ? formData.regionToVisit?.includes(choice.title)
                          : formData.interest?.includes(choice.title)
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

export default ChoiceForm;
