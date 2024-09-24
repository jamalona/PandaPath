import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

const TripDetails = () => {
  const [tripDetails, setTripDetails] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTripDetails = async () => {
      const { data, error } = await supabase
        .from('booking_form')
        .select();
        
      if (error) {
        setError("Could not fetch trip details");
        setTripDetails([]); // Set to empty array in case of an error
        console.log(error);
      } else if (data) {
        console.log('Fetched data:', data);
        setTripDetails(data);
        setError(null);
      }
    };
    fetchTripDetails();
  }, []);

  return (
    <>
      {tripDetails.length === 0 ? (
        <div className="mt-28 text-center text-2xl">No booking requests made.</div>
      ) : (
        <>
          <h2 className="text-3xl font-bold my-8 text-center">Your Request Details</h2>

          <div className="flex flex-wrap w-11/12 mx-auto justify-center gap-6 mb-20">
            {tripDetails.map((detail) => (
              <React.Fragment key={detail.id}>
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm w-full">
                  <h3 className="text-xl font-semibold mb-4">Trip Details</h3>
                  <ul className="space-y-2">
                    <li><strong>Region to Visit:</strong> {detail.region_to_visit}</li>
                    <li><strong>Travel Style:</strong> {detail.travel_style}</li>
                    <li><strong>Interests:</strong> {detail.interest}</li>
                    <li><strong>Budget:</strong> {detail.budget}</li>
                    <li><strong>Date to Travel:</strong> {detail.date_to_travel}</li>
                    <li><strong>Trip Length:</strong> {detail.trip_length}</li>
                  </ul>
                </div>

                <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm w-full">
                  <h3 className="text-xl font-semibold mb-4">Group Information</h3>
                  <ul className="space-y-2">
                    <li><strong>Adults:</strong> {detail.adults}</li>
                    <li><strong>Children:</strong> {detail.children}</li>
                    <li><strong>Infants:</strong> {detail.infants}</li>
                  </ul>
                </div>

                <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm w-full">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <ul className="space-y-2">
                    <li><strong>Full Name:</strong> {detail.first_name}</li>
                    <li><strong>Email:</strong> {detail.email}</li>
                    <li><strong>Phone:</strong> {detail.phone_number}</li>
                  </ul>
                </div>

                <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm w-full">
                  <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                  <p>{detail.additional_information}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default TripDetails;
