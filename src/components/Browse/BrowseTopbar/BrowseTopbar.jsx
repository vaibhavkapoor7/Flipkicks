import {

  LayoutGrid,

  Rows3,

  SlidersHorizontal

} from "lucide-react";

import "./BrowseTopbar.css";

function BrowseTopbar({

  totalProducts,

  view,
  setView,

  sortType,
  setSortType

}) {

  return (

    <div className="browse-topbar">

      {/* left */}

      <div className="topbar-left">

        <h2>
          Browse Sneakers
        </h2>

        <p>

          Showing 1–20 of
          {" "}
          {totalProducts}
          {" "}
          sneakers

        </p>

      </div>

      {/* right */}

      <div className="topbar-right">

        {/* sort */}

        <div className="sort-box">

          <SlidersHorizontal size={16} />

          <select

            value={sortType}

            onChange={(e) =>
              setSortType(
                e.target.value
              )
            }

          >

            <option value="trending">
              Trending
            </option>

            <option value="low">
              Price Low - High
            </option>

            <option value="high">
              Price High - Low
            </option>

          </select>

        </div>

        {/* views */}

        <div className="view-buttons">

          <button

            className={
              view === "grid"
              ? "active-view"
              : ""
            }

            onClick={() =>
              setView("grid")
            }

          >

            <LayoutGrid size={18} />

          </button>

          <button

            className={
              view === "list"
              ? "active-view"
              : ""
            }

            onClick={() =>
              setView("list")
            }

          >

            <Rows3 size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default BrowseTopbar;