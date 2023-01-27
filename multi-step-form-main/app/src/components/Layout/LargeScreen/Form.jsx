export const Form = ({
  Step,
  register,
  errors,
  handleSubmit,
  onSubmit,
  handleIsYearly,
  isYearly,
  watch,
  getValues,
  goTo,
}) => {
  return (
    <>
      <form id="main" onSubmit={handleSubmit(onSubmit)}>
        <Step
          register={register}
          errors={errors}
          handleIsYearly={handleIsYearly}
          isYearly={isYearly}
          watch={watch}
          getValues={getValues}
          goTo={goTo}
        />
      </form>
    </>
  );
};
