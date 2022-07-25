import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pagehandler }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(826 / 20));
  }, [itemOffset]);

  function handlePageClick({ selected }) {
    const newOffset = (selected * 20) % 826;
    setItemOffset(newOffset);
    pagehandler(selected + 1);
  }

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next &rarr;"
        previousLabel="&larr; previous"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
    </div>
  );
}

export default Pagination;
