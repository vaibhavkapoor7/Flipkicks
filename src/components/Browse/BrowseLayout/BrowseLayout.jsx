import FiltersSidebar from
"../FiltersSidebar/FilterSidebar";

import BrowseTopbar from
"../BrowseTopbar/BrowseTopbar";

import BrowseProductGrid from
"../BrowseProductsGrid/BrowseProductsGrid";

import Pagination from
"../Pagination/Pagination";

import "./BrowseLayout.css";

function BrowseLayout({

  products,

  searchValue,
  setSearchValue,

  selectedCategory,
  setSelectedCategory,

  selectedBrand,
  setSelectedBrand,

  selectedSize,
  setSelectedSize,

  price,
  setPrice,

  condition,
  setCondition,

  sortType,
  setSortType,

  view,
  setView

}) {

  return (

    <section className="browse-layout">

      {/* sidebar */}

      <FiltersSidebar

        searchValue={searchValue}

        setSearchValue={
          setSearchValue
        }

        selectedCategory={
          selectedCategory
        }

        setSelectedCategory={
          setSelectedCategory
        }

        selectedBrand={
          selectedBrand
        }

        setSelectedBrand={
          setSelectedBrand
        }

        selectedSize={
          selectedSize
        }

        setSelectedSize={
          setSelectedSize
        }

        price={price}

        setPrice={setPrice}

        condition={condition}

        setCondition={
          setCondition
        }

      />

      {/* content */}

      <div className="browse-content">

        <BrowseTopbar

          totalProducts={
            products.length
          }

          sortType={sortType}

          setSortType={
            setSortType
          }

          view={view}

          setView={setView}

        />

        <BrowseProductGrid

          products={products}

          view={view}

        />

        <Pagination />

      </div>

    </section>
  );
}

export default BrowseLayout;