import { useState } from "react";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { MobileMenu } from "./Components/MobileMenu";
import { Navigation } from "./Components/Navigation";

function App() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const mobileMenuHandler = (val) => {
    val
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "auto");
    setIsMobileMenuOpened(val);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <Navigation setIsMobileMenuOpened={mobileMenuHandler} />
      <MobileMenu
        isMobileMenuOpened={isMobileMenuOpened}
        setIsMobileMenuOpened={mobileMenuHandler}
      />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
