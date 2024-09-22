import { StepperContext } from "../contexts/StepperContext";
import TripPref from "../components/forms/TripForm/TripPrefForm";
import ContactDetails from "../components/forms/TripForm/ContactDetails";
import Stepper from "../components/forms/TripForm/Stepper";
import StepperControl from "../components/forms/TripForm/StepperControl";
import GroupInfo from "../components/forms/TripForm/groupInfo";
import { useState } from "react";
// import { supabase } from "../supabaseClient";

const TripForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    tripPreferences: {
        regionToVisit: [""], 
        travelStyle: "", 
        interest: [""], 
    },
    groupInfo: {
      budget:"",
      startDate: "",
      tripLength: 12, 
      adults: 1,
      children: 0,
      infants: 0,
    },
    contactDetails: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      additionalInfo: "",
    },
  });


  const steps = ["Trip preferences", "Group information", "Final details"];


   
 // Country Code and Phone..note: just a substitute. Remember to use dropdown list for phone codes.

  // Make sure to use currentStep here
  const displayStep = () => {
    switch (currentStep) {
      case 1:
        return <TripPref
        formData={formData.tripPreferences}
        setFormData={(data) => setFormData((prev) => ({ ...prev, tripPreferences: data }))}
        />;
      case 2:
        return <GroupInfo
        formData={formData.groupInfo}
        setFormData={(data) => setFormData((prev) => ({ ...prev, groupInfo: data }))}/>;
      case 3:
        return <ContactDetails
        formData={formData.contactDetails}
        setFormData={(data) => setFormData((prev) => ({ ...prev, contactDetails: data }))}
        />;
      default:
        return null;
    }
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.tripPreferences.regionToVisit.length > 0;  // Ensure a region is selected
      case 2:
        return formData.groupInfo.budget && formData.groupInfo.startDate;  // Validate group info
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
        handleSubmit();  // Call handleSubmit directly instead of using requestSubmit
        return;
      } else {
        newStep++;
      }
    } else {
      // Allow the user to go "back"
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
  
      // Perform form submission logic here (e.g., to Supabase)
      // Uncomment and implement your form submission here
  
      /*
      const dataToInsert = {
        region_to_visit: formData.tripPreferences.regionToVisit,
        travel_style: formData.tripPreferences.travelStyle,
        interest: formData.tripPreferences.interest,
        budget: formData.groupInfo.budget,
        start_date: formData.groupInfo.startDate,
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
      */
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
            <StepperContext.Provider value={{ formData, setFormData }}>
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
