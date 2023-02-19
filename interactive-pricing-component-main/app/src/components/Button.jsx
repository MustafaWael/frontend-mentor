export default function Button({ children }) {
  return (
    <button className="w-fit text-xs bg-dark_desaturated_blue text-light_grayish_blue_toggle hover:text-white transition-colors font-Manrope py-3 px-12 rounded-full">
      {children}
    </button>
  );
}
