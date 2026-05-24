import Navbar from '../components/Navbar/Navbar'

import Hero from '../components/home/Hero/Hero'

import ProductsGrid from '../components/home/ProductsGrid'
import Productcard from '../components/home/Productcard/ProductCard'

import '../pages-css/home.css'

function Home() {

    return (

        <div className="home-page">

            <Navbar />

            <Hero />

            <ProductsGrid />

        </div>

    )

}

export default Home