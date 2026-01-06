import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'
import endeavour from '../assets/endeavour.jfif'
import hummer from '../assets/hummer.jfif'
import porsche from '../assets/porsche.jfif'
import thar from '../assets/thar.jfif'
import Increment from '../components/Increment'

function Home() {
  const carsData = [
    {
      id: 1,
      name: "Endeavour",
      image: endeavour,
      priceRange: "33 to 58 lakh",
      mileage: "12-14km/l",
    },
    {
      id: 2,
      name: "Hummer",
      image: hummer,
      priceRange: "1 crore +",
      mileage: "10-12km/l",
    },
    {
      id: 3,
      name: "Thar",
      image: thar,
      priceRange: "18-24 lakh",
      mileage: "16-18km/l",
    },
    {
      id: 4,
      name: "Porsche",
      image: porsche,
      priceRange: "1.5 - 3 crore",
      mileage: "8-11km/l",
    },
  ];

  return (
    <>
      <Header />
      <HomeContent carsData={carsData} />
      <Footer />
      <Increment />
    </>
  )
}

export default Home
