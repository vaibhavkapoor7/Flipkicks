import Navbar from '../components/Navbar/Navbar'
import InfinityScroll from '../components/home/InfinityScroll/InfinityScroll'

import Hero from '../components/home/Hero/Hero'

import ProductsGrid from '../components/home/Productsgrid/ProductsGrid'
import Productcard from '../components/home/Productcard/ProductCard'
import StatsBar from '../components/home/Statsbar/StatsBar'
import BrandsTicker from '../components/home/BrandsTicker/BrandsTicker'
import HowItWorks from '../components/home/HowItWorks/HowItWorks'
import Testimonials from '../components/home/Testimonials/Testimonials'
import Community from '../components/home/Community/Community'
import Footer from '../components/Footer/Footer'

import '../pages-css/home.css'

function Home() {

    return (

        <div className="home-page">

            <Navbar />
            <Hero />
            <InfinityScroll />
            <ProductsGrid />
            <BrandsTicker />
            <StatsBar />
            <HowItWorks />
            <Testimonials />
            <Community />
            <Footer />
            
        </div>

    )

}

export default Home