// Home.jsx - Complete Home Page
import Banner from "../../Componets/Header/Banner";
import PopularContests from "../../Componets/PopularContests/PopularContests";
import WinnerSection from "../../Componets/WinnerSection/WinnerSection";
import ExtraSection from "../../Componets/ExtraSection/ExtraSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularContests />
      <WinnerSection />
      <ExtraSection />
    </div>
  );
};

export default Home;