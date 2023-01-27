import { useState } from "react";

export const useMultiStepForm = (stepsList) => {
  const [steps, setSteps] = useState(() => stepsList);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((prev) => {
      if (prev < steps.length - 1) return prev + 1;
      return prev;
    });
  };

  const back = () => {
    setCurrentStep((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };

  const goTo = (index) => {
    setCurrentStep(index);
  };

  return {
    next,
    back,
    setStepsList: setSteps,
    goTo,
    step: steps[currentStep],
    isLastStep: currentStep === steps.length - 1,
    isFirstStep: currentStep === 0,
    currentStep,
  };
};
