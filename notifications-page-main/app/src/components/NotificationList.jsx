import { useState } from "react";
import { Notification } from "./Notification";

export const NotificationList = ({ notifications }) => {
  const [notificationList, setNotificationList] = useState(() => notifications);
  let notMarkedCount = notificationList.filter(
    (item) => !item.hasBeenRead
  ).length;

  const markAllAsRead = () => {
    setNotificationList((current) =>
      current.map((item) => ({ ...item, hasBeenRead: true }))
    );
  };

  return (
    <article className="bg-White rounded-lg shadow-[0_0_30px_-3px_hsl(211,68%,94%)] p-4 max-w-[620px]">
      <div className="flex justify-between items-center font-Plus-Jakarta mb-5">
        <div className="flex gap-x-2 items-center">
          <p className="text-very_dark_blue font-bolder text-md">
            Notifications
          </p>
          <span className="bg-blue text-White px-[9px] py-[2px] rounded text-xs font-bold h-fit">
            {notMarkedCount}
          </span>
        </div>
        <button className="text-xs font-bold text-dark_grayish_blue hover:text-blue" onClick={markAllAsRead} disabled={!notMarkedCount}>
          Mark all as read
        </button>
      </div>
      
      <ul className="flex flex-col gap-3">
        {notificationList.map(({ id, user, action, date, hasBeenRead }) => {
          return (
            <Notification
              key={id}
              user={user}
              text={action?.text}
              link={action?.link}
              message={action?.message}
              date={date}
              hasBeenRead={hasBeenRead}
              image={action?.image}
              type={action.type}
            />
          );
        })}
      </ul>
    </article>
  );
};
