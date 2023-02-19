import { ReactComponent as Pattern } from "../assets/images/pattern-circles.svg";
import { ReactComponent as BgPattern } from "../assets/images/bg-pattern.svg";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <BgPattern className="max-w-full origin-left md:scale-x-[1.06]" />
      <Pattern className="absolute top-[68px] left-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 text-center top-[106px]">
        <h1 className="font-Manrope font-bold text-xl md:text-3xl text-dark_desaturated_blue">
          Simple, traffic-based pricing
        </h1>
        <p className="font-Manrope text-[0.92rem] text-grayish_blue mt-3 mx-auto w-[214px] md:w-auto">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
    </header>
  );
}
