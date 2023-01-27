import clsx from "clsx";

export const StepIndicator = ({ active = false, number = 1 }) => {
  return (
    <span
      className={clsx(
        "flex justify-center items-center w-8 h-8 rounded-full border border-light_blue font-Ubuntu font-medium",
        active ? "bg-light_blue text-marine_blue" : "text-white"
      )}
    >
      {number}
    </span>
  );
};
