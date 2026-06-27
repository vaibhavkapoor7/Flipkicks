import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import "./Pagination.css";

function Pagination({

  currentPage,

  setCurrentPage,

  totalProducts,

  productsPerPage = 12

}) {

  /* total pages */

  const totalPages =
  Math.ceil(
    totalProducts / productsPerPage
  );

  /* create pages */

  const pages = [];

  for(
    let i = 1;
    i <= totalPages;
    i++
  ){

    pages.push(i);
  }

  /* prev */

  function handlePrev(){

    if(currentPage > 1){

      setCurrentPage(
        currentPage - 1
      );
    }
  }

  /* next */

  function handleNext(){

    if(currentPage < totalPages){

      setCurrentPage(
        currentPage + 1
      );
    }
  }

  return (

    <div className="pagination">

      {/* prev */}

      <button

        className="page-btn"

        onClick={handlePrev}

        disabled={currentPage === 1}

      >

        <ChevronLeft size={18} />

      </button>

      {/* pages */}

      <div className="page-numbers">

        {pages.map((page) => (

          <button

            key={page}

            className={
              currentPage === page
              ? "active-page"
              : ""
            }

            onClick={() =>
              setCurrentPage(page)
            }

          >

            {page}

          </button>

        ))}

      </div>

      {/* next */}

      <button

        className="page-btn"

        onClick={handleNext}

        disabled={
          currentPage === totalPages
        }

      >

        <ChevronRight size={18} />

      </button>

    </div>
  );
}

export default Pagination;