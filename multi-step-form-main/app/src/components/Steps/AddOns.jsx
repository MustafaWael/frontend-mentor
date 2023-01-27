import { addOns } from "../../constants";
import { ReactComponent as CheckmarkIcon } from "../../assets/images/icon-checkmark.svg";

export const AddOns = ({ register, isYearly, watch }) => {
  const selectedAddOns = watch("addOns");

  return (
    <>
      <h1 className="font-Ubuntu font-bold text-2xl text-marine_blue">
        Pick add-ons
      </h1>
      <p className="font-Ubuntu text-cool_gray w-full max-w-[300px] mt-2">
        Add-ons help enhance your gaming experience.
      </p>
      <ul className="flex flex-col gap-y-3 mt-5">
        {addOns.map(({ id, title, subtitle, price }) => (
          <li
            className={`w-full border cursor-pointer relative rounded-md ${
              selectedAddOns.includes(title)
                ? "bg-magnolia border-purplish_blue"
                : "bg-white border-pastel_blue"
            }`}
            key={id}
          >
            <label
              className="flex items-center gap-x-5 cursor-pointer p-4"
              htmlFor={title}
            >
              <div className="m-0 p-0 min-w-[1.75rem] h-7 relative">
                <input
                  className={`cursor-pointer appearance-none w-full h-full border rounded-md ${
                    selectedAddOns.includes(title)
                      ? "bg-purplish_blue border-marine_blue"
                      : "border-pastel_blue"
                  }`}
                  id={title}
                  name="addOn"
                  type="checkbox"
                  value={title}
                  {...register("addOns")}
                  autoFocus={id === 1}
                />
                <CheckmarkIcon className="absolute inset-0 w-4 h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>

              <div>
                <h2 className="font-Ubuntu font-bold text-marine_blue">
                  {title}
                </h2>
                <p className="font-Ubuntu text-cool_gray">{subtitle}</p>
              </div>

              <span className="font-Ubuntu ml-auto text-purplish_blue">
                +${isYearly ? `${price.yearly}/yr` : `${price.monthly}/mo`}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
