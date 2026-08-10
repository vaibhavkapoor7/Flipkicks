import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { CartProvider } from './context/CartContext'
import { CurrencyProvider } from './context/CurrencyContext'
import { WishlistProvider } from './context/WishlistContext'

import './index.css'

ReactDOM.createRoot(
    document.getElementById('root')
).render(

    <BrowserRouter>
        <CurrencyProvider>
            <CartProvider>
                <WishlistProvider>
                    <App />
                </WishlistProvider>
            </CartProvider>
        </CurrencyProvider>
    </BrowserRouter>

)

// main-hmr-test
