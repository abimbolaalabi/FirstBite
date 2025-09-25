
import About from '../Components/Landing/About/About'
import Hero from '../Components/Landing/Hero/Hero'
import Healthy from '../Components/Landing/HealthyCarousel/Healthy'
import Customer from '../Components/Landing/Customer/Customer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Healthy/>
        <Customer/>
    </div>
  )
}

export default Home
