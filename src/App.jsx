import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import About from './pages/About'
import Browse from './pages/Browse'
import HowItWorks from './pages/HowItWorks'
import Sell from './pages/Sell'
import Account from './pages/Account'

function App() {

    return (

        <>
            <Navbar />

            <Routes>

                <Route path="/"           element={<Home />}      />
                <Route path="/browse"     element={<Browse />}    />
                <Route path="/product/:id"element={<Product />}   />
                <Route path="/cart"       element={<Cart />}      />
                <Route path="/about"      element={<About />}     />
                <Route path="/HowItWorks" element={<HowItWorks />}/>
                <Route path="/sell"       element={<Sell />}      />
                <Route path="/account"    element={<Account />}   />

            </Routes>

            <Footer />
        </>

    )

}

export default App

// hmr-test

// hmr-test-2