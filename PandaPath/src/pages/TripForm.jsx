import { useStepperContext } from "../contexts/StepperContext";
import TripPref from "../components/forms/TripForm/TripPrefForm";
import ContactDetails from "../components/forms/TripForm/ContactDetails";
import Stepper from "../components/forms/TripForm/Stepper";
import StepperControl from "../components/forms/TripForm/StepperControl";
import GroupInfo from "../components/forms/TripForm/groupInfo";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import { getDataToInsert } from '../data/dataUtil';
import { useNavigate } from "react-router-dom";

const TripForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { formData, setFormData } = useStepperContext();
  const navigate = useNavigate();


  const steps = ["Trip preferences", "Group information", "Final details"];





  // Make sure to use currentStep here
  const displayStep = () => {
    switch (currentStep) {
      case 1:
        return <TripPref
          formData={formData.tripPreferences}
          setFormData={setFormData}
        />;
      case 2:
        return <GroupInfo
          formData={formData.groupInfo}
          setFormData={setFormData} />;
      case 3:
        return <ContactDetails
          formData={formData.contactDetails}
          setFormData={setFormData}
        />;
      default:
        return null;
    }
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.tripPreferences.regionToVisit.length > 0 && formData.tripPreferences.travelStyle.length > 0 && formData.tripPreferences.interest.length > 0;
      case 2:
        return true;
      case 3:
        return formData.contactDetails.email && formData.contactDetails.firstName;
      default:
        return true;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    if (direction === "next") {
      if (!validateStep()) {

        alert("Please complete the current step before proceeding.");
        return;
      }

      // If we're on the last step, submit the form
      if (currentStep === steps.length) {
        // handleSubmit();
        return;
      } else {
        newStep++;
      }
    } else {

      newStep--;
    }

    // Ensure the step is within the valid range
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };




  const handleSubmit = async (e) => {
    try {
      if (e) e.preventDefault(); // Prevent default form submission

      if (currentStep === steps.length) {
        console.log("Submitting form with data:", formData);

        const dataToInsert = getDataToInsert(formData);

        const { error } = await supabase.from('booking_form').insert([dataToInsert]);

        if (error) {
          console.error("Error inserting data:", error.message);
        } else {
          navigate('/confirmation')
          console.log("Data successfully inserted");
        }
      }
    } catch (err) {
      console.error("An error occurred during form submission:", err.message);
    }
  };
  return (
    <>
      <div className="w-full bg-white">
        <form
          onSubmit={handleSubmit}

          className="w-8/12 mx-auto  pt-10 pb-20 h-fit border shadow-xl">
          {/* Stepper navigation */}
          <Stepper steps={steps} currentStep={currentStep} />

          {displayStep()}

          {/* Content of the step */}


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
