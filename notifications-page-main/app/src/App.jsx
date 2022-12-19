import { NotificationList } from "./components/NotificationList";
import { notifications } from "./constants";

function App() {
  return (
    <main className="bg-very_light_grayish_blue md:py-14 mx-auto flex flex-col justify-center items-center min-h-screen">
      <NotificationList notifications={notifications} />
    </main>
  );
}

export default App;
