import { useState } from 'react';

const BudgetSlider = () => {

  const [budget, setBudget] = useState(4000);

 
  const minBudget = 2000;
  const maxBudget = 12000;

  return (
    <div className="mb-20 ml-auto mr-auto w-4/5 pl-10 pr-10 border-2 pt-5">
      <h3 className="text-2xl mb-4">What are you looking to spend on your trip?</h3>

      {/* Budget range label */}
      <div className="flex justify-between text-lg mb-4">
        <span>£2,000</span>
        <span>More than £12,000</span>
      </div>

      {/* Range input slider */}
      <div className="relative w-full">
        <input
          type="range"
          min={minBudget}
          max={maxBudget}
          step={500}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
        />

        {/* Dynamically display selected budget */}
        <div className="mt-4 text-xl text-center">
          £{budget.toLocaleString()} - £{(budget + 500).toLocaleString()} per person
        </div>
      </div>
    </div>
  );
};

export default BudgetSlider;
