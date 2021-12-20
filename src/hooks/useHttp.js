import { useState, useEffect } from "react";
import { noDataPlaceholder } from "../utils/index";

// eslint-disable-next-line react-hooks/exhaustive-deps
const useHttp = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setFetchedData] = useState([]);

  useEffect(
    () => {
      setIsLoading(true);
      if (!isLoading) {
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error("Failed to fetch data for " + url + ".");
            }
            return response.json();
          })
          .then(data => {
            setTimeout(() => {
              setIsLoading(false);
              setFetchedData(data.length ? data : [noDataPlaceholder]);
            }, process.env.REACT_APP_REQUEST_DELAY);
          })
          .catch(err => {
            setIsLoading(false);
            setFetchedData([]);
          });
      }
    },
    [url]
  );

  return [isLoading, data];
};

export default useHttp;
