import { Footer } from "../SmallScreen/Footer";
import { Aside } from "./Aside";
import { Form } from "./Form";

export const LargeScreen = ({
  Step,
  register,
  errors,
  handleSubmit,
  onSubmit,
  handleIsYearly,
  isYearly,
  watch,
  getValues,
  currentStep,
  isLastStep,
  goTo,
  back,
  reset,
}) => {
  return (
    <div className="w-full min-h-screen bg-magnolia flex justify-center items-center">
      <div className="w-[933px] min-h-[568px] bg-white px-1 py-2 rounded-xl flex">
        <Aside currentStep={currentStep} />
        <div className="px-24 py-9 w-full flex flex-col justify-center">
          <Form
            Step={Step}
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            handleIsYearly={handleIsYearly}
            isYearly={isYearly}
            selectedPlan={getValues("plan.name").toLowerCase()}
            watch={watch}
            getValues={getValues}
            goTo={goTo}
          />

          <div className="mt-auto">
            <Footer
              back={back}
              currentStep={currentStep}
              isLastStep={isLastStep}
              goTo={goTo}
              reset={reset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
