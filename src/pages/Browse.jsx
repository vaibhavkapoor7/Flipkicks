import { useEffect, useState }
from "react";

import BrowseLayout from '../components/Browse/BrowseLayout/BrowseLayout'

import { fetchProducts }
from "../api/productsApi";

function Browse() {

  /* products */

  const [products, setProducts] =
  useState([]);

  /* search */

  const [searchValue,
  setSearchValue] =
  useState("");

  /* category */

  const [selectedCategory,
  setSelectedCategory] =
  useState("All Sneakers");

  /* brand */

  const [selectedBrand,
  setSelectedBrand] =
  useState("");

  /* size */

  const [selectedSize,
  setSelectedSize] =
  useState("");

  /* price */

  const [price,
  setPrice] =
  useState(1000);

  /* condition */

  const [condition,
  setCondition] =
  useState("All");

  /* sorting */

  const [sortType,
  setSortType] =
  useState("trending");

  /* view */

  const [view,
  setView] =
  useState("grid");

  /* fetch */

  useEffect(() => {

    async function loadProducts(){

      const data =
      await fetchProducts();

      setProducts(data);
    }

    loadProducts();

  }, []);

  /* filtering */

  let finalProducts =
  [...products];

  /* search */

  if(searchValue){

    finalProducts =
    finalProducts.filter((product) =>

      product.title
      .toLowerCase()
      .includes(
        searchValue.toLowerCase()
      )

    );
  }

  /* category */

  if(
    selectedCategory !==
    "All Sneakers"
  ){

    finalProducts =
    finalProducts.filter((product) =>

      product.brand
      ?.toLowerCase()
      .includes(
        selectedCategory.toLowerCase()
      )

    );
  }

  /* brand */

  if(selectedBrand){

    finalProducts =
    finalProducts.filter((product) =>

      product.brand
      ?.toLowerCase()
      .includes(
        selectedBrand.toLowerCase()
      )

    );
  }

  /* price */

  finalProducts =
  finalProducts.filter((product) =>

    product.price <= price
  );

  /* sorting */

  finalProducts.sort((a, b) => {

    if(sortType === "low"){

      return a.price - b.price;
    }

    if(sortType === "high"){

      return b.price - a.price;
    }

    return 0;
  });

  return (

      <BrowseLayout

        /* products */

        products={finalProducts}

        /* search */

        searchValue={searchValue}

        setSearchValue={
          setSearchValue
        }

        /* category */

        selectedCategory={
          selectedCategory
        }

        setSelectedCategory={
          setSelectedCategory
        }

        /* brand */

        selectedBrand={
          selectedBrand
        }

        setSelectedBrand={
          setSelectedBrand
        }

        /* size */

        selectedSize={
          selectedSize
        }

        setSelectedSize={
          setSelectedSize
        }

        /* price */

        price={price}

        setPrice={setPrice}

        /* condition */

        condition={condition}

        setCondition={
          setCondition
        }

        /* sorting */

        sortType={sortType}

        setSortType={
          setSortType
        }

        /* view */

        view={view}

        setView={setView}

      />

  );
}

export default Browse;