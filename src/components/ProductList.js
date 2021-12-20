import React, { useContext } from "react";
import { arrayOf, object } from "prop-types";

import Row from "react-bootstrap/Row";

import LoadingContext from "../contexts/LoadingContext";
import { loadingPlaceholder } from "../utils/index";
import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  const isLoading = useContext(LoadingContext);

  const products = isLoading ? [loadingPlaceholder] : data;

  return (
    <div>
      <Row>
        {products.map(productInfo =>
          <ProductCard key={productInfo.id} productInfo={productInfo} />
        )}
      </Row>
    </div>
  );
};

ProductList.propTypes = {
  data: arrayOf(object)
};

export default ProductList;
