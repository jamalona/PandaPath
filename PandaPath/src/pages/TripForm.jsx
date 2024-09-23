import { useStepperContext } from "../contexts/StepperContext";
import TripPref from "../components/forms/TripForm/TripPrefForm";
import ContactDetails from "../components/forms/TripForm/ContactDetails";
import Stepper from "../components/forms/TripForm/Stepper";
import StepperControl from "../components/forms/TripForm/StepperControl";
import GroupInfo from "../components/forms/TripForm/groupInfo";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import { TbRuler2Off } from "react-icons/tb";

const TripForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { formData, setFormData } = useStepperContext()
  


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
        setFormData={setFormData}/>;
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
        return formData.tripPreferences.regionToVisit.length > 0 && formData.tripPreferences.travelStyle.length > 0&& formData.tripPreferences.interest.length > 0; 
      case 2:
        return true;  // Validate group info
      case 3:
        return formData.contactDetails.email && formData.contactDetails.firstName;  // Ensure contact details
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
        handleSubmit(); 
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
    if (e) e.preventDefault(); // Prevent default form submission
  
    if (currentStep === steps.length) {
      console.log("Submitting form with data:", formData);

      
      const dataToInsert = {
        region_to_visit: formData.tripPreferences.regionToVisit,
        travel_style: formData.tripPreferences.travelStyle,
        interest: formData.tripPreferences.interest,
        budget: formData.groupInfo.budget,
        date_to_travel: formData.groupInfo.startDate,
        trip_length: formData.groupInfo.tripLength,
        adults: formData.groupInfo.adults,
        children: formData.groupInfo.children,
        infants: formData.groupInfo.infants,
        first_name: formData.contactDetails.firstName,
        last_name: formData.contactDetails.lastName,
        email: formData.contactDetails.email,
        country_code: formData.contactDetails.countryCode,
        phone_number: formData.contactDetails.phoneNumber,
        additional_information: formData.contactDetails.additionalInfo,
      };
    
      const { error } = await supabase.from('booking_form').insert([dataToInsert]);
    
      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data successfully inserted");
      }
      
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
