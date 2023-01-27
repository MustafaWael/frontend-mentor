import { getImageUrl } from "../../../utils";

export const Header = ({ ...props }) => {
  return (
    <div {...props}>
      <img
        className="w-full max-h-[160px] h-[160px] object-cover"
        src={getImageUrl("bg-sidebar-mobile.svg")}
        alt="colorful header image"
      />
    </div>
  );
};
