import { navigationLinks } from "../constants";
import { ReactComponent as IconMenuClose } from "../assets/images/icon-menu-close.svg";

export const MobileMenu = ({ setIsMobileMenuOpened, isMobileMenuOpened }) => {
  return (
    isMobileMenuOpened && (
      <>
        <aside className="bg-off_white absolute z-20 top-0 right-0 py-8 px-6 flex flex-col items-end w-[70vw] max-w-[400px] min-h-[100vh] md:hidden">
          <button className="mb-20" onClick={() => setIsMobileMenuOpened(false)}>
            <IconMenuClose />
          </button>

          <ul className="w-full flex flex-col gap-y-7 items-start">
            {navigationLinks.map((link) => (
              <MobileMenuItem
                key={link.id}
                text={link.text}
                href={`#${link.text.toLocaleLowerCase()}`}
              />
            ))}
          </ul>
        </aside>
        <div className="absolute inset-0 w-[100vw] h-[100vh] bg-dark_grayish_blue z-10 opacity-30 md:hidden"></div>
      </>
    )
  );
};

const MobileMenuItem = ({ href, text }) => {
  return (
    <li className="font-Inter text-xl">
      <a href={href}>{text}</a>
    </li>
  );
};
