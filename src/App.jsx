import Sidebar from "./components/Sidebar/Sidebar";
import RightSection from "./components/RightSection/RightSection";
import BestBarbers from "./components/BestBarbers/BestBarbers";
import BarberService from "./components/BarberService/BarberService";
import FormSection from "./components/FormSection/FormSection";

import PriceList from "./components/PriceList/PriceList";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const handleScrollClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="app-box__first">
        <Sidebar onScrollToSection={handleScrollClick} />
        <RightSection onScrollToSection={handleScrollClick} />
      </div>
      <div className="app-box__two">
        <BestBarbers />
        <BarberService />

        <FormSection />
        <PriceList />
        <Footer onScrollToSection={handleScrollClick}/>
      </div>
    </>
  );
}

export default App;
