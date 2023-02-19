import { useState } from "react";
import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";
import Divider from "./Divider";
import List from "./List";
import PageViews from "./PageViews";
import Price from "./Price";
import Slider from "./Slider";
import Toggler from "./Toggler";
import { features, plans } from "../constants";
import { getClosestPlan } from "../utils";
import useMediaQuery from "../hooks/useMediaQuery";

export default function InteractivePricingCard({}) {
  const [plan, setPlan] = useState(plans.at(0));
  const [isYearly, setIsYearly] = useState(false);
  const isTablet = useMediaQuery("(min-width: 640px)");

  const handleChangePrice = (price) => {
    // Get Closest plan price compared to price param
    const closest = getClosestPlan(plans, price);
    setPlan(closest); // Set plan state
  };

  const handleToggle = () => {
    setIsYearly((v) => !v);
  };

  const discount = (price, percent) => {
    return price * percent;
  };

  return (
    <Card>
      <div className="flex flex-col items-center gap-y-12">
        <div className="flex gap-y-6 flex-col items-center justify-between w-full sm:flex-row">
          <PageViews pageViews={plan.views} />
          {!isTablet ? (
            <div className="w-full px-6">
              <Slider
                min={plans.at(0).price}
                max={plans.at(-1).price}
                defaultValue={plan.price}
                onChangeValue={handleChangePrice}
              />
            </div>
          ) : null}
          <Price
            price={isYearly ? discount(plan.price, 0.25) : plan.price}
            isYearly={isYearly}
          />
        </div>

        {isTablet ? (
          <Slider
            min={plans.at(0).price}
            max={plans.at(-1).price}
            defaultValue={plan.price}
            onChangeValue={handleChangePrice}
          />
        ) : null}

        <div className="flex justify-center gap-4 items-center w-full px-4 sm:ml-24">
          <span className="font-Manrope text-[11px] sm:text-xs font-bold text-grayish_blue">
            Monthly Billing
          </span>
          <Toggler
            onChange={handleToggle}
            defaultChecked={isYearly}
            value={isYearly}
          />
          <span className="font-Manrope text-[11px] sm:text-xs font-bold text-grayish_blue">
            Yearly Billing
          </span>
          <Badge>{isTablet ? "25% discount" : "-25%"}</Badge>
        </div>
        
        <Divider />

        <div className="w-full flex flex-col items-center gap-y-10 sm:flex-row sm:justify-between sm:-mt-4">
          <List items={features} />

          <div className="flex justify-center order-6">
            <Button>Start my trial</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
