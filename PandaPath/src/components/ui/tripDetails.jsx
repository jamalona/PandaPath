import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient'; 

const TripDetails = () => {

  return (
    <>
      <div className="mt-28 text-center text-2xl">No booking requests made.</div>

      <h2 className="text-3xl font-bold my-8 text-center">Your Request Details</h2>

      <div className="flex flex-wrap justify-center gap-6">
       
        <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm w-full">
          <h3 className="text-xl font-semibold mb-4">Trip Details</h3>
          <ul className="space-y-2">
            <li><strong>Region to Visit:</strong> </li>
            <li><strong>Travel Style:</strong> </li>
            <li><strong>Interests:</strong> </li>
            <li><strong>Budget:</strong> </li>
            <li><strong>Date to Travel:</strong> </li>
            <li><strong>Trip Length:</strong> </li>
          </ul>
        </div>

       
        <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm w-full">
          <h3 className="text-xl font-semibold mb-4">Group Information</h3>
          <ul className="space-y-2">
            <li><strong>Adults:</strong> </li>
            <li><strong>Children:</strong> </li>
            <li><strong>Infants:</strong> </li>
          </ul>
        </div>

        
        <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm w-full">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-2">
            <li><strong>Full Name:</strong></li>
            <li><strong>Email:</strong> </li>
            <li><strong>Phone:</strong> </li>
          </ul>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm w-full">
          <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default TripDetails;
