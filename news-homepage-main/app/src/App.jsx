import { useState } from "react";
import { MobileMenu } from "./Components/MobileMenu";
import { Navigation } from "./Components/Navigation";

function App() {
  const [isMobileMenuOpend, setIsMobileMenuOpend] = useState(false);

  const mobileMenuHandler = (val) => {
    val
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "auto");
    setIsMobileMenuOpend(val);
  };

  return (
    <>
      <Navigation setIsMobileMenuOpend={mobileMenuHandler} />
      <MobileMenu
        isMobileMenuOpend={isMobileMenuOpend}
        setIsMobileMenuOpend={mobileMenuHandler}
      />
    </>
  );
}

export default App;
