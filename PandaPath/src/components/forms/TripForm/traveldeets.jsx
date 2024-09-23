import { useState } from 'react';

const Traveldeets = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      groupInfo: {
        ...prevData.groupInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div className="w-4/5 mx-auto pb-10 pl-10 pr-10 border-2 pt-5 rounded-xl mb-10 shadow-xl">
      {/* Travel Date */}
      <div className="mb-6">
        <label className="block text-2xl font-semibold mb-2">When do you want to travel?</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate || ""}
          onChange={handleInputChange}
          className="w-full border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <p className="text-sm text-gray-500 mt-2">
          Trips to China need to be planned at least 2 weeks before departure, as accommodation and experiences book up quickly.
        </p>
      </div>

      {/* Desired Trip Length */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Desired trip length (days)</label>
        <input
          type="number"
          name="tripLength"
          value={formData.tripLength || 12}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          min="5"
          max="28"
          required
        />
        <p className="text-sm text-gray-500 mt-2">On average, our customers travel to China for 12 days.</p>
      </div>

      {/* Number of Travelers */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-4">Who will be traveling?</label>

        {/* Adults */}
        <div className="mb-4">
          <label className="block mb-1">Adults (Above 12)</label>
          <input
            type="number"
            name="adults"
            value={formData.adults || 0}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            min="1"
            required
          />
        </div>

        {/* Children */}
        <div className="mb-4">
          <label className="block mb-1">Children (Ages 2-12)</label>
          <input
            type="number"
            name="children"
            value={formData.children || 0}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            min="0"
          />
        </div>

        {/* Infants */}
        <div className="mb-4">
          <label className="block mb-1">Infants (Under 2)</label>
          <input
            type="number"
            name="infants"
            value={formData.infants || 0}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Traveldeets;
