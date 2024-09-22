const BudgetSlider = ({ formData, setFormData }) => {
  const minBudget = 1000;
  const maxBudget = 12000;
  const defaultBudget = 3000;

  // Set default budget if not already set
  if (!formData.budget) {
    setFormData((prev) => ({ ...prev, budget: defaultBudget }));
  }

  const handleBudgetChange = (e) => {
    const newBudget = Number(e.target.value);
    setFormData((prev) => ({ ...prev, budget: newBudget }));
  };

  return (
    <div className="mb-20 mt-20 ml-auto mr-auto w-4/5 pl-10 pr-10 border-2 pt-5 shadow-xl rounded-xl">
      <h3 className="text-2xl mb-4">What are you looking to spend on your trip?</h3>

      {/* Budget range label */}
      <div className="flex justify-between mb-4">
        <span>£1,000</span>
        <span>More than £12,000</span>
      </div>

      {/* Range input slider */}
      <div className="relative w-full">
        <input
          type="range"
          min={minBudget}
          max={maxBudget}
          step={500}
          value={formData.budget || defaultBudget}
          onChange={handleBudgetChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />

        {/* Dynamically display selected budget */}
        <div className="mt-4 text-xl text-center pb-4">
          £{(formData.budget || defaultBudget).toLocaleString()} - £{((formData.budget || defaultBudget) + 500).toLocaleString()} per person
        </div>
      </div>
    </div>
  );
};

export default BudgetSlider;
