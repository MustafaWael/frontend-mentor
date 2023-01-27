import { plans, addOns } from "../../constants";

export const FinishUp = ({ getValues, goTo }) => {
  const plan = plans.find((plan) => plan.name === getValues("plan.name"));
  const isYearly = getValues("plan.isYearly");
  const selectedAddOns = addOns.filter((addOn) =>
    getValues("addOns").includes(addOn.title)
  );

  let total = 0;

  if (isYearly)
    total =
      plan.price.yearly +
      selectedAddOns.reduce((a, addOn) => addOn.price.yearly + a, 0);
  else
    total =
      plan.price.monthly +
      selectedAddOns.reduce((a, addOn) => addOn.price.monthly + a, 0);

  return (
    <>
      <h1 className="font-Ubuntu font-bold text-2xl text-marine_blue">
        Finishing up
      </h1>
      <p className="font-Ubuntu text-cool_gray w-full max-w-[300px] mt-2">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-alabaster rounded-xl px-5 py-5 mt-5">
        <div
          className={`flex justify-between items-center ${
            selectedAddOns.length ? "border-b border-b-cool_gray pb-4" : ""
          }`}
        >
          <div className="flex flex-col">
            <span className="font-Ubuntu font-bold text-marine_blue">
              {plan.name} ({isYearly ? "Yearly" : "Monthly"})
            </span>
            <span
              className="font-Ubuntu text-cool_gray underline cursor-pointer w-fit"
              onClick={() => goTo(1)}
            >
              Change
            </span>
          </div>
          <div className="font-Ubuntu font-bold text-marine_blue">
            ${isYearly ? `${plan.price.yearly}/yr` : `${plan.price.monthly}/mo`}
          </div>
        </div>

        {selectedAddOns.length ? (
          <ul className="flex flex-col gap-y-2 pt-4">
            {selectedAddOns.map((addOn) => (
              <li key={addOn.id} className="flex justify-between items-center">
                <span className="font-Ubuntu text-cool_gray">
                  {addOn.title}
                </span>
                <span className="font-Ubuntu text-marine_blue">
                  +
                  {isYearly
                    ? `${addOn.price.yearly}/yr`
                    : `${addOn.price.monthly}/mo`}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="flex justify-between items-center px-5 py-3 mt-4">
        <span className="font-Ubuntu text-cool_gray">Total (per year)</span>
        <span className="font-Ubuntu font-bold text-purplish_blue">
          ${total}/{isYearly ? "yr" : "mo"}
        </span>
      </div>
    </>
  );
};
