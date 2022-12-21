import { Notification } from "./Notification";

export const NotificationList = ({ notificationList = [] }) => {
  return (
    <section>
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
    </section>
  );
};
