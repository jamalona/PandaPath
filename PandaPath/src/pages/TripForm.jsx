import { StepperContext } from "../contexts/StepperContext";
import TripPref from "../components/forms/TripForm/TripPrefForm";
import ContactDetails from "../components/forms/TripForm/ContactDetails";
import Stepper from "../components/forms/TripForm/Stepper";
import StepperControl from "../components/forms/TripForm/StepperControl";
import GroupInfo from "../components/forms/TripForm/groupInfo";
import { useState } from "react";

const TripForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = ["Trip preferences", "Group information", "Final details"];
  const { data, error } = await supabase.from('booking_form').insert([
    {
      region_to_visit: formData.regionToVisit,   // Map your form fields to table columns
      travel_style: formData.travelStyle,
      interest: formData.interest,
                 
      contact_email: userData.contactEmail,
      region_to_visit: userData.regionToVisit,   // Map your form fields to table columns
      travel_style: userData.travelStyle,
      interest: userData.interest,
      group_size: userData.groupSize,            // Example fields
      contact_email: userData.contactEmail,
    },
  ]);


  // Make sure to use currentStep here
  const displayStep = () => {
    switch (currentStep) {
      case 1:
        return <TripPref />;
      case 2:
        return <GroupInfo />;
      case 3:
        return <ContactDetails />;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from submitting/reloading the page
  };


  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    // Ensure new step is within valid range
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <>
      <div className="w-full bg-white">
        <form 
        onSubmit={handleSubmit}
        className="w-8/12 mx-auto mt-20 pt-10 pb-20 h-fit border shadow-xl">
          {/* Stepper navigation */}
          <Stepper steps={steps} currentStep={currentStep} />

          {/* Content of the step */}
          <div>
            <StepperContext.Provider
              value={{
                userData,
                setUserData,
                finalData,
                setFinalData,
              }}
            >
              {displayStep()}
            </StepperContext.Provider>
          </div>

          {/* Navigation controls */}
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </form>
      </div>
    </>
  );
};

export default TripForm;
