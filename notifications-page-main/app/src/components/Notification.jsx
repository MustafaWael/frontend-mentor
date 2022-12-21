import { Link } from "react-router-dom";

export const Notification = ({
  user,
  message,
  text,
  link,
  date,
  hasBeenRead,
  image,
  type,
}) => {
  return (
    <li
      className={`w-full p-4 ${
        hasBeenRead ? "bg-White" : "bg-very_light_grayish_blue"
      } rounded-xl font-Plus-Jakarta`}
    >
      <div className="flex gap-x-3">
        <div>
          <img
            className="max-w-[40px] max-h-[40px]"
            src={user.image.src}
            alt="user profile image"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <h2 className="inline-block items-center leading-[18px] text-sm ">
              <Link
                className="font-bolder mr-1 hover:text-blue"
                to="/profile/username"
              >
                {user.name}
              </Link>
              <span className="text-dark_grayish_blue mr-1 font-bold">
                {text}
              </span>

              {link ? (
                <Link
                  className={`${
                    type === "group" ? "text-blue" : "text-dark_grayish_blue"
                  } font-bolder mr-1 hover:text-blue`}
                  to="/post"
                >
                  {link}
                </Link>
              ) : null}
              {!hasBeenRead ? (
                <span className="inline-block rounded-full w-[6px] h-[6px] bg-red align-middle"></span>
              ) : null}
            </h2>
            <div className="block text-xs text-grayish_blue font-bold">
              {date}
            </div>
          </div>
          {message ? (
            <Link
              className="border border-light_grayish_blue_2 px-4 py-3 rounded-md hover:bg-light_grayish_blue_1"
              to="/comment"
            >
              <p className="font-bold text-sm text-dark_grayish_blue">
                {message}
              </p>
            </Link>
          ) : null}
        </div>

        {image ? (
          <Link
            className="ml-auto w-fit h-fit border-[2px] border-light_grayish_blue_2/0 hover:border-light_grayish_blue_1 p-[1px] rounded-md"
            to="/post/image"
          >
            <img
              className="block max-w-[40px] max-h-[40px]"
              src={image.src}
              alt="user profile image"
            />
          </Link>
        ) : null}
      </div>
    </li>
  );
};
