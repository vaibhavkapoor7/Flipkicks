import { createContext, useContext, useState } from "react";

const defaultValue = {
  wishlist: [],
  isWishlisted: () => false,
  toggleWishlist: () => {},
};

const WishlistContext = createContext(defaultValue);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  function isWishlisted(id) {
    return wishlist.includes(id);
  }

  function toggleWishlist(id) {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  }

  return (
    <WishlistContext.Provider value={{ wishlist, isWishlisted, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
