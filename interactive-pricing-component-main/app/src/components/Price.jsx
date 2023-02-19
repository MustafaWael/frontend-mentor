export default function Price({ price, isYearly }) {
  return (
    <p className="font-Manrope flex items-center gap-x-2">
      <span className="text-3xl sm:text-[2.7rem] font-bold text-dark_desaturated_blue">
        ${(+price).toFixed(2)}
      </span>
      <span className="text-grayish_blue flex items-center">
        <span className="mr-0.5">/</span>
        <span className="text-sm">{isYearly ? "year" : "month"}</span>
      </span>
    </p>
  );
}
