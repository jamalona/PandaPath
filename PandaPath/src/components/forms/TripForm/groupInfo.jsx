import BudgetSlider from "./budget";
import Traveldeets from "./traveldeets";

const GroupInfo = ({ formData, setFormData }) => {
  return (
    <>
      <BudgetSlider formData={formData} setFormData={setFormData}/>
      <Traveldeets formData={formData} setFormData={setFormData}/>
    </>
  )
}

export default GroupInfo