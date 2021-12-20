import React, { useContext } from "react";
import { func, number } from "prop-types";

import Nav from "react-bootstrap/Nav";
import Pagination from "react-bootstrap/Pagination";

import LoadingContext from "../../contexts/LoadingContext";

const PageNavBar = ({ setPage, pages, page }) => {
  const isLoading = useContext(LoadingContext);

  const maxPages = pages > 1 ? pages : page;
  var numbersArr = Array.from(Array(maxPages).keys()).map(num => num + 1);

  if (page > 4) {
    numbersArr.splice(1, page - 3, "...");
  }

  return (
    <Nav className="justify-content-center align-items-end">
      <Pagination>
        {page > 1
          ? <Pagination.First onClick={() => setPage(1)} disabled={isLoading} />
          : null}
        <Pagination.Prev
          onClick={() => setPage(page > 1 ? page - 1 : page)}
        />{" "}
        {numbersArr.map(
          (pageNum, i) =>
            pageNum === "..."
              ? <Pagination.Ellipsis key={i} />
              : <Pagination.Item
                  key={i}
                  active={pageNum === page}
                  disabled={isLoading}
                  onClick={() => setPage(pageNum)}
                >
                  {pageNum}
                </Pagination.Item>
        )}
        <Pagination.Next onClick={() => setPage(page + 1)} />
      </Pagination>
    </Nav>
  );
};

PageNavBar.propTypes = {
  setPage: func,
  pages: number,
  page: number
};

export default PageNavBar;
