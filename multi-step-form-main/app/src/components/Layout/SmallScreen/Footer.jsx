export const Footer = ({ back, currentStep, isLastStep, goTo, reset }) => {
  const handleFinish = (e) => {
    e.preventDefault();
    reset();
    goTo(0);
  };

  return (
    <div className="w-full bg-white p-4 lg:p-0 mt-auto flex justify-between">
      {currentStep !== 0 && currentStep !== 4 && (
        <button
          onClick={back}
          className="font-Ubuntu text-cool_gray cursor-pointer"
        >
          Go Back
        </button>
      )}
      <button
        form="main"
        className="font-Ubuntu text-white bg-marine_blue py-2 px-3 rounded cursor-pointer ml-auto"
        onClick={isLastStep ? handleFinish : null}
      >
        {currentStep === 3 ? "Confirm" : isLastStep ? "Finish" : "Next Step"}
      </button>
    </div>
  );
};
