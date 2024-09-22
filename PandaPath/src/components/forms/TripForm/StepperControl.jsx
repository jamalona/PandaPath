const StepperControl = ({handleClick, currentStep, steps}) =>{
  return (
    <div className="flex justify-around">

    {/*back button*/ }
    <button 
    onClick={()=>handleClick()}
    className={`bg-white border border-black py-2 px-4 rounded-xl 
    cursor-pointer text-2xl hover:bg-black hover:text-white 
    ${currentStep ==1? "opacity-0 cursor-not-allowed" : ""}`} >Previous step</button>

    {/*next button */}
    <button 
    onClick={()=>handleClick("next")}
    className="bg-white border border-black py-2 px-4 text-2xl rounded-xl hover:bg-black hover:text-white ">
      {currentStep === steps.length? "Send request": "Next step"}
      </button>

    </div>
  )
}

export default StepperControl