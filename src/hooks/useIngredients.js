import { useEffect, useState } from "react";

const useIngredients = data => {
  const [processedData, setProcessedData] = useState([]);

  useEffect(
    () => {
      const processedProduct = product => {
        const ingredients = product.ingredients;

        const ingredients_all = Object.keys(ingredients)
          .map(
            key =>
              Array.isArray(ingredients[key])
                ? ingredients[key].map(ing => ing.name)
                : ingredients[key]
          )
          .flat();

        const numToDisplay = ingredients_all.length ? 3 : 0;
        const ingredients_short = new Array(numToDisplay)
          .fill()
          .map(
            () =>
              ingredients_all[
                Math.round(Math.random() * (ingredients_all.length - 1))
              ]
          )
          .join(", ");

        return {
          ...product,
          ingredients_all,
          ingredients_short
        };
      };

      setProcessedData(data.map(datum => processedProduct(datum)));
    },
    [data]
  );

  return processedData;
};

export default useIngredients;
