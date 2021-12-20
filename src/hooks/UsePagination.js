// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect } from "react";

const usePagination = (
  setAllPages,
  setPages,
  setPage,
  filter,
  allPages,
  pages,
  page
) => {
  useEffect(
    () => {
      setPage(1);
      setPages(allPages[filter.beerName] || 1);
    },
    [filter.beerName]
  );

  useEffect(
    () => {
      const endPage = Math.max(pages, page);
      setPages(endPage);
      setAllPages({ ...allPages, [filter.beerName]: endPage });
    },
    [page]
  );
};

export default usePagination;
