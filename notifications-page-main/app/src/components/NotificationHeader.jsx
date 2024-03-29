export const NotificationHeader = ({
  notificationList,
  setNotificationList,
}) => {
  let notMarkedCount = notificationList.filter(
    (item) => !item.hasBeenRead
  ).length;

  const markAllAsRead = () => {
    setNotificationList((current) =>
      current.map((item) => ({ ...item, hasBeenRead: true }))
    );
  };

  return (
    <header className="flex justify-between items-center font-Plus-Jakarta mb-8">
      <div className="flex gap-x-2 items-center">
        <h1 className="text-very_dark_blue font-bolder sm:text-2xl">
          Notifications
        </h1>
        <span className="inline-block bg-blue text-White px-[10px] py-[1px] rounded-md text-sm sm:text-base font-bold h-fit">
          {notMarkedCount}
        </span>
      </div>
      <button
        className="text-sm sm:text-base font-bold text-dark_grayish_blue hover:text-blue"
        onClick={markAllAsRead}
        disabled={!notMarkedCount}
      >
        Mark all as read
      </button>
    </header>
  );
};
