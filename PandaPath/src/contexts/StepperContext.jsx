// StepperContext.jsx
import React, { createContext, useContext, useState } from 'react';

const StepperContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useStepperContext = () => {
  return useContext(StepperContext);
};

export const StepperProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    tripPreferences: {
      regionToVisit: [],
      travelStyle: "",
      interest: [],
    },
    groupInfo: {
      budget: 0,
      startDate: "",
      tripLength: 12,
      adults: 2,
      children: 2,
      infants: 0,
    },
    contactDetails: {
      firstName: "john",
      lastName: "carter",
      email: "",
      countryCode: "United Kingdom",
      phoneNumber: "07929843234",
      additionalInfo: ` We’ll be traveling with our two kids, ages 7 and 10, so we’re looking for family-friendly activities throughout the trip. We’re hoping to visit major attractions but want to make sure there are places or activities that the kids will enjoy too. We’d prefer a relaxed pace with some downtime built in.` 
    },
  });

  return (
    <StepperContext.Provider value={{ formData, setFormData }}>
      {children}
    </StepperContext.Provider>
  );
};
