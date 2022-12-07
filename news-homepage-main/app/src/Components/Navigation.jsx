import { navigationLinks } from "../constants";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as HamburgerMenu } from "../assets/images/icon-menu.svg";

export const Navigation = () => {
  return (
    <nav className="px-4 py-8 flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <NavigationLinks />
      <HamburgerMenu className="block md:hidden" />
    </nav>
  );
};

const NavigationLinks = () => {
  return (
    <ul className="hidden gap-8 md:flex">
      {navigationLinks.map((link) => (
        <li key={link.id}>
          <a
            className="font-inter text-dark_grayish_blue"
            href={`#${link.text.toLocaleLowerCase()}`}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
