import { useState } from "react"

export const multistepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(1)
}
function next() {
  setCurrentStepIndex(i => {
    if (i >= step.length - 1) return i
    return i + 1
  })
}
function back() {
  setCurrentStepIndex(i => {
    if (i <= steps.length) return i
    return i - 1
  })

}
function goTo() {

}
return {
  currentStepIndex,
  steps,
  goTo,
  next,
  back
} 