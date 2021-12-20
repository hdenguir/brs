import React, { useState } from "react";

import usePagination from "../hooks/UsePagination";
import useFetch from "../hooks/useFetch";
import ProductPage from "../components/ProductPage";
import LoadingContext from "../contexts/LoadingContext";

const Home = () => {
  const perPage = process.env.REACT_APP_PRODUCTS_PER_PAGE;

  const [allPages, setAllPages] = useState({});
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});

  usePagination(setAllPages, setPages, setPage, filter, allPages, pages, page);
  const [isLoading, data] = useFetch(perPage, page, filter);

  return (
    <LoadingContext.Provider value={isLoading}>
      <ProductPage {...{ setPage, setFilter, pages, page, data }} />
    </LoadingContext.Provider>
  );
};

export default Home;
