export default function PageViews({ pageViews = 0 }) {
  return (
    <p className="font-Manrope sm:-ml-1 text-grayish_blue font-bold text-sm sm:text-base flex gap-x-2 tracking-wider">
      <span>
        {Intl.NumberFormat("en-US", {
          notation: "compact",
          maximumFractionDigits: 1,
        }).format(pageViews)}
      </span>
      <span>PAGEVIEWS</span>
    </p>
  );
}
