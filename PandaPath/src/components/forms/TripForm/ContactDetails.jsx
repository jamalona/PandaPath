// src/components/forms/TripForm/ContactDetails.js
import React from 'react';
import { useStepperContext } from '../../../contexts/StepperContext';

const ContactDetails = () => {
  const { formData, setFormData } = useStepperContext();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      contactDetails: {
        ...prevData.contactDetails,
        [name]: value,
      },
    }));
  };

  return (
    <div className="mb-20 w-4/5 mx-auto px-10 border-2 pt-5 pb-10 rounded-xl shadow-xl mt-20">
      <h3 className="text-4xl mb-10 font-medium text-center">How can we best reach you?</h3>
      <fieldset className="space-y-8 w-10/12 ml-auto mr-auto">

        {/* First Name and Last Name */}
        <div className="flex justify-between space-x-4">
          <label className="w-1/2">
            First Name<br />
            <input
              name="firstName"
              value={formData.contactDetails.firstName}
              onChange={handleChange} 
              type="text"
              className="p-3 border-gray-500 border w-full rounded-md text-lg"
              required
            />
          </label>
          <label className="w-1/2">
            Last Name<br />
            <input
              name="lastName"
              value={formData.contactDetails.lastName}
              onChange={handleChange}  
              type="text"
              className="p-3 border-gray-500 border w-full rounded-md text-lg"
              required
            />
          </label>
        </div>

        {/* Email */}
        <div className="flex">
          <label className="w-full">
            Email<br />
            <input
              id="email"
              name="email"
              value={formData.contactDetails.email}
              onChange={handleChange}
              type="email"
              className="p-3 border-gray-500 border w-full rounded-md text-lg"
              required
            />
          </label>
        </div>

        <div className="flex justify-between space-x-4">
          <label className="w-1/4">
            Country<br />
            <input
              name="countryCode"
              value={formData.contactDetails.countryCode}
              onChange={handleChange}
              type="text"
              className="p-3 border-gray-500 border w-full rounded-md text-lg"
            />
          </label>
          <label className="w-3/4">
            Phone<br />
            <input
              name="phoneNumber"
              value={formData.contactDetails.phoneNumber}
              onChange={handleChange}
              type="text"
              className="p-3 border border-gray-500 w-full rounded-md text-lg"
            />
          </label>
        </div>

        <div className="flex">
          <label htmlFor="additionalInfo" className="w-full">Additional information
            <textarea
              id="additionalinfo"
              name="additionalInfo"
              value={formData.contactDetails.additionalInfo}
              onChange={handleChange}
              className="border-gray-500 border w-full rounded-md min-h-20 p-3"
            />
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default ContactDetails;
