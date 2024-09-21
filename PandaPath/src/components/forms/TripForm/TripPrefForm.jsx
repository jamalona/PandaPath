
import Traveldeets from "./traveldeets";
import BudgetSlider from "./budget";
import ChoiceForm from "./choiceForm";



const TripPref = () => {


  return (
    <>
      <div className="w-full bg-white">
        <form className="w-8/12 mx-auto  mt-20 pt-10 pb-20 h-fit border shadow-xl">
          <ChoiceForm />
          <BudgetSlider />
          <Traveldeets />
        </form>
      </div>
    </>
  );
};


export default TripPref


