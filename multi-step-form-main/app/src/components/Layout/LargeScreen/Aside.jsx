import { steps } from "../../../constants";
import { StepIndicator } from "../../UI/StepIndicator";
import { ReactComponent as SidebarImage } from "../.././../assets/images/bg-sidebar-desktop.svg";

export const Aside = ({ currentStep = 0 }) => {
  return (
    <div className="relative flex rounded-xl overflow-hidden min-w-[274px] p-8">
      <SidebarImage className="absolute inset-0 w-full h-full pointer-events-none select-none" />

      <ul className="flex flex-col gap-y-5 z-10">
        {steps.map((name, index) => (
          <li key={index} className="flex items-center gap-x-4">
            <StepIndicator active={index === currentStep} number={index + 1} />
            <div>
              <span className="font-Ubuntu text-xs text-pastel_blue">
                STEP {index + 1}
              </span>
              <p className="font-Ubuntu font-medium text-sm text-white -mt-0.5">
                {name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
