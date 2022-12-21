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
    <div className="flex justify-between items-center font-Plus-Jakarta mb-8">
      <div className="flex gap-x-2 items-center">
        <p className="text-very_dark_blue font-bolder text-2xl">
          Notifications
        </p>
        <span className="inline-block bg-blue text-White px-[10px] py-[1px] rounded-md text-md font-bold h-fit">
          {notMarkedCount}
        </span>
      </div>
      <button
        className="text-md font-bold text-dark_grayish_blue hover:text-blue"
        onClick={markAllAsRead}
        disabled={!notMarkedCount}
      >
        Mark all as read
      </button>
    </div>
  );
};
