// Home.jsx - Complete Home Page

import Banner from "../../Componets/Header/Banner";
import PopularContests from "../../Componets/Header/PopularContests";
import WinnerSection from "../../Componets/Header/WinnerSection";


const Home = () => {
  return (
    <div>
      <Banner/>
      <PopularContests/>
      <WinnerSection/>
    </div>
  );
};

export default Home;