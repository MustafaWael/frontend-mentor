import { useState } from "react";
import { NotificationList } from "./components/NotificationList";
import { NotificationHeader } from "./components/NotificationHeader";
import { notifications } from "./constants";

function App() {
  const [notificationList, setNotificationList] = useState(() => notifications);

  return (
    <main className="bg-very_light_grayish_blue md:py-14 mx-auto flex flex-col justify-center items-center min-h-screen">
      <article className="bg-White rounded-lg shadow-[0_0_30px_-3px_hsl(211,68%,94%)] p-4 max-w-[620px]">
        <NotificationHeader
          notificationList={notificationList}
          setNotificationList={setNotificationList}
        />
        <NotificationList notificationList={notificationList} />
      </article>
    </main>
  );
}

export default App;
