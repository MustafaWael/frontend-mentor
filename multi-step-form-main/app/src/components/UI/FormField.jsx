export const FormField = ({
  label = "",
  placeholder = "",
  error = {},
  register = () => {},
  ...props
}) => {
  return (
    <div>
      <div className="flex justify-between mb-1 items-center">
        <label
          className="font-Ubuntu text-marine_blue"
          htmlFor={label.toLowerCase()}
        >
          {label}
        </label>
        <span className="font-Ubuntu font-medium text-strawberry_red">
          {error && error?.message}
        </span>
      </div>
      <input
        className={`w-full outline-none border ${
          error?.type
            ? "border-strawberry_red focus:border-strawberry_red"
            : "border-pastel_blue focus:border-purplish_blue"
        } rounded-md py-2.5 px-4 placeholder:text-cool_gray font-Ubuntu font-medium text-marine_blue`}
        name={label.toLowerCase()}
        placeholder={placeholder}
        {...register}
        {...props}
      />
    </div>
  );
};
