import { StepIndicator } from "../../UI/StepIndicator";

export const Main = ({
  Step,
  register,
  errors,
  handleSubmit,
  onSubmit,
  currentStep,
  handleIsYearly,
  isYearly,
  watch,
  getValues,
  goTo
}) => {
  return (
    <div className="-mt-[8.2rem] flex flex-col items-center gap-y-8 px-4 mb-5 w-full max-w-3xl mx-auto">
      <ul className="flex gap-x-4 justify-center">
        {Array(4)
          .fill(1)
          .map((_, i) => (
            <li key={i}>
              <StepIndicator
                active={
                  i === (currentStep === 4 ? currentStep - 1 : currentStep)
                }
                number={i + 1}
              />
            </li>
          ))}
      </ul>

      <div className="bg-white rounded-lg w-full p-6 shadow-sm">
        <form id="main" onSubmit={handleSubmit(onSubmit)}>
          <Step
            register={register}
            errors={errors}
            handleIsYearly={handleIsYearly}
            isYearly={isYearly}
            watch={watch}
            getValues={getValues}
            goTo={goTo}
          />
        </form>
      </div>
    </div>
  );
};
