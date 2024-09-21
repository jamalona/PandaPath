import TripPref from "../components/forms/TripForm/TripPrefForm"
import ContactDetails from "../components/forms/TripForm/ContactDetails"
import Stepper from "../components/forms/TripForm/Stepper"
import StepperControl from "../components/forms/TripForm/StepperControl"
import GroupInfo from "../components/forms/TripForm/groupInfo"
import { useState } from "react"


const TripForm = () => {
  
  const [currentStep, setCurrentStep] = useState(1)

  function next() {
    setCurrentStep(i => {
      if (i >= step.length - 1) return i
      return i + 1
    })
  }
  function back() {
    setCurrentStep(i => {
      if (i <= steps.length) return i
      return i - 1
    })
  }
  const steps =[
    "Trip preferences",
    "Group information",
    "Final details"
  ]
const displayStep = () =>{
  switch(step) {
    case 1:
      return <TripPref />
      
    case 2:
      return <GroupInfo />
    
    case 3:
      return <ContactDetails />
      default:
     
  }
}

const handleClick = (direction) => {
  let newStep = currentStep

  direction === "next"? newStep++ : newStep--

  newStep> 0 && newStep<= steps.length && setCurrentStep(newStep)

}

  return (
    <>
      <div className="w-full bg-white">
        <form className="w-8/12 mx-auto  mt-20 pt-10 pb-20 h-fit border shadow-xl">
          <Stepper 
          steps={steps}  
          currentStep={currentStep}
          />
          <TripPref />
          <GroupInfo/>
          <ContactDetails/>
          <StepperControl 
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          />
        </form>
      </div>
    </>
  )
}

export default TripForm