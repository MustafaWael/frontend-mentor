import { regEx } from "../../constants";
import { FormField } from "../UI/FormField";

export const PersonalInfo = ({ register, errors }) => {
  return (
    <>
      <h1 className="font-Ubuntu font-bold text-2xl text-marine_blue">
        Personal info
      </h1>
      <p className="font-Ubuntu text-cool_gray w-full max-w-[300px] mt-2">
        Please provide your name, email address, and phone number.
      </p>

      <ul className="flex flex-col gap-4 mt-5">
        <FormField
          label="Name"
          placeholder="e.g. Stephen King"
          register={register("personalInfo.name", {
            required: { value: true, message: "This field is required" },
          })}
          error={{
            type: errors?.personalInfo?.name,
            message: errors?.personalInfo?.name?.message,
          }}
        />
        <FormField
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          register={register("personalInfo.email", {
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value: regEx.email,
              message: "Email not valid",
            },
          })}
          error={{
            type: errors?.personalInfo?.email,
            message: errors?.personalInfo?.email?.message,
          }}
        />
        <FormField
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          register={register("personalInfo.phone", {
            required: { value: true, message: "This field is required" },
            maxLength: { value: 11, message: "should be less than 12" },
            pattern: {
              value: regEx.phone,
              message: "Not valid",
            },
          })}
          type="number"
          error={{
            type: errors?.personalInfo?.phone,
            message: errors?.personalInfo?.phone?.message,
          }}
        />
      </ul>
    </>
  );
};
