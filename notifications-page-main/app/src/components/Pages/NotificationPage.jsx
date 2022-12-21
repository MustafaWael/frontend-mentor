import { useState } from "react";
import { notifications } from "../../constants";
import { NotificationHeader } from "../NotificationHeader";
import { NotificationList } from "../NotificationList";

export const NotificationPage = () => {
  const [notificationList, setNotificationList] = useState(() => notifications);

  return (
    <article className="bg-White rounded-lg shadow-[0_0_30px_-3px_hsl(211,68%,94%)] px-4 py-8 w-full md:w-auto max-w-[620px]">
      <NotificationHeader
        notificationList={notificationList}
        setNotificationList={setNotificationList}
      />
      <NotificationList notificationList={notificationList} />
    </article>
  );
};
