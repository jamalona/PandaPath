import React from "react"
import { useState, useEffect, useRef } from "react"

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([])
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false

        };
        count++
      }
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true

        };
        count++

      }
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false

        };
        count++

      }
    }
    return newSteps

  }

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index == 0 ? true : false,
          selected: index == 0 ? true : false
        }
      )
    );
    stepRef.current = stepsState
    const current = updateStep(currentStep - 1, stepRef.current)
    setNewStep(current)

  }, [steps, currentStep])

  const displaySteps = newStep.map((step, index) => {
    return (
      <div key={index} className="w-full">
        <div className="relative flex  flex-col items-center ">
          <div className={`rounded-full border-2 border-black 
            h-12 w-12 flex justify-center items-center py-3 ${step.selected ? "bg-slate-500 border-none text-white" : ""}`}>
            {/*Display number*/}
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ):(index+1)}
          </div>
          <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium 
          uppercase ${step.highlighted ? "text-gray-800" : "text-gray-500"}`}>
            {/*Display description*/}{step.description}
          </div>
          </div>
        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out
          ${step.completed ? "border-slate-500": ""}`}>
          {/*Display line*/}
        </div>
        
      </div>
    )
  });

  return (
    <div className="flex w-3/5 justify-between items-center mx-auto">

      {displaySteps}

    </div>
  )
}

export default Stepper