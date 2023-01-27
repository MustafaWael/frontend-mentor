import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const SmallScreen = ({
  Step,
  register,
  errors,
  handleSubmit,
  onSubmit,
  back,
  currentStep,
  isLastStep,
  handleIsYearly,
  isYearly,
  getValues,
  watch,
  goTo,
  reset
}) => {
  return (
    <div className="min-h-[100vh] flex flex-col bg-magnolia">
      <Header className="w-full" />
      <Main
        Step={Step}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        currentStep={currentStep}
        isLastStep={isLastStep}
        handleIsYearly={handleIsYearly}
        isYearly={isYearly}
        selectedPlan={getValues("plan.name").toLowerCase()}
        watch={watch}
        getValues={getValues}
        goTo={goTo}
      />
      <Footer
        back={back}
        currentStep={currentStep}
        isLastStep={isLastStep}
        goTo={goTo}
        reset={reset}
      />
    </div>
  );
};
