import Navbar from '../components/Navbar'

import Hero from '../components/Home/Hero'

import ProductsGrid from '../components/Home/ProductsGrid'

import '../pages css/home.css'

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