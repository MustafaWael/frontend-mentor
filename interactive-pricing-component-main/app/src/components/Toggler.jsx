export default function Toggler({ value, ...props }) {
  return (
    <input
      className={`appearance-none w-[38px] h-5 bg-light_grayish_blue_toggle hover:bg-soft_cyan transition-colors rounded-full relative after:absolute after:top-1/2 after:left:0 after:w-[12px] after:h-[12px] after:bg-white after:rounded-full after:transition-transform after:will-change-transform after:-translate-y-1/2 cursor-pointer ${
        value
          ? "after:translate-x-[calc(38px-15px)] bg-strong_cyan"
          : "after:translate-x-[3px]"
      }`}
      type="checkbox"
      {...props}
    />
  );
}
