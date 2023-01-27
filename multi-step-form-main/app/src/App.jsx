import { useForm } from "react-hook-form";

import { PersonalInfo } from "./components/Steps/PersonalInfo";
import { Plans } from "./components/Steps/Plans";
import { AddOns } from "./components/Steps/AddOns";
import { FinishUp } from "./components/Steps/FinishUp";
import { Thanks } from "./components/Steps/Thanks";
import { SmallScreen } from "./components/Layout/SmallScreen/SmallScreen";
import { LargeScreen } from "./components/Layout/LargeScreen/LargeScreen";

import { useMultiStepForm } from "./hooks/useMultiStepForm";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  // Hooks
  const {
    step: Step,
    next,
    back,
    goTo,
    currentStep,
    isLastStep,
  } = useMultiStepForm(stepsList);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  
  const isLarge = useMediaQuery("(min-width: 1024px)");

  // Form state getter
  const isYearly = getValues("plan.isYearly");

  // Handlers
  const handleIsYearly = () => {
    setValue("plan.isYearly", !isYearly, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const onSubmit = () => {
    next();
  };

  const props = {
    register,
    setValue,
    getValues,
    handleIsYearly,
    handleSubmit,
    onSubmit,
    reset,
    next,
    back,
    watch,
    goTo,
    errors,
    isYearly,
    Step,
    currentStep,
    isLastStep,
  };

  return (
    <>{isLarge ? <LargeScreen {...props} /> : <SmallScreen {...props} />}</>
  );
}

export default App;

const initialData = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    name: "Arcade",
    isYearly: false,
  },
  addOns: [],
};

const stepsList = [PersonalInfo, Plans, AddOns, FinishUp, Thanks];
