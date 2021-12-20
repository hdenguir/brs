import useHttp from "./useHttp";
import useIngredients from "./useIngredients";

const useFetch = (perpage, page, filter) => {
  const search =
    filter.beerName && filter.beerName.length
      ? ["beer_name=" + filter.beerName]
      : [];

  const params = ["per_page=" + perpage, "page=" + page]
    .concat(search)
    .join("&");

  const [isLoading, data] = useHttp(
    process.env.REACT_APP_PRODUCTS_API_URL + "?" + params
  );

  const processedData = useIngredients(data);

  return [isLoading, processedData];
};

export default useFetch;
