import About from "../Components/Landing/About/About";
import Hero from "../Components/Landing/Hero/Hero";
import Healthy from "../Components/Landing/HealthyCarousel/Healthy";
import Customer from "../Components/Landing/Customer/Customer";
import Deliver from "../Components/Landing/Deliver/Deliver";
import Steps from "../Components/Landing/Steps/Steps";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "max-content",
      }}
    >
      <Hero />
      <About />
      <Healthy />
      <Customer />
      <Deliver />
      <Steps />
    </div>
  );
};

export default Home;
