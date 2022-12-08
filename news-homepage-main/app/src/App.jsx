import { useState } from "react";
import { MobileMenu } from "./Components/MobileMenu";
import { Navigation } from "./Components/Navigation";

function App() {
  const [isMobileMenuOpend, setIsMobileMenuOpend] = useState(false);
  return (
    <>
      <Navigation setIsMobileMenuOpend={setIsMobileMenuOpend} />
      <MobileMenu
        isMobileMenuOpend={isMobileMenuOpend}
        setIsMobileMenuOpend={setIsMobileMenuOpend}
      />
    </>
  );
}

export default App;
