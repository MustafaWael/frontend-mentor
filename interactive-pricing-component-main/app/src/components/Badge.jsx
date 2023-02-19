export default function Badge({ children }) {
  return (
    <span className="font-Manrope font-bold text-[11px] inline-block -mb-0.5 -ml-2 bg-light_grayish_red text-light_red py-0.5 px-1.5 rounded-full">
      {children}
    </span>
  );
}
