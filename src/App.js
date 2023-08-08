import { useState } from "react";
import Footer from "./Footer";
import MainScreen from "./Screens/MainScreen";

function App() {
  const [navigationPage, setNavigationPage] = useState(1);

  const navigationHandle = (val) => {
    setNavigationPage(val);
  };

  return (
    <div className="app-screen">
      <MainScreen navigationPage={navigationPage} />

      <Footer
        navigationPage={navigationPage}
        navigationHandle={navigationHandle}
      />
    </div>
  );
}

export default App;
