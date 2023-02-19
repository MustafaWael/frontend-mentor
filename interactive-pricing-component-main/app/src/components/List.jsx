import { ReactComponent as CheckIcon } from "../assets/images/icon-check.svg";

export default function List({ items = [] }) {
  return (
    <ul className="flex flex-col gap-y-2.5">
      {items.map(({ name, id }) => (
        <ListItem key={id}>{name}</ListItem>
      ))}
    </ul>
  );
}

export const ListItem = ({ children }) => {
  return (
    <li className="flex items-center gap-x-3 justify-center sm:justify-start">
      <CheckIcon />
      <p className="font-Manrope text-xs font-bold text-grayish_blue">{children}</p>
    </li>
  );
};
