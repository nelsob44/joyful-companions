import Banner from "../components/Banner";
import Header from "../components/Header";
import SpecialityMenu from "../components/LocationMenu";
import TopCompanions from "../components/TopCompanions";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopCompanions />
      <Banner />
    </div>
  );
};

export default Home;
