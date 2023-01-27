import { ReactComponent as ThanksIcon } from "../../assets/images/icon-thank-you.svg";

export const Thanks = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-y-3 h-[320px] lg:h-[430px]">
      <ThanksIcon className="w-[45px] lg:w-[80px] mb-2 lg:mb-4" />
      <h1 className="font-Ubuntu font-bold text-2xl text-marine_blue">
        Thank you!
      </h1>
      <p className="font-Ubuntu text-cool_gray w-full">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
