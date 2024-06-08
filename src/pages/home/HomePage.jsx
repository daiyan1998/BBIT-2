import Cta from "../../components/shared/Cta";
import Services from "./Services";
import Transportation from "./Transportation";
import { TransportationService } from "./TransportationService";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <TransportationService />
      <Transportation />
      <Services />
      <Cta />
    </>
  );
};

export default Home;
