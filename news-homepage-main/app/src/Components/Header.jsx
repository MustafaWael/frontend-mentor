import desktopImg from "../assets/images/image-web-3-desktop.jpg";
import mobileImg from "../assets/images/image-web-3-mobile.jpg";
import { news } from "../constants";
import { NewsCard } from "./NewsCard";

export const Header = ({}) => {
  return (
    <>
      <header className="px-4">
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-7">
          <div className="col-span-2">
            <div>
              <picture>
                <source media="(min-width:650px)" srcSet={desktopImg} />
                <img src={mobileImg} alt="image-web-3" />
              </picture>
            </div>

            <div className="mt-4 flex flex-col md:flex-row justify-between gap-x-16">
              <h1 className="font-Inter font-bolder text-4xl md:text-6xl text-very_dark_blue leading-9 md:max-w-[320px]">
                The Bright Future of Web 3.0?
              </h1>
              <div className="mt-4 md:mt-0 w-[350px] flex flex-col justify-between gap-y-5">
                <p className="font-Inter text-md text-dark_grayish_blue">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="px-9 py-4 uppercase text-off_white bg-soft_red font-Inter font-bold text-sm tracking-[5.5px] self-start hover:bg-very_dark_blue">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="mt-14 lg:mt-0 h-full ">
            <NewsCard news={news} />
          </div>
        </div>
      </header>
    </>
  );
};
