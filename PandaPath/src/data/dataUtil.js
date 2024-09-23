export const getDataToInsert = (formData) => {
  return {
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
};
