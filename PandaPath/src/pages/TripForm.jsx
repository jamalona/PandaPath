import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useStepperContext } from "../contexts/StepperContext";
import TripPref from "../components/forms/TripForm/TripPrefForm";
import GroupInfo from "../components/forms/TripForm/GroupInfo";
import ContactDetails from "../components/forms/TripForm/ContactDetails";
import Stepper from "../components/forms/TripForm/Stepper";
import StepperControl from "../components/forms/TripForm/StepperControl";
import { supabase } from "../supabaseClient";
import { getDataToInsert } from "../data/dataUtil";

const TripForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { formData, setFormData } = useStepperContext();
  const navigate = useNavigate();

  const initialFormData = {
    tripPreferences: {
      regionToVisit: [],
      travelStyle: "",
      interest: [],
    },
    groupInfo: {
      budget: 0,
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
  };

  const steps = ["Trip preferences", "Group information", "Final details"];

  const displayStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <TripPref
            formData={formData.tripPreferences}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <GroupInfo
            formData={formData.groupInfo}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <ContactDetails
            formData={formData.contactDetails}
            setFormData={setFormData}
          />
        );
      default:
        return null;
    }
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.tripPreferences.regionToVisit.length > 0 &&
          formData.tripPreferences.travelStyle.length > 0 &&
          formData.tripPreferences.interest.length > 0
        );
      case 2:
        return true;
      case 3:
        return (
          formData.contactDetails.email.length > 0 &&
          formData.contactDetails.firstName.length > 0
        );
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
      if (currentStep < steps.length) newStep++;
    } else if (newStep > 1) {
      newStep--;
    }

    setCurrentStep(newStep);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_h2b4ghg";
    const templateId = "template_b1pe0je";
    const publicKey = "mjiSg-zFigm8z8112";

    const templateParams = {
      region_to_visit: formData.tripPreferences.regionToVisit,
      travel_style: formData.tripPreferences.travelStyle,
      interest: formData.tripPreferences.interest,
      adults: formData.groupInfo.adults,
      children: formData.groupInfo.children,
      infants: formData.groupInfo.infants,
      first_name: formData.contactDetails.firstName,
      last_name: formData.contactDetails.lastName,
      email: formData.contactDetails.email,
      phone_number: formData.contactDetails.phoneNumber,
      additional_information: formData.contactDetails.additionalInfo,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    if (currentStep === steps.length) {
      try {
        const dataToInsert = getDataToInsert(formData);
        const { error } = await supabase.from("booking_form").insert([dataToInsert]);

        if (error) {
          console.error("Error inserting data:", error.message);
        } else {
          setFormData(initialFormData);
          navigate("/confirmation");
        }
      } catch (err) {
        console.error("Error during form submission:", err.message);
      }
    }
  };

  return (
    <div className="w-full bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-8/12 mx-auto pt-10 pb-20 h-fit border shadow-xl"
      >
        <Stepper steps={steps} currentStep={currentStep} />
        {displayStep()}
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </form>
    </div>
  );
};

export default TripForm;
