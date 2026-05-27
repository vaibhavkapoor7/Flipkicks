import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import About from './pages/About'
import Browse from './pages/Browse'

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
                path="/wishlist"
                element={<Wishlist />}
            />

            <Route
                path="/about"
                element={<About />}
            />

        </Routes>

    )

}

export default App

// hmr-test

// hmr-test-2