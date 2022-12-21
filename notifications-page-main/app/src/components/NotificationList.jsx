import { useState } from "react";
import { Notification } from "./Notification";
import { NotificationHeader } from "./NotificationHeader";

export const NotificationList = ({ notifications }) => {
  const [notificationList, setNotificationList] = useState(() => notifications);

  return (
    <article className="bg-White rounded-lg shadow-[0_0_30px_-3px_hsl(211,68%,94%)] p-4 max-w-[620px]">
      <NotificationHeader
        notificationList={notificationList}
        setNotificationList={setNotificationList}
      />

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
