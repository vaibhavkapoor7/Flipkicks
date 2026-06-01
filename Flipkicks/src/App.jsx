import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import About from './pages/About'
import Browse from './pages/Browse'
import HowItWorks from './pages/HowItWorks'

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/browse"
                element={<Browse />}
            />

            <Route
                path="/product/:id"
                element={<Product />}
            />

            <Route
                path="/cart"
                element={<Cart />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/HowItWorks"
                element={<HowItWorks />}
            />

        </Routes>

    )

}

export default App

// hmr-test

// hmr-test-2