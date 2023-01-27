import { plans } from "../../constants";

import { ReactComponent as ArcadeIcon } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../assets/images/icon-pro.svg";

const plansImages = [ArcadeIcon, AdvancedIcon, ProIcon];

const plansWithImages = plans.map((plan, i) => ({
  ...plan,
  image: plansImages[i],
}));

export const Plans = ({ register, handleIsYearly, isYearly, watch }) => {
  const selectedPlan = watch("plan.name");

  return (
    <>
      <h1 className="font-Ubuntu font-bold text-2xl text-marine_blue">
        Select your plan
      </h1>
      <p className="font-Ubuntu text-cool_gray w-full max-w-[300px] mt-2">
        You have the option of monthly or yearly billing.
      </p>
      <ul className="flex flex-col gap-y-3 gap-x-3 mt-5 md:flex-row">
        {plansWithImages.map(({ name, price, id, image: Image }) => {
          return (
            <div
              className={`w-full p-4 ${
                selectedPlan.toLowerCase() === name.toLowerCase()
                  ? "bg-magnolia"
                  : "bg-white"
              } cursor-pointer relative rounded-md`}
              key={id}
            >
              <div className="flex gap-x-3 md:flex-col">
                <Image className="self-start mt-0.5 md:mt-0 md:mb-10" />

                <div>
                  <h2 className="font-Ubuntu font-medium text-marine_blue">
                    {name}
                  </h2>
                  <p className="font-Ubuntu text-cool_gray">
                    {isYearly ? `$${price.yearly}/yr` : `$${price.monthly}/mo`}
                  </p>
                  {isYearly && (
                    <span className="font-Ubuntu font-medium text-sm text-marine_blue">
                      2 months free
                    </span>
                  )}

                  <input
                    type="radio"
                    name="plan"
                    value={name}
                    className={`absolute inset-0 appearance-none pointer-events-auto cursor-pointer rounded-md outline-none border ${
                      selectedPlan.toLowerCase() === name.toLowerCase()
                        ? "border-purplish_blue focus:border-purplish_blue"
                        : "border-pastel_blue focus:border-pastel_blue "
                    }`}
                    {...register("plan.name")}
                    autoFocus={id === 1}
                    checked={selectedPlan.toLowerCase() === name.toLowerCase()}
                  />
                  <label htmlFor="name" aria-hidden hidden>
                    {name}
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </ul>

      <div className="flex items-center justify-center gap-x-7 mt-7 bg-alabaster py-4 rounded-lg">
        <span
          className={`font-Ubuntu font-medium transition-colors ${
            !isYearly ? "text-marine_blue" : "text-cool_gray"
          }`}
        >
          Monthly
        </span>
        <label className=" w-12 h-6 inline-block">
          <input
            className="opacity-0 w-0 h-0"
            type="checkbox"
            defaultChecked={isYearly}
            onClick={handleIsYearly}
          />
          <span
            className={`relative inset-0 w-full h-full bg-marine_blue rounded-full cursor-pointer after:transition-transform after:absolute after:w-4 after:h-4 after:bg-white after:top-1/2 after:-translate-y-1/2 after:rounded-full after:left-1 ${
              isYearly ? "after:translate-x-6" : "after:translate-x-0"
            } inline-block`}
          />
        </label>
        <span
          className={`font-Ubuntu font-medium transition-colors ${
            isYearly ? "text-marine_blue" : "text-cool_gray"
          }`}
        >
          Yearly
        </span>
      </div>
    </>
  );
};
