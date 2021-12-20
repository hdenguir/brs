import React, { useState } from "react";
import { func, number, arrayOf, object, bool } from "prop-types";

import ProductModal from "./ProductModal";
import ProductList from "./ProductList";
import ProductNavBar from "./navbars/ProductNavBar";
import PageNavBar from "./navbars/PageNavBar";
import ModalContext from "../contexts/ModalContext";
import CartNavBar from "./navbars/CartNavBar";

const ProductPage = ({ setPage, setFilter, pages, page, data, isCart }) => {
  const [productModal, setProductModal] = useState({
    show: false,
    productInfo: {}
  });

  return (
    <ModalContext.Provider value={{ productModal, setProductModal }}>
      <ProductModal />
      {isCart ? <CartNavBar /> : <ProductNavBar {...{ page, setFilter }} />}
      <ProductList {...{ data }} />
      {!isCart && <PageNavBar {...{ setPage, pages, page }} />}
    </ModalContext.Provider>
  );
};

ProductPage.propTypes = {
  setPage: func,
  setFilter: func,
  pages: number,
  page: number,
  data: arrayOf(object),
  isCart: bool
};

export default ProductPage;
