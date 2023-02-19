export default function Card({ children }) {
  return (
    <div className="overflow-hidden bg-white mx-4 py-12 rounded-xl -translate-y-[11.4rem] sm:w-[540px] sm:mx-auto sm:px-12 shadow-[0px_18px_22px_-4px_rgb(0,0,0,.05)]">
      {children}
    </div>
  );
}
