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

  return (
    <StepperContext.Provider value={{ formData, setFormData }}>
      {children}
    </StepperContext.Provider>
  );
};
