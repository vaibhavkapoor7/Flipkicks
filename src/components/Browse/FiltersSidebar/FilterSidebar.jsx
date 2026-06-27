import {
  Search,
  ChevronDown
} from "lucide-react";

import "./FiltersSidebar.css";

function FiltersSidebar({

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
  setCondition

}) {

  /* categories */

  const categories = [

    "All Sneakers",

    "Jordan",

    "Nike",

    "Yeezy",

    "Adidas",

    "New Balance",

    "Dunks"

  ];

  /* sizes */

  const sizes = [

    "7",
    "7.5",
    "8",
    "8.5",

    "9",
    "9.5",
    "10",
    "10.5",

    "11",
    "11.5",
    "12",
    "12.5",

    "13",
    "14",
    "15",
    "16"

  ];

  /* brands */

  const brands = [

    "Nike",

    "Jordan",

    "Adidas",

    "New Balance",

    "Puma",

    "Reebok"

  ];

  /* conditions */

  const conditions = [

    "All",

    "New",

    "Like New",

    "Used"

  ];

  /* clear */

  function clearFilters(){

    setSearchValue("");

    setSelectedCategory(
      "All Sneakers"
    );

    setSelectedBrand("");

    setSelectedSize("");

    setPrice(1000);

    setCondition("All");
  }

  return (

    <aside className="filters-sidebar">

      {/* top */}

      <div className="filters-top">

        <h3>
          Filters
        </h3>

        <button
          onClick={clearFilters}
        >
          Clear all
        </button>

      </div>

      {/* search */}

      <div className="filter-section">

        <h4>
          Search
        </h4>

        <div className="filter-search">

          <Search size={16} />

          <input

            type="text"

            placeholder="Search sneakers..."

            value={searchValue}

            onChange={(e) =>
              setSearchValue(
                e.target.value
              )
            }

          />

        </div>

      </div>

      {/* categories */}

      <div className="filter-section">

        <div className="section-title">

          <h4>
            Categories
          </h4>

          <ChevronDown size={16} />

        </div>

        <div className="checkbox-list">

          {categories.map((item, index) => (

            <label key={index}>

              <div className="left-check">

                <input

                  type="radio"

                  name="category"

                  checked={
                    selectedCategory
                    === item
                  }

                  onChange={() =>
                    setSelectedCategory(
                      item
                    )
                  }

                />

                <span>
                  {item}
                </span>

              </div>

            </label>

          ))}

        </div>

      </div>

      {/* sizes */}

      <div className="filter-section">

        <div className="section-title">

          <h4>
            Size (US Men)
          </h4>

          <ChevronDown size={16} />

        </div>

        <div className="sizes-grid">

          {sizes.map((size, index) => (

            <button

              key={index}

              className={
                selectedSize === size
                ? "active-size"
                : ""
              }

              onClick={() =>
                setSelectedSize(size)
              }

            >

              {size}

            </button>

          ))}

        </div>

      </div>

      {/* price */}

      <div className="filter-section">

        <div className="section-title">

          <h4>
            Price Range
          </h4>

          <ChevronDown size={16} />

        </div>

        <input

          type="range"

          min="50"

          max="1000"

          value={price}

          onChange={(e) =>
            setPrice(
              Number(e.target.value)
            )
          }

        />

        <div className="price-boxes">

          <div className="price-box">
            $50
          </div>

          <span>
            to
          </span>

          <div className="price-box">
            ${price}
          </div>

        </div>

      </div>

      {/* condition */}

      <div className="filter-section">

        <h4>
          Condition
        </h4>

        <div className="checkbox-list">

          {conditions.map((item, index) => (

            <label key={index}>

              <div className="left-check">

                <input

                  type="radio"

                  name="condition"

                  checked={
                    condition === item
                  }

                  onChange={() =>
                    setCondition(item)
                  }

                />

                <span>
                  {item}
                </span>

              </div>

            </label>

          ))}

        </div>

      </div>

      {/* brands */}

      <div className="filter-section">

        <h4>
          Brands
        </h4>

        <div className="checkbox-list">

          {brands.map((item, index) => (

            <label key={index}>

              <div className="left-check">

                <input

                  type="radio"

                  name="brand"

                  checked={
                    selectedBrand
                    === item
                  }

                  onChange={() =>
                    setSelectedBrand(
                      item
                    )
                  }

                />

                <span>
                  {item}
                </span>

              </div>

            </label>

          ))}

        </div>

      </div>

    </aside>
  );
}

export default FiltersSidebar;