import React, { useState, useEffect } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
      }
      count++;
    }
    
    return newSteps;
  };

  useEffect(() => {
    // Initialize the step state
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    const current = updateStep(currentStep - 1, stepsState);
    setNewStep(current);

  }, [currentStep, steps]);  // Make sure steps are added as a dependency to reinitialize if changed

  const displaySteps = newStep.map((step, index) => {
    return (
  
      
      <div key={index} className="w-full">
        <div className="relative flex flex-col items-center ">
          <div
            className={`rounded-full border-2 border-black h-12 w-12 flex justify-center items-center py-3 ${step.selected ? "bg-slate-500 border-none text-white" : ""
              }`}
          >
            {/* Display number */}
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted ? "text-gray-800" : "text-gray-500"
              }`}
          >
            {/* Display description */}
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-slate-500" : ""
            }`}
        >
          {/* Display line */}
        </div>
      </div>
    );
  }
 
  );

  return (
    <>
   
    {/* <div className="w-8/12 h-32 bg-baccol relative shadow-2xl mx-auto mb-20"><h2>Let's create your dream tour to China!</h2>
<p>Hi, I’m Hayley, your personal contact at Panda Path! In the next 3 minutes, I'll guide you through the form to craft your perfect journey through China.</p>
    <div className="w-4 h-4 bg-baccol  absolute top-5 -left-2 rotate-45 shadow-2xl"/>
    </div> */}
  
  <div className="flex w-3/5 justify-between items-center mx-auto">{displaySteps}</div>
  </>

);
};

export default Stepper;
