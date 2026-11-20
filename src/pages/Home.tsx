import Banner from "../components/Banner";
import Header from "../components/Header";
import LocationMenu from "../components/LocationMenu";
import TopCompanions from "../components/TopCompanions";

const Home = () => {
  return (
    <div>
      <Header />
      <LocationMenu />
      <TopCompanions />
      <Banner />
    </div>
  );
};

export default Home;
